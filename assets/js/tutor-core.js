// This is tutor core js

// Check if user logged on
function AuthCheck(){
  firebase.auth().onAuthStateChanged(function(user){
    if(!user){
      // Return to login if user does not exist.
      window.location.href = "https://app.golearn.com.my/"
    }else{
      // if the displayName is null, it means user register using Phone
      if (firebase.auth().currentUser.displayName == null )
        tutorId = firebase.auth().currentUser.phoneNumber;
      else
        tutorId = firebase.auth().currentUser.email.replace("[^a-zA-Z0-9]", "_").toLowerCase();

      loadTutorInfoObj(tutorId); // tutor-core.js
  
    }

  });
}

// Set the nav name and global var, if user already login and have session Storage 
var tutorInfoObj = null;
// Check If tutorInfoObj exist
function loadTutorInfoObj(tutorId){
  
  if (JSON.parse(sessionStorage.getItem(PROFILE_TUTOR_INFO)) == null ){
    // Although user exist, but the storage is null. Reload.
    loadUserInfo(tutorId);
  }
  else{
    // Set the nav user name
    tutorInfoObj = JSON.parse(sessionStorage.getItem(PROFILE_TUTOR_INFO));
    current_id = (tutorInfoObj.id == null || tutorInfoObj.id == "") ? "NO_ID" : tutorInfoObj.id; // This was added to check if different user is logged in on the same browser.
    current_name = (tutorInfoObj.name == null || tutorInfoObj.name == "")? "New Tutor" : tutorInfoObj.name;
    current_email = (tutorInfoObj.email == null || tutorInfoObj.email == "")? "" : tutorInfoObj.email; 
    current_phone = (tutorInfoObj.phone == null || tutorInfoObj.phone == "")? "New Tutor" : tutorInfoObj.phone; 
    current_age = (tutorInfoObj.age == null || tutorInfoObj.age == "")? "18" : tutorInfoObj.age; 
    current_gender= (tutorInfoObj.gender == 0)? "Male" : "Female"; 
    current_imgUri = (tutorInfoObj.imgUrl == null || tutorInfoObj.imgUrl == "")? "https://app.golearn.com.my/assets/img/hello.gif" : tutorInfoObj.imgUrl;
    current_accountStatus = tutorInfoObj.accountStatus; // bool
    current_address1= (tutorInfoObj.address1 == null || tutorInfoObj.address1 == "")? '' : tutorInfoObj.address1;
    current_address2= (tutorInfoObj.address2 == null || tutorInfoObj.address2 == "")? '' : tutorInfoObj.address2; 
    current_addressPostCode= (tutorInfoObj.addressPostCode == null || tutorInfoObj.addressPostCode == "")? '' : tutorInfoObj.addressPostCode;
    current_addressState= (tutorInfoObj.addressState == null || tutorInfoObj.addressState == "")? '' : tutorInfoObj.addressState;
    let current_address1_temp= (tutorInfoObj.address1 == null || tutorInfoObj.address1 == "")? '' : tutorInfoObj.address1 + ', ';
    let current_address2_temp= (tutorInfoObj.address2 == null || tutorInfoObj.address2 == "")? '' : tutorInfoObj.address2 + ', '; 
    let current_addressPostCode_temp= (tutorInfoObj.addressPostCode == null || tutorInfoObj.addressPostCode == "")? '' : tutorInfoObj.addressPostCode + ', ';
    current_address = current_address1_temp + current_address2_temp + current_addressPostCode_temp + current_addressState;
    currentYearsExperience = tutorInfoObj.yearsExperience; // number
    currentTutoringExperience = tutorInfoObj.tutoringExperience;
    currentTutoringApproach = tutorInfoObj.tutoringApproach;
    currentQualification = tutorInfoObj.qualification;
    current_rating = tutorInfoObj[RATING_KEY];
    current_ratingTimes = tutorInfoObj[RATING_TIMES_KEY];
    current_ratingFinal = tutorInfoObj[RATING_FINAL_KEY];
    current_preferedAreaList = tutorInfoObj.preferedAreaList;
    current_preferedSubjectList = tutorInfoObj.preferedSubjectList;
    isModeHomeStudentToTutor = tutorInfoObj.modeHomeStudentToTutor;
    isModeHomeTutorToStudent =  tutorInfoObj.modeHomeTutorToStudent;
    isModeGroup =  tutorInfoObj.modeGroup; 
    isModeOnline =  tutorInfoObj.modeOnline;
    isModeOnlineGroup = tutorInfoObj.modeOnlineGroup;
    isLanEng = tutorInfoObj.lanEng;
    isLanBm = tutorInfoObj.lanBm;
    isLanBc = tutorInfoObj.lanBc; 
    isLanBt = tutorInfoObj.lanBt;
    isLanOther = tutorInfoObj.lanOther;
    current_mon_8am = tutorInfoObj.tMon8am;
    current_mon_12pm= tutorInfoObj.tMon12pm; 
    current_mon_3pm = tutorInfoObj.tMon3pm;  
    current_mon_6pm = tutorInfoObj.tMon6pm;  
    current_tue_8am = tutorInfoObj.tTue8am;  
    current_tue_12pm= tutorInfoObj.tTue12pm;  
    current_tue_3pm = tutorInfoObj.tTue3pm;  
    current_tue_6pm = tutorInfoObj.tTue6pm;  
    current_wed_8am = tutorInfoObj.tWed8am;  
    current_wed_12pm= tutorInfoObj.tWed12pm;  
    current_wed_3pm = tutorInfoObj.tWed3pm;  
    current_wed_6pm = tutorInfoObj.tWed6pm;  
    current_thu_8am = tutorInfoObj.tThu8am;  
    current_thu_12pm= tutorInfoObj.tThu12pm;  
    current_thu_3pm = tutorInfoObj.tThu3pm;  
    current_thu_6pm = tutorInfoObj.tThu6pm;  
    current_fri_8am = tutorInfoObj.tFri8am;  
    current_fri_12pm= tutorInfoObj.tFri12pm;  
    current_fri_3pm = tutorInfoObj.tFri3pm;  
    current_fri_6pm = tutorInfoObj.tFri6pm; 
    current_sat_8am = tutorInfoObj.tSat8am;  
    current_sat_12pm= tutorInfoObj.tSat12pm;  
    current_sat_3pm = tutorInfoObj.tSat3pm;  
    current_sat_6pm = tutorInfoObj.tSat6pm;  
    current_sun_8am = tutorInfoObj.tSun8am;  
    current_sun_12pm= tutorInfoObj.tSun12pm;  
    current_sun_3pm = tutorInfoObj.tSun3pm;  
    current_sun_6pm = tutorInfoObj.tSun6pm;
    current_aweburl = tutorInfoObj.aWebUrl;
    current_aPremiumSubjectLimit = tutorInfoObj.aPremiumSubjectLimit; 
    current_aPremiumConnectLimit = tutorInfoObj.aPremiumConnectLimit; 
    current_aTotalSubjectLimit = tutorInfoObj.aTotalSubjectLimit;
    current_aTotalConnectLimit = tutorInfoObj.aTotalConnectLimit; 
    current_aPreferredSubjectLimit = tutorInfoObj.aPreferredSubjectLimit;
    current_aPreferredAreaLimit = tutorInfoObj.aPreferredAreaLimit;
    current_uLastOnline = tutorInfoObj.uLastOnline;

    // Check if user logged in with other number. If true, logout
    if (current_id != tutorId){
      // console.log("Stored TutorId in session storage is equal to latest tutorId. ")
      window.location.href = "https://app.golearn.com.my/school/login.html";
    }
    // console.log(current_uLastOnline)
    // let secondLastOnline = current_uLastOnline.seconds;
    // let secondCurrent = new Date().getTime() / 1000;
    // let hoursEllapsed = (secondCurrent - secondLastOnline) / 60 / 60;
    // let reload = hoursEllapsed > 6;
    // console.log(secondLastOnline, secondCurrent, hoursEllapsed, reload)

    // Check last online. If > 6hr, reload
    if (current_uLastOnline == null || current_uLastOnline == ""){
      // console.log("PROFILE_TUTOR_INFO exits, current_uLastOnline is null")
      loadUserInfo(tutorId);
    }
    else{
      let secondLastOnline = current_uLastOnline.seconds;
      let secondCurrent = new Date().getTime() / 1000;
      let hoursEllapsed = (secondCurrent - secondLastOnline) / 60 / 60;
      let reload = hoursEllapsed > 6;
      
      // console.log(secondLastOnline, secondCurrent, hoursEllapsed, reload);
      if (reload){
        // console.log("PROFILE_TUTOR_INFO exits, current_uLastOnline exits, reload true")
        loadUserInfo(tutorId);
      }
      else {
        // console.log("PROFILE_TUTOR_INFO exits, current_uLastOnline exits, reload false")
        // Update the general view
        updateGeneralView();
        // Finally, load page specific view.
        // This function will be declared separately in each page
        loadPageInitFunc(); 

        // Update Last Online
        let docLastOnlineRef = db.collection("Tutor").doc(tutorId);
        docLastOnlineRef.update({
          [SYSTEM_LAST_ONLINE_KEY] : new Date() //firebase.firestore.Timestamp.fromDate(new Date())
          }
        );


      }

    }


  }
}

// Load User Information
function loadUserInfo(tutorId){
  // Tutor Id must be a phone with +60, no spacing or other chars
  let docRef = db.collection("Tutor").doc(tutorId);
  
  docRef.get().then((doc) => {
  // docRef.onSnapshot((doc) => {
    if (doc.exists) {
      current_name = (doc.data().name == null || doc.data().name == "")? "New Tutor" : doc.data().name;
      current_email = (doc.data().email == null || doc.data().email == "")? "" : doc.data().email; 
      current_phone = (doc.data().phone == null || doc.data().phone == "")? "" : doc.data().phone; 
      current_age = (doc.data().age == null || doc.data().age == "")? "18" : doc.data().age; 
      current_gender= (doc.data().gender == 0)? "Male" : "Female"; 
      current_imgUri = (doc.data().imgUrl == null || doc.data().imgUrl == "")? "https://app.golearn.com.my/assets/img/hello.gif" : doc.data().imgUrl;
      current_accountStatus = doc.data().accountStatus;
      current_address1= (doc.data().address1 == null || doc.data().address1 == "")? '' : doc.data().address1;
      current_address2= (doc.data().address2 == null || doc.data().address2 == "")? '' : doc.data().address2; 
      current_addressPostCode= (doc.data().addressPostCode == null || doc.data().addressPostCode == "")? '' : doc.data().addressPostCode;
      current_addressState= (doc.data().addressState == null || doc.data().addressState == "")? '' : doc.data().addressState;
      let current_address1_temp= (doc.data().address1 == null || doc.data().address1 == "")? '' : doc.data().address1 + ', ';
      let current_address2_temp= (doc.data().address2 == null || doc.data().address2 == "")? '' : doc.data().address2 + ', '; 
      let current_addressPostCode_temp= (doc.data().addressPostCode == null || doc.data().addressPostCode == "")? '' : doc.data().addressPostCode + ', ';
      current_address = current_address1_temp + current_address2_temp + current_addressPostCode_temp + current_addressState;
      currentYearsExperience = doc.data().yearsExperience; // number
      currentTutoringExperience = doc.data().tutoringExperience;
      currentTutoringApproach = doc.data().tutoringApproach;
      currentQualification = doc.data().qualification;
      current_rating = doc.data()[RATING_KEY];
      current_ratingTimes = doc.data()[RATING_TIMES_KEY]; 
      current_ratingFinal = doc.data()[RATING_FINAL_KEY];
      isModeHomeStudentToTutor = doc.data()[CHECK_HOME_STUDENT_TO_TUTOR_KEY];
      isModeHomeTutorToStudent = doc.data()[CHECK_HOME_TUTOR_TO_STUDENT_KEY];
      isModeGroup = doc.data()[CHECK_GROUP_KEY]; 
      isModeOnline = doc.data()[CHECK_ONLINE_KEY];
      isModeOnlineGroup = doc.data()[CHECK_ONLINE_GROUP_KEY];
      isLanEng = doc.data()[CHECK_TEACHING_LANGUAGE_ENGLISH_KEY];
      isLanBm = doc.data()[CHECK_TEACHING_LANGUAGE_BM_KEY];
      isLanBc = doc.data()[CHECK_TEACHING_LANGUAGE_BC_KEY]; 
      isLanBt = doc.data()[CHECK_TEACHING_LANGUAGE_BT_KEY];
      isLanOther = doc.data()[CHECK_TEACHING_LANGUAGE_OTHER_KEY];
      current_preferedSubjectList = doc.data()[PREFERED_SUBJECT_LIST_KEY]; 
      current_preferedAreaList = doc.data()[PREFERED_AREA_LIST_KEY];
      current_mon_8am = doc.data().tMon8am;
      current_mon_12pm= doc.data().tMon12pm; 
      current_mon_3pm = doc.data().tMon3pm;  
      current_mon_6pm = doc.data().tMon6pm;  
      current_tue_8am = doc.data().tTue8am;  
      current_tue_12pm= doc.data().tTue12pm;  
      current_tue_3pm = doc.data().tTue3pm;  
      current_tue_6pm = doc.data().tTue6pm;  
      current_wed_8am = doc.data().tWed8am;  
      current_wed_12pm= doc.data().tWed12pm;  
      current_wed_3pm = doc.data().tWed3pm;  
      current_wed_6pm = doc.data().tWed6pm;  
      current_thu_8am = doc.data().tThu8am;  
      current_thu_12pm= doc.data().tThu12pm;  
      current_thu_3pm = doc.data().tThu3pm;  
      current_thu_6pm = doc.data().tThu6pm;  
      current_fri_8am = doc.data().tFri8am;  
      current_fri_12pm= doc.data().tFri12pm;  
      current_fri_3pm = doc.data().tFri3pm;  
      current_fri_6pm = doc.data().tFri6pm; 
      current_sat_8am = doc.data().tSat8am;  
      current_sat_12pm= doc.data().tSat12pm;  
      current_sat_3pm = doc.data().tSat3pm;  
      current_sat_6pm = doc.data().tSat6pm;  
      current_sun_8am = doc.data().tSun8am;  
      current_sun_12pm= doc.data().tSun12pm;  
      current_sun_3pm = doc.data().tSun3pm;  
      current_sun_6pm = doc.data().tSun6pm; 
      current_aPremiumSubjectLimit = doc.data().aPremiumSubjectLimit; 
      current_aPremiumConnectLimit = doc.data().aPremiumConnectLimit; 
      current_aTotalSubjectLimit = doc.data().aTotalSubjectLimit;
      current_aTotalConnectLimit = doc.data().aTotalConnectLimit; 
      current_aPreferredSubjectLimit = doc.data().aPreferredSubjectLimit;
      current_aPreferredAreaLimit = doc.data().aPreferredAreaLimit;
      current_uLastOnline = doc.data()[SYSTEM_LAST_ONLINE_KEY].toDate();

      // Store data to sessionStorage
      var tutorDataObj = {
        [ID_KEY] : tutorId, // This was added to check if different user is logged in on the same browser.
        [NAME_KEY] : doc.data().name,
        [EMAIL_KEY] : doc.data().email,
        [PHONE_KEY] : doc.data().phone,
        [AGE_KEY] : doc.data().age,
        [GENDER_KEY] : doc.data().gender,
        [ADDRESS_1_KEY] :doc.data().address1,
        [ADDRESS_2_KEY] :doc.data().address2,
        [ADDRESS_POSTCODE_KEY] :doc.data().addressPostCode,
        [ADDRESS_STATE_KEY] :doc.data().addressState,
        [IMAGE_KEY] : doc.data().imgUrl,
        // [NRIC_KEY] : doc.data().name,
        [RATING_KEY] : doc.data().rating,
        [RATING_TIMES_KEY] : doc.data().ratingTimes,
        [RATING_FINAL_KEY] : doc.data().ratingFinal,
        [PROFILE_STATUS_KEY] : doc.data().profileStatus,
        [YEARS_EXPERIENCE_KEY] :doc.data().yearsExperience,
        [TUTORING_EXPERIENCE_KEY] :doc.data().tutoringExperience,
        [TUTORING_APPROACH_KEY] : doc.data().tutoringApproach,
        [QUALIFICATION_KEY] : doc.data().qualification,
        [PREFERED_AREA_LIST_KEY] : doc.data().preferedAreaList,
        [PREFERED_SUBJECT_LIST_KEY] : doc.data().preferedSubjectList,
        [AGENT_KEY] : doc.data().agent,
        [ACCOUNT_STATUS_KEY] : doc.data().accountStatus,
        
        [CHECK_HOME_TUTOR_TO_STUDENT_KEY] : doc.data().modeHomeTutorToStudent,
        [CHECK_HOME_STUDENT_TO_TUTOR_KEY] : doc.data().modeHomeStudentToTutor,
        [CHECK_GROUP_KEY] : doc.data().modeGroup,
        [CHECK_ONLINE_KEY] : doc.data().modeOnline,
        [CHECK_ONLINE_GROUP_KEY] : doc.data().modeOnlineGroup,
        [CHECK_TEACHING_LANGUAGE_ENGLISH_KEY] : doc.data().lanEng,
        [CHECK_TEACHING_LANGUAGE_BM_KEY] : doc.data().lanBm,
        [CHECK_TEACHING_LANGUAGE_BC_KEY] : doc.data().lanBc,
        [CHECK_TEACHING_LANGUAGE_BT_KEY] : doc.data().lanBt,
        [CHECK_TEACHING_LANGUAGE_OTHER_KEY] : doc.data().lanOther,

        [TUTOR_TIME_SLOT_MON_8AM_KEY] : doc.data().tMon8am,
        [TUTOR_TIME_SLOT_MON_12PM_KEY] : doc.data().tMon12pm,
        [TUTOR_TIME_SLOT_MON_3PM_KEY] : doc.data().tMon3pm,
        [TUTOR_TIME_SLOT_MON_6PM_KEY] : doc.data().tMon6pm,
        [TUTOR_TIME_SLOT_TUE_8AM_KEY] : doc.data().tTue8am,
        [TUTOR_TIME_SLOT_TUE_12PM_KEY] : doc.data().tTue12pm,
        [TUTOR_TIME_SLOT_TUE_3PM_KEY] : doc.data().tTue3pm,
        [TUTOR_TIME_SLOT_TUE_6PM_KEY] : doc.data().tTue6pm,
        [TUTOR_TIME_SLOT_WED_8AM_KEY] : doc.data().tWed8am,
        [TUTOR_TIME_SLOT_WED_12PM_KEY] : doc.data().tWed12pm,
        [TUTOR_TIME_SLOT_WED_3PM_KEY] : doc.data().tWed3pm,
        [TUTOR_TIME_SLOT_WED_6PM_KEY] : doc.data().tWed6pm,
        [TUTOR_TIME_SLOT_THU_8AM_KEY] : doc.data().tThu8am,
        [TUTOR_TIME_SLOT_THU_12PM_KEY] : doc.data().tThu12pm,
        [TUTOR_TIME_SLOT_THU_3PM_KEY] : doc.data().tThu3pm,
        [TUTOR_TIME_SLOT_THU_6PM_KEY] : doc.data().tThu6pm,
        [TUTOR_TIME_SLOT_FRI_8AM_KEY] : doc.data().tFri8am,
        [TUTOR_TIME_SLOT_FRI_12PM_KEY] : doc.data().tFri12pm,
        [TUTOR_TIME_SLOT_FRI_3PM_KEY] : doc.data().tFri3pm,
        [TUTOR_TIME_SLOT_FRI_6PM_KEY] : doc.data().tFri6pm,
        [TUTOR_TIME_SLOT_SAT_8AM_KEY] : doc.data().tSat8am,
        [TUTOR_TIME_SLOT_SAT_12PM_KEY] : doc.data().tSat12pm,
        [TUTOR_TIME_SLOT_SAT_3PM_KEY] : doc.data().tSat3pm,
        [TUTOR_TIME_SLOT_SAT_6PM_KEY] : doc.data().tSat6pm,
        [TUTOR_TIME_SLOT_SUN_8AM_KEY] : doc.data().tSun8am,
        [TUTOR_TIME_SLOT_SUN_12PM_KEY] : doc.data().tSun12pm,
        [TUTOR_TIME_SLOT_SUN_3PM_KEY] : doc.data().tSun3pm,
        [TUTOR_TIME_SLOT_SUN_6PM_KEY] : doc.data().tSun6pm,
        // Create a placeholder for aWebUrl. This param can only initiated by admin
        // manually through https://golearn.com.my/admin/admin-portal.html
        [ADMIN_WEB_URL_KEY] : doc.data().aWebUrl,
        [ADMIN_PREMIUM_SUBJECT_LIMIT_KEY] : doc.data().aPremiumSubjectLimit,
        [ADMIN_PREMIUM_CONNECT_LIMIT_KEY] : doc.data().aPremiumConnectLimit,
        [ADMIN_TOTAL_SUBJECT_LIMIT_KEY] : doc.data().aTotalSubjectLimit,
        [ADMIN_TOTAL_CONNECT_LIMIT_KEY] : doc.data().aTotalConnectLimit,
        [ADMIN_PREFFERED_AREA_LIMIT_KEY] : doc.data().aPreferredAreaLimit,
        [ADMIN_PREFERRED_SUBJECT_LIMIT_KEY] : doc.data().aPreferredSubjectLimit,
        [SYSTEM_LAST_ONLINE_KEY] : doc.data()[SYSTEM_LAST_ONLINE_KEY],
      }

      // Set tutorInfoObj as sessionStorage
      sessionStorage.setItem(PROFILE_TUTOR_INFO, JSON.stringify(tutorDataObj));

      // Update the general view
      updateGeneralView();
      // Finally, load page specific view.
      // This function will be declared separately in each page
      loadPageInitFunc(); 

      // Update Last Online
      let docLastOnlineRef = db.collection("Tutor").doc(tutorId);
      docLastOnlineRef.update({
        [SYSTEM_LAST_ONLINE_KEY] : new Date() //firebase.firestore.Timestamp.fromDate(new Date())
        }
      );

    } 
    
    else {
      window.location.href = "https://app.golearn.com.my/"
    }
  });

}


// Update General View
function updateGeneralView(){
  // Set the nav user name.
  document.getElementById("user").textContent = current_name;
    
  // Set the public profile link.
  // By default, general link were given.
  let url = encode64(tutorId);
  document.getElementById("navPublicProfile").href = "https://golearn.com.my/tutor/?tid="+ url;
  document.getElementById("navPublicProfile").target = "_blank";
  
  // Set badge and sidebar based on account status.
  if (current_accountStatus == ACTIVE_ACCOUNT_STATUS_KEY){
    document.getElementById("btnActivateAccount").setAttribute("style", "visibility: visible; color: white;" );
    document.getElementById("btnActivateAccount").textContent = "UPGRADE";
    document.getElementById("btnActivateAccount").href = "https://golearn.com.my/pricing/";
    document.getElementById("btnActivateAccount").target = "_blank";
    // Payroll
    document.getElementById("navPayroll").setAttribute("style", "display: none;");
  }
  else if (current_accountStatus == PREMIUM_ACCOUNT_1_STATUS_KEY || current_accountStatus == PREMIUM_ACCOUNT_1_ACTIVE_STATUS_KEY){
    document.getElementById("btnActivateAccount").setAttribute("style", "visibility: visible; color: white;" );
    document.getElementById("btnActivateAccount").textContent = "BASIC";
    document.getElementById("btnActivateAccount").href = "https://golearn.com.my/pricing/";
    document.getElementById("btnActivateAccount").target = "_blank";
    // Payroll
    document.getElementById("navPayroll").setAttribute("style", "display: none;");
  }
  else if (current_accountStatus == PREMIUM_ACCOUNT_2_STATUS_KEY || current_accountStatus == PREMIUM_ACCOUNT_2_ACTIVE_STATUS_KEY){
    document.getElementById("btnActivateAccount").setAttribute("style", "visibility: visible; color: white;" );
    document.getElementById("btnActivateAccount").textContent = "ENTERPRISE";
    document.getElementById("btnActivateAccount").href = "https://golearn.com.my/pricing/";
    document.getElementById("btnActivateAccount").target = "_blank";
    // Payroll
    document.getElementById("navPayroll").setAttribute("style", "display: inline;");
  }
  else if (current_accountStatus == PREMIUM_ACCOUNT_3_STATUS_KEY || current_accountStatus == PREMIUM_ACCOUNT_3_ACTIVE_STATUS_KEY){
    document.getElementById("btnActivateAccount").setAttribute("style", "visibility: visible; color: white;" );
    document.getElementById("btnActivateAccount").textContent = "ORGANIZATION";
    document.getElementById("btnActivateAccount").href = "https://golearn.com.my/pricing/";
    document.getElementById("btnActivateAccount").target = "_blank";
    // Payroll
    document.getElementById("navPayroll").setAttribute("style", "display: inline;");
  }
  else if (current_accountStatus == DEACTIVATED_ACCOUNT_STATUS_KEY){
    document.getElementById("btnActivateAccount").setAttribute("style", "visibility: visible; color: white;" );
    document.getElementById("btnActivateAccount").textContent = "UPGRADE";
    document.getElementById("btnActivateAccount").href = "https://golearn.com.my/pricing/";
    document.getElementById("btnActivateAccount").target = "_blank";
    // Payroll
    document.getElementById("navPayroll").setAttribute("style", "display: none;" );
  }else if (current_accountStatus == SUSPENDED_ACCOUNT_STATUS_KEY){
    document.getElementById("btnActivateAccount").setAttribute("style", "visibility: visible; color: white; background: red" );
    document.getElementById("btnActivateAccount").textContent = "Account Suspended. Fix Now";
    document.getElementById("btnActivateAccount").href = "https://golearn.com.my/contact-us/";
    document.getElementById("btnActivateAccount").target = "_blank";
    // Payroll
    document.getElementById("navPayroll").setAttribute("style", "display: none;");
    // Public profile link is disabled for suspended user
    document.getElementById("navPublicProfile").setAttribute("style", "background: #d6d6d6; pointer-events: none; cursor: default;")  

  }else {
    let activationNavItem = document.querySelector('#activationNavItem');
    // activationNavItem.parentNode.removeChild(activationNavItem);
    let activationNavItemIsExist = document.querySelector('#activationNavItem') !== null;
    // console.log(activationNavItemIsExist)
    // Remove NavItem if exist
    if (activationNavItemIsExist){
      activationNavItem.parentNode.removeChild(activationNavItem);
    }else{
      // Do nothing
    }
    // Payroll
    document.getElementById("navPayroll").setAttribute("style", "display: none;");

  }
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

// Append Modal to Body
// Note: This hack is to (1) make sure the long model scrollable on open & 
//       (2) signout Modal open normally.
function appendModal(modalId){
  $("#"+modalId).appendTo("body");
}

// Generate avatar for invalid img
function generateAvatar(text, foregroundColor, backgroundColor, fontSize) {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");

  canvas.width = 200;
  canvas.height = 200;

  // Draw background
  context.fillStyle = backgroundColor;
  context.fillRect(0, 0, canvas.width, canvas.height);

  // Draw text
  context.font = "bold "+fontSize+" Arial";
  context.fillStyle = foregroundColor;
  context.textAlign = "center";
  context.textBaseline = "middle";
  context.fillText(text, canvas.width / 2, canvas.height / 2);

  return canvas.toDataURL("image/png");
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



// This function checks some exception cases for domain that dont show correct img when used with 
// http://www.google.com/s2/favicons?domain=domain.com
function checkDomainNameException(url){
  // const str = 'hello world!';
  let result_web_wa = /web.whatsapp.com/.test(url);
  let result_chat_wa = /chat.whatsapp.com/.test(url);
  let result_us04web_zoom = /us04web.zoom.us/.test(url);
  let result_us05web_zoom = /us05web.zoom.us/.test(url);
  let result_teams_microsoft = /teams.microsoft.com/.test(url);
  let result_classroom_google = /classroom.google.com/.test(url);
  
  // console.log(url)
  // console.log(result_web_wa, result_chat_wa);

  if (result_web_wa) return "http://www.google.com/s2/favicons?domain=https://whatsapp.com";
  else if (result_chat_wa) return "http://www.google.com/s2/favicons?domain=https://whatsapp.com";
  else if (result_us04web_zoom) return "http://www.google.com/s2/favicons?domain=https://zoom.us";
  else if (result_us05web_zoom) return "http://www.google.com/s2/favicons?domain=https://zoom.us";
  else if (result_teams_microsoft) return "https://app.golearn.com.my/assets/img/favicon-teams-32x32.png";
  else if (result_classroom_google) return "https://app.golearn.com.my/assets/img/favicon-googleclassroom-32x32.png";
  else return "http://www.google.com/s2/favicons?domain="+url;
}
