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
            document.getElementById("btnVerify").style.pointerEvents='auto';
            document.getElementById("btnVerify").disabled = false;

            document.getElementById("verificationCode").style.backgroundColor = '#eeeeee'
            document.getElementById("verificationCode").focus();

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
    let number = itiPhone.getNumber();
    console.log(number)
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

        func.showNotification('top','center', 'success', 'check_circle', "We just sent a 6-digit verification code to "+itiPhone.getNumber());

        console.log(coderesult);

        // alert("Message sent");
    }).catch(function (error) {

        document.getElementById("phone").setAttribute("style", "background-color: #fff");
        document.getElementById("phone").disabled = false;

        //Disable the step 1 button
        document.getElementById("btnVerify").setAttribute("style", "background-color: #c1c1c1");
        document.getElementById("btnVerify").style.cursor='not-allowed';
        document.getElementById("btnVerify").disabled = true;
        console.log("Phone Verification Failed Error Code: "+ error);
        func.showNotification('top','center', 'danger', 'error_outline', "Phone Verification Failed. Please make sure you enter a valid phone number." );

        // alert("Phone Verification Failed. Please make sure you enter a valid phone number.")
        // alert(error.message);
    });
}
function codeverify() {

    // const code = getCodeFromUserInput();
    // confirmationResult.confirm(code).then((result) => {
    // // User signed in successfully.
    // const user = result.user;
    // // ...
    // }).catch((error) => {
    // // User couldn't sign in (bad verification code?)
    // // ...
    // });


    let code=document.getElementById('verificationCode').value;
    coderesult.confirm(code).then(function (result) {
        // alert("Successfully registered");
        let user=result.user;

        let tutorId = null;
        if (user.displayName == null ){
            tutorId = user.phoneNumber;
        }else
            tutorId = user.email.replace("[^a-zA-Z0-9]", "_").toLowerCase();

        // alert("Tutor Id: " + tutorId);
        // console.log("Tutor registered, ID: " + tutorId);

        const tutorRef = db.collection('Tutor').doc(tutorId);

        tutorRef.get()
          .then((docSnapshot) => {

            if (docSnapshot.exists) {
                 // do stuff with the data

                // User exist. Login.
                
            //   usersRef.onSnapshot((doc) => {
               
                // console.log("User exist!"+user.uid+" "+user.displayName+" "+user.phoneNumber);
                // window.location.href = "./"
                // alert("User exist!"+user.uid+" "+user.displayName+" "+user.phoneNumber);

            //   });
                // console.log("docSnapshot.exists");
                window.location.href = './'
            }else {

                // User does not exist. Register a new user.         
                var docData = {
                    [TOKEN_KEY]: null,    //main
                    [NAME_KEY] : 'New Tutor',    //main
                    [EMAIL_KEY]  : "", //main
                    [PHONE_KEY]  : itiPhone.getNumber(), //main
                    [AGE_KEY]  : 18, 
                    [GENDER_KEY]  : 1, // Female
                    [ADDRESS_1_KEY]  : "",
                    [ADDRESS_2_KEY]  : "",
                    [ADDRESS_POSTCODE_KEY]  : "",
                    [ADDRESS_STATE_KEY]  : "",
                    [IMAGE_KEY]  : "",
                    [NRIC_KEY]  : "",
                    [RATING_KEY]  : 0,
                    [RATING_TIMES_KEY]  : 0,
                    [RATING_FINAL_KEY]  : 0,
                    [PROFILE_STATUS_KEY]  : [false, false, false, false], // (identity, phone, qualification, location)
                    [CHECK_HOMETUTOR_KEY]  : false,  // Depreciated
                    [CHECK_PRIVATETUTOR_KEY]  : false, // Depreciated
                    [CHECK_GROUPTUTOR_KEY]  : false, // Depreciated
                    [CHECK_ONLINETUTOR_KEY]  : false, // Depreciated
                    [YEARS_EXPERIENCE_KEY]  : null,
                    [TUTORING_EXPERIENCE_KEY]  : "",
                    [TUTORING_APPROACH_KEY]  : "",
                    [QUALIFICATION_KEY]  : "",
                    [PREFERED_AREA_LIST_KEY]  : null,
                    [PREFERED_SUBJECT_LIST_KEY]  : null,
                    [AGENT_KEY]  : false,
                    [ACCOUNT_STATUS_KEY]  : DEACTIVATED_ACCOUNT_STATUS_KEY,
                    [CHECK_HOME_TUTOR_TO_STUDENT_KEY]  : false,
                    [CHECK_HOME_STUDENT_TO_TUTOR_KEY]  : false,
                    [CHECK_GROUP_KEY]  : false,
                    [CHECK_ONLINE_KEY]  : false,
                    [CHECK_ONLINE_GROUP_KEY]  : false,
                    [CHECK_TEACHING_LANGUAGE_ENGLISH_KEY]  : false,
                    [CHECK_TEACHING_LANGUAGE_BM_KEY]  : false,
                    [CHECK_TEACHING_LANGUAGE_BC_KEY]  : false,
                    [CHECK_TEACHING_LANGUAGE_BT_KEY]  : false,
                    [CHECK_TEACHING_LANGUAGE_OTHER_KEY]  : false,
                    [TUTOR_TIME_SLOT_MON_8AM_KEY]  : TUTOR_TIME_SLOT_CLOSE_KEY,
                    [TUTOR_TIME_SLOT_MON_12PM_KEY] : TUTOR_TIME_SLOT_CLOSE_KEY,
                    [TUTOR_TIME_SLOT_MON_3PM_KEY]  : TUTOR_TIME_SLOT_CLOSE_KEY,
                    [TUTOR_TIME_SLOT_MON_6PM_KEY]  : TUTOR_TIME_SLOT_CLOSE_KEY,
                    [TUTOR_TIME_SLOT_TUE_8AM_KEY]  : TUTOR_TIME_SLOT_CLOSE_KEY,
                    [TUTOR_TIME_SLOT_TUE_12PM_KEY] : TUTOR_TIME_SLOT_CLOSE_KEY,
                    [TUTOR_TIME_SLOT_TUE_3PM_KEY]  : TUTOR_TIME_SLOT_CLOSE_KEY,
                    [TUTOR_TIME_SLOT_TUE_6PM_KEY]  : TUTOR_TIME_SLOT_CLOSE_KEY,
                    [TUTOR_TIME_SLOT_WED_8AM_KEY]  : TUTOR_TIME_SLOT_CLOSE_KEY,
                    [TUTOR_TIME_SLOT_WED_12PM_KEY] : TUTOR_TIME_SLOT_CLOSE_KEY,
                    [TUTOR_TIME_SLOT_WED_3PM_KEY]  : TUTOR_TIME_SLOT_CLOSE_KEY,
                    [TUTOR_TIME_SLOT_WED_6PM_KEY]  : TUTOR_TIME_SLOT_CLOSE_KEY,
                    [TUTOR_TIME_SLOT_THU_8AM_KEY]  : TUTOR_TIME_SLOT_CLOSE_KEY,
                    [TUTOR_TIME_SLOT_THU_12PM_KEY] : TUTOR_TIME_SLOT_CLOSE_KEY,
                    [TUTOR_TIME_SLOT_THU_3PM_KEY]  : TUTOR_TIME_SLOT_CLOSE_KEY,
                    [TUTOR_TIME_SLOT_THU_6PM_KEY]  : TUTOR_TIME_SLOT_CLOSE_KEY,
                    [TUTOR_TIME_SLOT_FRI_8AM_KEY]  : TUTOR_TIME_SLOT_CLOSE_KEY,
                    [TUTOR_TIME_SLOT_FRI_12PM_KEY] : TUTOR_TIME_SLOT_CLOSE_KEY,
                    [TUTOR_TIME_SLOT_FRI_3PM_KEY]  : TUTOR_TIME_SLOT_CLOSE_KEY,
                    [TUTOR_TIME_SLOT_FRI_6PM_KEY]  : TUTOR_TIME_SLOT_CLOSE_KEY,
                    [TUTOR_TIME_SLOT_SAT_8AM_KEY]  : TUTOR_TIME_SLOT_CLOSE_KEY,
                    [TUTOR_TIME_SLOT_SAT_12PM_KEY] : TUTOR_TIME_SLOT_CLOSE_KEY,
                    [TUTOR_TIME_SLOT_SAT_3PM_KEY]  : TUTOR_TIME_SLOT_CLOSE_KEY,
                    [TUTOR_TIME_SLOT_SAT_6PM_KEY]  : TUTOR_TIME_SLOT_CLOSE_KEY,
                    [TUTOR_TIME_SLOT_SUN_8AM_KEY]  : TUTOR_TIME_SLOT_CLOSE_KEY,
                    [TUTOR_TIME_SLOT_SUN_12PM_KEY] : TUTOR_TIME_SLOT_CLOSE_KEY,
                    [TUTOR_TIME_SLOT_SUN_3PM_KEY]  : TUTOR_TIME_SLOT_CLOSE_KEY,
                    [TUTOR_TIME_SLOT_SUN_6PM_KEY]  : TUTOR_TIME_SLOT_CLOSE_KEY,
                    // Create a placeholder for aWebUrl. This param can only initiated by admin
                    // manually through https://golearn.com.my/admin/
                    [ADMIN_WEB_URL_KEY]  : "",
                    [ADMIN_PREMIUM_SUBJECT_LIMIT_KEY]  : 10,
                    [ADMIN_PREMIUM_CONNECT_LIMIT_KEY]  : 0,
                    [ADMIN_TOTAL_SUBJECT_LIMIT_KEY]  : 40,
                    [ADMIN_TOTAL_CONNECT_LIMIT_KEY]  : 0,
                    [ADMIN_PREFFERED_AREA_LIMIT_KEY]  : 5,
                    [ADMIN_PREFERRED_SUBJECT_LIMIT_KEY]  : 40,
                    [SYSTEM_LAST_ONLINE_KEY]  : firebase.firestore.Timestamp.fromDate(new Date())

                }



                db.collection("Tutor").doc(tutorId)
                    .set(docData, {merge: true})
                    .then(() => {
                        window.location.href = './'
                        
                        // console.log("Document successfully written!");
                    })
                    .catch((error) => {
                        func.showNotification('top','center', 'danger', 'error_outline', "Registration failed. Please try again" );
                        // console.error("Error writing document: ", error);
                    });

                console.log("USer does not exist! Create a new one: "+ tutorId );
                // alert("USer does not exist! Create a new one: "+ tutorId );

            }
        });
        
        // db.collection("Tutor").doc(tutorId)
        // .set(docData, {merge: true});


        // if (user != null ){
        //     // User exist. Login.
        //     console.log("User exist!"+user.uid+user.displayName+user.phone+user.phoneNumber);
        //     // window.location.href = "./"
        //     alert("User exist!"+user.uid+user.displayName+user.phone+user.phoneNumber);

                
        // }else{
        //    // User does not exist. Register a new user.         
        //     var docData = {
        //         [TOKEN_KEY]: null,    //main
        //         [NAME_KEY] : 'New Tutor',    //main
        //         [EMAIL_KEY]  : null, //main
        //         [PHONE_KEY]  : document.getElementById('phone').value, //main
        //         [AGE_KEY]  : 18, 
        //         [GENDER_KEY]  : 1, // Female
        //         [ADDRESS_1_KEY]  : null,
        //         [ADDRESS_2_KEY]  : null,
        //         [ADDRESS_POSTCODE_KEY]  : null,
        //         [ADDRESS_STATE_KEY]  : null,
        //         [IMAGE_KEY]  : null,
        //         [NRIC_KEY]  : null,
        //         [RATING_KEY]  : 0,
        //         [RATING_TIMES_KEY]  : 0,
        //         [RATING_FINAL_KEY]  : 0,
        //         [PROFILE_STATUS_KEY]  : [false, false, false, false], // (identity, phone, qualification, location)
        //         [CHECK_HOMETUTOR_KEY]  : false,  // Depreciated
        //         [CHECK_PRIVATETUTOR_KEY]  : false, // Depreciated
        //         [CHECK_GROUPTUTOR_KEY]  : false, // Depreciated
        //         [CHECK_ONLINETUTOR_KEY]  : false, // Depreciated
        //         [YEARS_EXPERIENCE_KEY]  : null,
        //         [TUTORING_EXPERIENCE_KEY]  : null,
        //         [TUTORING_APPROACH_KEY]  : null,
        //         [QUALIFICATION_KEY]  : null,
        //         [PREFERED_AREA_LIST_KEY]  : null,
        //         [PREFERED_SUBJECT_LIST_KEY]  : null,
        //         [AGENT_KEY]  : false,
        //         [ACCOUNT_STATUS_KEY]  : DEACTIVATED_ACCOUNT_STATUS_KEY,
        //         [CHECK_HOME_TUTOR_TO_STUDENT_KEY]  : false,
        //         [CHECK_HOME_STUDENT_TO_TUTOR_KEY]  : false,
        //         [CHECK_GROUP_KEY]  : false,
        //         [CHECK_ONLINE_KEY]  : false,
        //         [CHECK_ONLINE_GROUP_KEY]  : false,
        //         [CHECK_TEACHING_LANGUAGE_ENGLISH_KEY]  : false,
        //         [CHECK_TEACHING_LANGUAGE_BM_KEY]  : false,
        //         [CHECK_TEACHING_LANGUAGE_BC_KEY]  : false,
        //         [CHECK_TEACHING_LANGUAGE_BT_KEY]  : false,
        //         [CHECK_TEACHING_LANGUAGE_OTHER_KEY]  : false,
        //         [TUTOR_TIME_SLOT_MON_8AM_KEY]  : TUTOR_TIME_SLOT_CLOSE_KEY,
        //         [TUTOR_TIME_SLOT_MON_12PM_KEY] : TUTOR_TIME_SLOT_CLOSE_KEY,
        //         [TUTOR_TIME_SLOT_MON_3PM_KEY]  : TUTOR_TIME_SLOT_CLOSE_KEY,
        //         [TUTOR_TIME_SLOT_MON_6PM_KEY]  : TUTOR_TIME_SLOT_CLOSE_KEY,
        //         [TUTOR_TIME_SLOT_TUE_8AM_KEY]  : TUTOR_TIME_SLOT_CLOSE_KEY,
        //         [TUTOR_TIME_SLOT_TUE_12PM_KEY] : TUTOR_TIME_SLOT_CLOSE_KEY,
        //         [TUTOR_TIME_SLOT_TUE_3PM_KEY]  : TUTOR_TIME_SLOT_CLOSE_KEY,
        //         [TUTOR_TIME_SLOT_TUE_6PM_KEY]  : TUTOR_TIME_SLOT_CLOSE_KEY,
        //         [TUTOR_TIME_SLOT_WED_8AM_KEY]  : TUTOR_TIME_SLOT_CLOSE_KEY,
        //         [TUTOR_TIME_SLOT_WED_12PM_KEY] : TUTOR_TIME_SLOT_CLOSE_KEY,
        //         [TUTOR_TIME_SLOT_WED_3PM_KEY]  : TUTOR_TIME_SLOT_CLOSE_KEY,
        //         [TUTOR_TIME_SLOT_WED_6PM_KEY]  : TUTOR_TIME_SLOT_CLOSE_KEY,
        //         [TUTOR_TIME_SLOT_THU_8AM_KEY]  : TUTOR_TIME_SLOT_CLOSE_KEY,
        //         [TUTOR_TIME_SLOT_THU_12PM_KEY] : TUTOR_TIME_SLOT_CLOSE_KEY,
        //         [TUTOR_TIME_SLOT_THU_3PM_KEY]  : TUTOR_TIME_SLOT_CLOSE_KEY,
        //         [TUTOR_TIME_SLOT_THU_6PM_KEY]  : TUTOR_TIME_SLOT_CLOSE_KEY,
        //         [TUTOR_TIME_SLOT_FRI_8AM_KEY]  : TUTOR_TIME_SLOT_CLOSE_KEY,
        //         [TUTOR_TIME_SLOT_FRI_12PM_KEY] : TUTOR_TIME_SLOT_CLOSE_KEY,
        //         [TUTOR_TIME_SLOT_FRI_3PM_KEY]  : TUTOR_TIME_SLOT_CLOSE_KEY,
        //         [TUTOR_TIME_SLOT_FRI_6PM_KEY]  : TUTOR_TIME_SLOT_CLOSE_KEY,
        //         [TUTOR_TIME_SLOT_SAT_8AM_KEY]  : TUTOR_TIME_SLOT_CLOSE_KEY,
        //         [TUTOR_TIME_SLOT_SAT_12PM_KEY] : TUTOR_TIME_SLOT_CLOSE_KEY,
        //         [TUTOR_TIME_SLOT_SAT_3PM_KEY]  : TUTOR_TIME_SLOT_CLOSE_KEY,
        //         [TUTOR_TIME_SLOT_SAT_6PM_KEY]  : TUTOR_TIME_SLOT_CLOSE_KEY,
        //         [TUTOR_TIME_SLOT_SUN_8AM_KEY]  : TUTOR_TIME_SLOT_CLOSE_KEY,
        //         [TUTOR_TIME_SLOT_SUN_12PM_KEY] : TUTOR_TIME_SLOT_CLOSE_KEY,
        //         [TUTOR_TIME_SLOT_SUN_3PM_KEY]  : TUTOR_TIME_SLOT_CLOSE_KEY,
        //         [TUTOR_TIME_SLOT_SUN_6PM_KEY]  : TUTOR_TIME_SLOT_CLOSE_KEY,
        //         // Create a placeholder for aWebUrl. This param can only initiated by admin
        //         // manually through https://golearn.com.my/admin/
        //         [ADMIN_WEB_URL_KEY]  : "",
        //         [ADMIN_PREMIUM_SUBJECT_LIMIT_KEY]  : 10,
        //         [ADMIN_PREMIUM_CONNECT_LIMIT_KEY]  : 0,
        //         [ADMIN_TOTAL_SUBJECT_LIMIT_KEY]  : 40,
        //         [ADMIN_TOTAL_CONNECT_LIMIT_KEY]  : 0,
        //         [ADMIN_PREFFERED_AREA_LIMIT_KEY]  : 5,
        //         [ADMIN_PREFERRED_SUBJECT_LIMIT_KEY]  : 40

        //     }

        //     let tutorId = user.phoneNumber;
        //     if (user.displayName == null){
        //         tutorId =  user.phoneNumber;
        //     }else {
        //         // string = string.replace(/[^a-zA-Z0-9]/g,'_');
        //         tutorId = user.email.replace(/[^a-zA-Z0-9]/g,'_').toLowerCase();
        //     }

        //     db.collection("Tutor").doc(tutorId)
        //         .set(docData, {merge: true});

        //     console.log("USer does not exist! Create a new one: "+ tutorId );
        //     alert("USer does not exist! Create a new one: "+ tutorId );

            // window.location.href = "./"

        // }

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


