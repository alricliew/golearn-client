var coderesult;

window.onload=function () {
  render();
};
function render() {
    // window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
    // recaptchaVerifier.render();

    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
        // 'size': 'normal',
        'callback': (response) => {
            // reCAPTCHA solved, allow signInWithPhoneNumber.
            // ...
            // Enable the step1 verify button
            document.getElementById("btnVerify").setAttribute("style", "background-color: #2e74b6");
            document.getElementById("btnVerify").style.cursor='pointer';
            document.getElementById("btnVerify").disabled = false;

        },
        'expired-callback': () => {
            // Response expired. Ask user to solve reCAPTCHA again.
            // ...
        }
      });
      recaptchaVerifier.render();
        
}
function phoneAuth() {
  //get the number
  // let number = document.getElementById('phone').value;
  let number = inputPhone.getNumber();
  // consoles.log(number)
  //phone number authentication function of firebase
  //it takes two parameter first one is number,,,second one is recaptcha
  firebase.auth().signInWithPhoneNumber(number,window.recaptchaVerifier).then(function (confirmationResult) {
    //s is in lowercase
    window.confirmationResult=confirmationResult;
    coderesult=confirmationResult;

    // Enable the step2 button
    document.getElementById("btnLogin").setAttribute("style", "background-color: #2e74b6");
    document.getElementById("btnLogin").style.cursor='pointer';
    document.getElementById("btnLogin").disabled = false;

    func.showNotification('top','center', 'success', 'check_circle', "We just sent a 6-digit verification code to "+document.getElementById('phone').value );

    // console.log(coderesult);

      // alert("Message sent");
  }).catch(function (error) {

    document.getElementById("phone").setAttribute("style", "background-color: #fff");
    document.getElementById("phone").disabled = false;

    //Disable the step 1 button
    document.getElementById("btnVerify").setAttribute("style", "background-color: #c1c1c1");
    document.getElementById("btnVerify").style.cursor='not-allowed';
    document.getElementById("btnVerify").disabled = true;
    // console.log("Phone Verification Failed Error Code: "+ error);
    func.showNotification('top','center', 'danger', 'error_outline', "Phone Verification Failed. Please make sure you enter a valid phone number." );

    // alert("Phone Verification Failed. Please make sure you enter a valid phone number.")
    // alert(error.message);
  });
}
function codeverify() {

    let code=document.getElementById('verificationCode').value;
    coderesult.confirm(code).then(function (result) {
        // alert("Successfully registered");
        let user=result.user;

        let userId = null;
        if (user.displayName == null ){
            userId = user.phoneNumber;
        }else
            userId = user.email.replace("[^a-zA-Z0-9]", "_").toLowerCase();

        // alert("Tutor Id: " + userId);
        // console.log("Tutor registered, ID: " + userId);

        const tutorRef = db.collection('Tutor').doc(userId);

        tutorRef.get()
          .then((docSnapshot) => {

            if (docSnapshot.exists) {
                // User exist. Login.
                window.location.href = './'
            }else {
              // Create a new tutor profile
              let docData = {
                [TOKEN_KEY]: null,    //main
                [NAME_KEY] : 'New User',    //main
                [EMAIL_KEY]  : "", //main
                [PHONE_KEY]  : inputPhone.getNumber(), //main
                [ADDRESS_1_KEY]  : "",
                [ADDRESS_2_KEY]  : "",
                [ADDRESS_POSTCODE_KEY]  : "",
                [ADDRESS_STATE_KEY]  : "",
                [IMAGE_KEY]  : "",
                [NRIC_KEY]  : "",
                [SYSTEM_LAST_ONLINE_KEY]  : firebase.firestore.Timestamp.fromDate(new Date())
              }
              console.log(docData)
              // let userId = user.phoneNumber;
              // if (user.displayName == null){
              //     userId =  user.phoneNumber;
              // }else {
              //     userId = user.email.replace(/[^a-zA-Z0-9]/g,'_').toLowerCase();
              // }

              // db.collection("Users").doc(userId)
              //   .set(docData, {merge: true})
              //   .then(() => {
              //       window.location.href = './'
              //       // console.log("Document successfully written!");
              //   })
              //   .catch((error) => {
              //       func.showNotification('top','center', 'danger', 'error_outline', "Registration failed. Please try again" );
              //       // console.error("Error writing document: ", error);
              //   });

            }
        });
        

    })
    .catch(function (error) {
        // alert(error.message);
        // alert("Phone Verification Failed. Please make sure you enter a valid 6-digit verification code." +  error.message);
        func.showNotification('top','center', 'danger', 'error_outline', "Phone Verification Failed. Please make sure you enter a valid 6-digit verification code." );

        console.log("Phone Verification Failed. Please make sure you enter a valid 6-digit verification code."+  error.message);
    });
}

// Use this after signin
// Source: https://firebase.google.com/docs/auth/admin/verify-id-tokens#android
function getToken(){
    firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function(idToken) {
        // Send token to your backend via HTTPS
        userToken = idToken;
        }).catch(function(error) {
          // Handle error
          
        });
}


