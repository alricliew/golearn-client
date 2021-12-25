// This is client core js

// Check if user logged on
function AuthCheck(){
  firebase.auth().onAuthStateChanged(function(user){
    if(!user){
      // Return to login if user does not exist.
      window.location.href = "https://app.golearn.com.my/"
    }else{
      // if the displayName is null, it means user register using Phone
      if (firebase.auth().currentUser.displayName == null )
        userId = firebase.auth().currentUser.phoneNumber;
      else
        userId = firebase.auth().currentUser.email.replace("[^a-zA-Z0-9]", "_").toLowerCase();
  
      loadClientInfoObj(userId); // client-core.js
  
    }
  });
}

// Set the nav name and global var, if user already login and have session Storage 
var clientInfoObj = null;
// Check If clientInfoObj exist
function loadClientInfoObj(userId){
  
  if (JSON.parse(sessionStorage.getItem(PROFILE_CLIENT_INFO)) == null ){
    // Although user exist, but the storage is null. Reload.
    loadUserInfo(userId);
  }
  else{
    // Set the nav user name
    clientInfoObj = JSON.parse(sessionStorage.getItem(PROFILE_CLIENT_INFO));

    current_name = (clientInfoObj.name == null || clientInfoObj.name == "")? "New Tutor" : clientInfoObj.name;
    current_email = (clientInfoObj.email == null || clientInfoObj.email == "")? "" : clientInfoObj.email; 
    current_phone = (clientInfoObj.phone == null || clientInfoObj.phone == "")? "New Tutor" : clientInfoObj.phone; 
    current_age = (clientInfoObj.age == null || clientInfoObj.age == "")? "18" : clientInfoObj.age; 
    current_gender= (clientInfoObj.gender == 0)? "Male" : "Female"; 
    current_imgUri = (clientInfoObj.imgUrl == null || clientInfoObj.imgUrl == "")? "https://app.golearn.com.my/assets/img/hello.gif" : clientInfoObj.imgUrl;
    current_accountStatus = clientInfoObj.accountStatus; // bool
    current_address1= (clientInfoObj.address1 == null || clientInfoObj.address1 == "")? '' : clientInfoObj.address1 + ', ';
    current_address2= (clientInfoObj.address2 == null || clientInfoObj.address2 == "")? '' : clientInfoObj.address2 + ', '; 
    current_addressPostCode= (clientInfoObj.addressPostCode == null || clientInfoObj.addressPostCode == "")? '' : clientInfoObj.addressPostCode + ', ';
    current_addressState= (clientInfoObj.addressState == null || clientInfoObj.addressState == "")? '' : clientInfoObj.addressState;
    current_address = current_address1 + current_address2 + current_addressPostCode + current_addressState;
    current_uLastOnline = clientInfoObj.uLastOnline;

    // Check if user logged in with other number. If true, logout
    if (current_phone != userId){
      // console.log("Stored userId in session storage is equal to latest tutorId. ")
      window.location.href = "https://app.golearn.com.my/client/login.html";
    }

    // let secondLastOnline = current_uLastOnline.seconds;
    // let secondCurrent = new Date().getTime() / 1000;
    // let hoursEllapsed = (secondCurrent - secondLastOnline) / 60 / 60;
    // let reload = hoursEllapsed > 6;
    // console.log(secondLastOnline, secondCurrent, hoursEllapsed, reload)

    // Check last online. If > 6hr, reload
    if (current_uLastOnline == null || current_uLastOnline == ""){
      // console.log("current_uLastOnline == null, loadUserInfo "+userId )
      loadUserInfo(userId);
    }else{
      let secondLastOnline = current_uLastOnline.seconds;
      let secondCurrent = new Date().getTime() / 1000;
      let hoursEllapsed = (secondCurrent - secondLastOnline) / 60 / 60;
      let reload = hoursEllapsed > 6;
      
      console.log(secondLastOnline, secondCurrent, hoursEllapsed, reload);
      if (reload){
        // console.log("reload, loadUserInfo "+userId )
        loadUserInfo(userId);
      }
      else {
        // console.log("local storage found "+userId )
        // Update the general view
        updateGeneralView();
        // Finally, load page specific view.
        // This function will be declared separately in each page
        loadPageInitFunc(); 
      }
    }


  }
}

function loadUserInfo(userId){
  // Tutor Id must be a phone with +60, no spacing or other chars
  var docRef = db.collection("Users").doc(userId);
  
  docRef.get().then((doc) => {
    if (doc.exists) {
      // console.log("Document data:", doc.data());
      current_name = (doc.data().name == null || doc.data().name == "")? "New User" : doc.data().name;
      current_email = (doc.data().email == null || doc.data().email == "")? "" : doc.data().email;
      current_phone = (doc.data().phone == null || doc.data().phone == "")? "" : doc.data().phone; 
      current_imgUri = (doc.data().imgUrl == null || doc.data().imgUrl == "")? "https://app.golearn.com.my/assets/img/hello.gif" : doc.data().imgUrl;
      current_address1= (doc.data().address1 == null || doc.data().address1 == "")? '' : doc.data().address1 + ', ';
      current_address2= (doc.data().address2 == null || doc.data().address2 == "")? '' : doc.data().address2 + ', '; 
      current_addressPostCode= (doc.data().addressPostCode == null || doc.data().addressPostCode == "")? '' : doc.data().addressPostCode + ', ';
      current_addressState= (doc.data().addressState == null || doc.data().addressState == "")? '' : doc.data().addressState;
      current_address = current_address1 + current_address2 + current_addressPostCode + current_addressState;
      current_uLastOnline = doc.data()[SYSTEM_LAST_ONLINE_KEY]

      // Store data to sessionStorage
      var clientDataObj = {
        [NAME_KEY] : doc.data()[NAME_KEY],
        [EMAIL_KEY] : doc.data()[EMAIL_KEY],
        [PHONE_KEY] : doc.data()[PHONE_KEY],
        [ADDRESS_1_KEY] :doc.data().address1,
        [ADDRESS_2_KEY] :doc.data().address2,
        [ADDRESS_POSTCODE_KEY] :doc.data().addressPostCode,
        [ADDRESS_STATE_KEY] :doc.data().addressState,
        [IMAGE_KEY] : doc.data().imgUrl,
        [SYSTEM_LAST_ONLINE_KEY] : doc.data()[SYSTEM_LAST_ONLINE_KEY],
      }

      // Set clientInfoObj as sessionStorage
      sessionStorage.setItem(PROFILE_CLIENT_INFO, JSON.stringify(clientDataObj));

      // Update the general view
      updateGeneralView();
      // Finally, load page specific view.
      // This function will be declared separately in each page
      loadPageInitFunc(); 

      // Set the nav user name 
      // document.getElementById("user").textContent = doc.data()[NAME_KEY];
    } 
    else {
      window.location = "https://app.golearn.com.my/"
    }
  });

  // Log last online
  let docLastOnlineRef = db.collection("Users").doc(userId);
  docLastOnlineRef.get().then((doc) => {
    if (doc.exists) {
      // Update last online 
      let docRef = db.collection("Users").doc(userId);
      docRef.set({
        [SYSTEM_LAST_ONLINE_KEY] : new Date() //firebase.firestore.Timestamp.fromDate(new Date())
        }, 
        { merge: true });
    } 
    else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  }).catch((error) => {
      console.log("Error getting document:", error);
  });
  
};

// Update General View
function updateGeneralView(){
  // Set the nav user name and public profile link
  document.getElementById("user").textContent = current_name;

}


$( document ).ready(function() {
  // Sign Out
  $('#btnSignOutModalUpdate').on('click', function (e) {
    firebase.auth().signOut().then(() => {
      // Sign-out successful.
      }).catch((error) => {
        window.alert("Logging out failed");
        func.showNotification('top','center', 'danger', 'error_outline', "Logging out failed." );
      });
  });

});

// Sign out
function signOutFunction(){
  // $('#signOutModal').modal('show');
  $("#signOutModal").appendTo("body");
}


// Function to show notification
func = {
  showNotification: function(from, align, type, material_icon, message) {
    // type = ['', 'info', 'danger', 'success', 'warning', 'rose', 'primary'];
    // color = Math.floor((Math.random() * 6) + 1);
    $.notify({
      icon: material_icon,
      message: message

    }, {
      type: type,
      timer: 3000,
      placement: {
        from: from,
        align: align
      }
    });
  },
}