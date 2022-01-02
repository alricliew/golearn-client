  // Global Variables for Tutor
  var tutorId; // For tutor-portal
  var userId; // for client
  var current_id; // This was added to check if different user is logged in on the same browser.
  var current_name, current_email, current_phone, current_age, current_gender, current_imgUri, current_nric,
    current_address1, current_address2, current_addressPostCode, current_addressState,
    current_rating, current_ratingTimes, current_ratingFinal, current_profileStatus,
    current_token, current_agent, current_accountStatus;
  var current_address; // Combining Addr1,2,postcode & state
  var currentYearsExperience, currentTutoringExperience, currentTutoringApproach, currentQualification, 
    current_preferedAreaList, current_preferedSubjectList;
  // Depreciated
  // var current_chk_homeTutor, current_chk_privateTutor, current_chk_groupTutor, current_chk_onlineTutor;
  var isModeHomeStudentToTutor, isModeHomeTutorToStudent, isModeGroup, isModeOnline, isModeOnlineGroup;
  var isLanEng, isLanBm, isLanBc, isLanBt, isLanOther;
  var current_chk_homeStudentToTutor, current_chk_homeTutorToStudent, current_chk_group, current_chk_online, current_chk_onlineGroup;
  var current_mon_8am, current_mon_12pm, current_mon_3pm, current_mon_6pm, 
    current_tue_8am, current_tue_12pm, current_tue_3pm, current_tue_6pm, 
    current_wed_8am, current_wed_12pm, current_wed_3pm, current_wed_6pm, 
    current_thu_8am, current_thu_12pm, current_thu_3pm, current_thu_6pm, 
    current_fri_8am, current_fri_12pm, current_fri_3pm, current_fri_6pm,
    current_sat_8am, current_sat_12pm, current_sat_3pm, current_sat_6pm, 
    current_sun_8am, current_sun_12pm, current_sun_3pm, current_sun_6pm;
  var current_aweburl, current_aPremiumSubjectLimit, current_aPremiumConnectLimit, current_aTotalSubjectLimit, 
    current_aTotalConnectLimit, current_aPreferredSubjectLimit, current_aPreferredAreaLimit;
  var current_uLastOnline;