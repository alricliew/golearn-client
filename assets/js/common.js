// This file define common constants

// GENERAL KEY
const MY_REQUEST_CODE = 1234; // (Integer)
const RegistrationUrl = "https://golearn.com.my/join-us/";
const ID_KEY = "id";
const FIREBASE_TUTOR_KEY = "Tutor";
const FIREBASE_USERS_KEY = "Users";
const FIREBASE_CONTACTS_KEY = "Contacts";

// Tutor Personal Details (9) excluded NRIC_KEY
const TOKEN_KEY = "token";
const NAME_KEY = "name";
const NRIC_KEY = "nric";
const EMAIL_KEY = "email";
const PHONE_KEY = "phone";
const AGE_KEY = "age";
const GENDER_KEY = "gender";
const ADDRESS_KEY = "address";
const ADDRESS_1_KEY = "address1";
const ADDRESS_2_KEY = "address2";
const ADDRESS_POSTCODE_KEY = "addressPostCode";
const ADDRESS_STATE_KEY = "addressState";
const IMAGE_KEY = "imgUrl";
const RATING_KEY = "rating";
const RATING_TIMES_KEY = "ratingTimes";
const RATING_FINAL_KEY = "ratingFinal"; // NEW FEATURE 2.0 - Used for sorting in ../find-tutor
const PROFILE_STATUS_KEY = "profileStatus";
const AGENT_KEY = "agent";
const ACCOUNT_STATUS_KEY = "accountStatus";
    // Value of ACCOUNT_STATUS_KEY
    const DEACTIVATED_ACCOUNT_STATUS_KEY = "deactivated";
    const ACTIVE_ACCOUNT_STATUS_KEY = "active";
    const SUSPENDED_ACCOUNT_STATUS_KEY = "suspended";
    const PREMIUM_ACCOUNT_1_STATUS_KEY = "premium1"; // VIP Equivalent
    const PREMIUM_ACCOUNT_2_STATUS_KEY = "premium2"; // VVIP Equivalent
    const PREMIUM_ACCOUNT_3_STATUS_KEY = "premium3"; // VVVIP Equivalent
// NEW FEATURE 2.0 - Used for sorting in ../find-tutor
const SYSTEM_LAST_ONLINE_KEY = "uLastOnline";
// NEW FEATURE 2.0 - Used for general time table
const TUTOR_TIME_SLOT_MON_8AM_KEY  = "tMon8am";
const TUTOR_TIME_SLOT_MON_12PM_KEY = "tMon12pm";
const TUTOR_TIME_SLOT_MON_3PM_KEY  = "tMon3pm";
const TUTOR_TIME_SLOT_MON_6PM_KEY  = "tMon6pm";
const TUTOR_TIME_SLOT_TUE_8AM_KEY  = "tTue8am";
const TUTOR_TIME_SLOT_TUE_12PM_KEY = "tTue12pm";
const TUTOR_TIME_SLOT_TUE_3PM_KEY  = "tTue3pm";
const TUTOR_TIME_SLOT_TUE_6PM_KEY  = "tTue6pm";
const TUTOR_TIME_SLOT_WED_8AM_KEY  = "tWed8am";
const TUTOR_TIME_SLOT_WED_12PM_KEY = "tWed12pm";
const TUTOR_TIME_SLOT_WED_3PM_KEY  = "tWed3pm";
const TUTOR_TIME_SLOT_WED_6PM_KEY  = "tWed6pm";
const TUTOR_TIME_SLOT_THU_8AM_KEY  = "tThu8am";
const TUTOR_TIME_SLOT_THU_12PM_KEY = "tThu12pm";
const TUTOR_TIME_SLOT_THU_3PM_KEY  = "tThu3pm";
const TUTOR_TIME_SLOT_THU_6PM_KEY  = "tThu6pm";
const TUTOR_TIME_SLOT_FRI_8AM_KEY  = "tFri8am";
const TUTOR_TIME_SLOT_FRI_12PM_KEY = "tFri12pm";
const TUTOR_TIME_SLOT_FRI_3PM_KEY  = "tFri3pm";
const TUTOR_TIME_SLOT_FRI_6PM_KEY  = "tFri6pm";
const TUTOR_TIME_SLOT_SAT_8AM_KEY  = "tSat8am";
const TUTOR_TIME_SLOT_SAT_12PM_KEY = "tSat12pm";
const TUTOR_TIME_SLOT_SAT_3PM_KEY  = "tSat3pm";
const TUTOR_TIME_SLOT_SAT_6PM_KEY  = "tSat6pm";
const TUTOR_TIME_SLOT_SUN_8AM_KEY  = "tSun8am";
const TUTOR_TIME_SLOT_SUN_12PM_KEY = "tSun12pm";
const TUTOR_TIME_SLOT_SUN_3PM_KEY  = "tSun3pm";
const TUTOR_TIME_SLOT_SUN_6PM_KEY  =  "tSun6pm";
    // Value of TUTOR_TIME_SLOT_<Day of Week>_<Time Slot>_KEY
    const TUTOR_TIME_SLOT_OPEN_KEY = "open";
    const TUTOR_TIME_SLOT_BUSY_KEY = "busy";
    const TUTOR_TIME_SLOT_CLOSE_KEY = "closed";
// NEW FEATURE 2.0
const ADMIN_WEB_URL_KEY = "aWebUrl";
const ADMIN_PREMIUM_SUBJECT_LIMIT_KEY = "aPremiumSubjectLimit"; // Default 10
const ADMIN_PREMIUM_CONNECT_LIMIT_KEY = "aPremiumConnectLimit";
const ADMIN_TOTAL_SUBJECT_LIMIT_KEY = "aTotalSubjectLimit";  // Default 40
const ADMIN_TOTAL_CONNECT_LIMIT_KEY = "aTotalConnectLimit";
const ADMIN_PREFFERED_AREA_LIMIT_KEY = "aPreferredAreaLimit"; // Default 5
const ADMIN_PREFERRED_SUBJECT_LIMIT_KEY = "aPreferredSubjectLimit";// Default 20


// Subject specific details ()
const CATEGORY_KEY = "category";
const CATEGORY_ID_KEY = "categoryId";
const SUBJECT_KEY = "subject";
const SUBJECT_ID_KEY = "subjectId";
const DATE_CREATED_KEY = "dateCreated";
const FEES_KEY = "fees";
const FEES_PER_MONTH_KEY = "feesPerMonth"; // NEW FEATURE 2.0
const FEES_TYPE_KEY = "feesType";
    // Fees Type Value
    const FEES_TYPE_PER_MONTH_KEY = "Per Month";
    const FEES_TYPE_PER_HOUR_KEY = "Per Hour";
const DURATION_KEY = "duration";
const CLASSPERWEEK_KEY = "classPerWeek";
const AVAILABLE_KEY = "availableOn";
const PREFERED_START_TIMESLOT_KEY = "preferedStartTimeSlot";
const PREFERED_END_TIMESLOT_KEY = "preferedEndTimeSlot";
//    const ONLINE_KEY = "online";  // Use the one in job
const NEGOTIABLE_KEY = "negotiable";
const SUBJECT_DESCRIPTION_KEY = "subjectDescription";
const PHOTO_LINK1_KEY = "photoLink1";
const PHOTO_LINK2_KEY = "photoLink2";
const PHOTO_LINK3_KEY = "photoLink3";
const COMMISSION_PERCENT_KEY = "commissionPercent";
const COMMISSION_KEY = "commission";
const REBARE_PERCENT_KEY = "rebatePercent";
const REBATE_KEY = "rebate";
const EARNING_KEY = "earning";

// Tutor details (10)
const CHECK_HOMETUTOR_KEY = "isHomeTutor";
const CHECK_PRIVATETUTOR_KEY = "isPrivateTutor";
const CHECK_GROUPTUTOR_KEY = "isGroupTutor";
const CHECK_ONLINETUTOR_KEY = "isOnlineTutor";
// NEW FEATURE 2.0 Start
const CHECK_HOME_TUTOR_TO_STUDENT_KEY = "modeHomeTutorToStudent";
const CHECK_HOME_STUDENT_TO_TUTOR_KEY = "modeHomeStudentToTutor";
const CHECK_GROUP_KEY = "modeGroup";
const CHECK_ONLINE_KEY = "modeOnline";
const CHECK_ONLINE_GROUP_KEY = "modeOnlineGroup";
const CHECK_TEACHING_LANGUAGE_ENGLISH_KEY = "lanEng";
const CHECK_TEACHING_LANGUAGE_BM_KEY = "lanBm";
const CHECK_TEACHING_LANGUAGE_BC_KEY = "lanBc";
const CHECK_TEACHING_LANGUAGE_BT_KEY = "lanBt";
const CHECK_TEACHING_LANGUAGE_OTHER_KEY = "lanOther";
// NEW FEATURE 2.0 End
const YEARS_EXPERIENCE_KEY="yearsExperience";
const TUTORING_EXPERIENCE_KEY="tutoringExperience";
const TUTORING_APPROACH_KEY="tutoringApproach";
const QUALIFICATION_KEY="qualification";
const PREFERED_AREA_LIST_KEY = "preferedAreaList";
const PREFERED_SUBJECT_LIST_KEY = "preferedSubjectList";

const STATUS_KEY = "status";
// Used in Model.TutorInfo
const RECENT_DATE_KEY = "recentDate";
// Used in ChatItem Model
const TAG_KEY = "tag";
    const TAG_CLIENT_KEY = "client";
    const TAG_TUTOR_KEY = "tutor";
    const TAG_AGENT_KEY = "agent";
    const TAG_ADMIN_KEY = "admin";

// Subject General Status
// Course Specific details + others
const COURSE_ID_KEY = "courseId";
const COURSE_DATE_CREATED_KEY = "courseDateCreated";
const COURSE_DATE_UPDATED_KEY = "courseDateUpdated";
const COURSE_DATE_FIRST_CLASS_KEY = "courseDateFirstClass";
const COURSE_DATE_NEXT_CLASS_KEY = "courseDateNextClass";
const COURSE_DATE_LAST_CLASS_KEY = "courseDateLastClass";
const CLIENT_NOTE_KEY = "clientNote";
const TUTOR_NOTE_KEY = "tutorNote";
const COURSE_STATUS_KEY = "statusCourse";
    const STATUS_NEW="new";
    const STATUS_ACCEPTED="accepted";
    const STATUS_REJEPTED="rejected";
    const STATUS_PAID="paid";
    const STATUS_TERMINATED = "terminated";
    const STATUS_SUSPENDED = "suspended";
    const STATUS_COMPLETED = "completed";
const STATUS_PAYMENT = "statusPayment";  // Paid/PayNow
//        const STATUS_PAYMENT_PAID = "Paid";
//        const STATUS_PAYMENT_PAYNOW = "Pay Now";
    const STATUS_PAYMENT_WAITFORPAYMENT_KEY = "WaitForPayment";
    const STATUS_PAYMENT_WAITFORACK_KEY = "WaitForAck";
    const STATUS_PAYMENT_PAID_KEY = "Paid";
    const STATUS_PAYMENT_WAITFORTUTORPAYMENTKEY = "WaitForTutorPayment";
    const STATUS_PAYMENT_WAITFORPAYMENTTOTUTOR_KEY = "WaitForPaymentToTutor";
    const STATUS_PAYMENT_CLIENTXPAY_KEY = "ClientXPay";
    const STATUS_PAYMENT_TUTORXPAY_KEY = "TutorXPay";
    const STATUS_PAYMENT_CLOSED_KEY = "Closed";
    const STATUS_PAYMENT_WARNING1_KEY = "Warning1";
    const STATUS_PAYMENT_WARNING2_KEY = "Warning2";
const STATUS_OVERALL = "statusOverall";  // [Boolean]Active/Passive
const STATUS_REVIEW = "statusReview";  // [Boolean]Active/Passive


// Subject Overall Status
const COURSE_TUTOR_COMMENT_KEY = "courseTutorComment";
const COURSE_TUTOR_COMMENT_LIST_KEY = "courseTutorCommentList";
const COURSE_DATE_SESSION_LIST_KEY = "courseDateSessionList";
const COURSE_PAYMENT_TOTAL_LIST_KEY = "coursePaymentTotalList";// List of payment amount
const COURSE_PAYMENT_DATE_LIST_KEY = "coursePaymentDateList";// List of payment date
const COURSE_PAYMENT_TYPE_LIST_KEY = "coursePaymentTypeList";  // List of payment type (Cash/CC)
const COURSE_PAYMENT_STATUS_LIST_KEY = "coursePaymentStatusList"; //List of payment status (T->paid;F->paynow)

// Tutor Personal Details (Used in RequestSendActivity and OnGoingSessionActivity)
const TUTOR_ID_KEY = "id_tutor";
const TUTOR_NAME_KEY = "name_tutor";
const TUTOR_EMAIL_KEY = "email_tutor";
const TUTOR_PHONE_KEY = "phone_tutor";
const TUTOR_AGE_KEY = "age_tutor";
const TUTOR_GENDER_KEY = "gender_tutor";
const TUTOR_NRIC_KEY = "nric_tutor";
const TUTOR_ADDRESS_KEY = "address_tutor";
const TUTOR_IMAGE_KEY = "imgUrl_tutor";
const TUTOR_RATING_KEY = "rating_tutor";
const TUTOR_RATING_TIMES_KEY = "ratingTimes_tutor";
const TUTOR_PROFILE_STATUS_KEY = "profileStatus_tutor";

// Client Personal Details (Used in RequestSendActivity and OnGoingSessionActivity)
const CLIENT_ID_KEY = "id_client";
const CLIENT_NAME_KEY = "name_client";
const CLIENT_EMAIL_KEY = "email_client";
const CLIENT_PHONE_KEY = "phone_client";
const CLIENT_AGE_KEY = "age_client";
//    const CLIENT_GENDER_KEY = "gende_client";
const CLIENT_NRIC_KEY = "nric_client";
const CLIENT_ADDRESS_KEY = "address_client";
const CLIENT_IMAGE_KEY = "imgUrl_client";

// Used in payment activity
// Payment detail
// Note: adminDatePaymentToTutor                -> Date when payment is made to tutor
// Note: clientDatePayment                      -> Date when payment is made by Client
// Note: clientDatePaymentDue                   -> Payment due date for client to make payment (FirstClassDate + 21D)
// Note: clientDateTermination                  -> Date when a course is terminated due to no payment made by Client (FirstClassDate + 28D)
// Note: clientDateNextPaymentDue               -> Payment due date for client of next cycle
// Note: tutorDatePaymentToAdmin                -> Date when a payment is made by Tutor to GoLearn
// Note: tutorDatePaymentToAdminDue             -> Payment due date for tutor to make payment to GoLearn(clientDatePayment + 7D)
// Note: tutorDatePaymentToAdminTermination     -> Date when a course is terminated due to no payment made by Tutor (clientDateTermination + 7D)
// Note: adminPaymentToTutorDone                -> Payment to tutor Done?
// Note: clientPaymentDone                      -> Payment by Client Done? If cash, this must be indicate by tutor. If CC, automatics
// Note: tutorPaymentToAdminDone                -> Payment of commission by Tutor if cash is selected
const PAYMENT_ID_KEY = "paymentId";
const COURSE_DATE_TERMINATION_KEY = "courseDateTermination";
const ADMIN_DATE_PAYMENT_TO_TUTOR_KEY = "adminDatePaymentToTutor";
const CLIENT_DATE_NEXT_PAYMENT_DUE_KEY = "clientDateNextPaymentDue";
const CLIENT_DATE_PAYMENT_KEY = "clientDatePayment";
const CLIENT_DATE_PAYMENT_DUE_KEY = "clientDatePaymentDue";
const CLIENT_DATE_TERMINATION_KEY = "clientDateTermination";
const TUTOR_DATE_PAYMENT_TO_ADMIN_KEY = "tutorDatePaymentToAdmin";
const TUTOR_DATE_PAYMENT_TO_ADMIN_DUE_KEY = "tutorDatePaymentToAdminDue";
const TUTOR_DATE_PAYMENT_TO_ADMIN_TERMINATION_KEY = "tutorDatePaymentToAdminTermination";
const ADMIN_PAYMENT_TO_TUTOR_DONE_KEY = "adminPaymentToTutorDone";
const CLIENT_PAYMENT_DONE_KEY = "clientPaymentDone";
const TUTOR_PAYMENT_TO_ADMIN_DONE_KEY = "tutorPaymentToAdminDone";

// Used in FCM
const CHANNEL_ID_KEY = "channelId";
const CHANNEL_NAME_KEY = "channelName";
const CHANNEL_MESSAGE_KEY = "channelMessage";

// Type used in Notification
const REQUEST_KEY = "request";
const UPDATE_KEY = "update";
const ACCEPT_KEY = "accept";
const REJECT_KEY = "reject";
const TERMINATE_KEY = "terminate";
const PAYMENT_KEY = "payment";
const MESSAGE_KEY = "message";
const READ_KEY = "read";
const NEW_MESSAGE_KEY = "newMessage"; // When a message is sent

// Used in Notification
const STATUS_NOTIFICATION_KEY = "statusNotification";

// KEY used in chat activity
const SENDER_KEY = "sender";
const RECEIVER_KEY = "receiver";
const DATE_KEY = "date";
const TIME_KEY = "time";
//    private static final String MESSAGE_KEY = "message"; DUPLICATED
const SEEN_KEY = "seen";

// Used in AgentJobAddActivity
const JOBID_KEY = "jobId";
//    const SUBJECT_KEY = "subject";
//    const CATEGORY_KEY = "CATEGORY";
const CATEGORY_SUBJECT_KEY = "categorySubject";
const AREA_KEY = "area";
const AREA_ID_KEY = "areaId";
const STATE_KEY = "state";
const STATE_ID_KEY = "stateId";
const CLIENT_LOCATION_DETAIL_KEY = "clientLocationDetail";
const JOB_DETAIL_KEY = "jobDetail";
const OTHER_DETAIL_KEY = "otherDetail";
const COMMISION_POLICY_KEY = "commisionPolicy";
const ONLINE_KEY = "online";
const FEE_KEY = "fee";
const AGENT_ID_KEY = "agentId";
const AGENT_NAME_KEY = "agentName";
const NUMBER_APPLIED_KEY = "numberApplied";
//    const DATE_CREATED_KEY = "dateCreated";
const DATE_CLOSED_KEY = "dateClosed";
const DATE_DELETED_KEY = "dateDeleted";
const JOB_STATUS_KEY = "jobStatus";
const JOB_MESSAGE_KEY = "jobMessage";
    // Value of JOB_STATUS_KEY
    // Agent / Parents - What we see
    const JOB_STATUS_OPEN_KEY = "open"; // Means new
    const JOB_STATUS_CLOSED_KEY = "closed"; // Depreciated, Change to success and failed.
    const JOB_STATUS_SUCCESS_KEY = "success";
    const JOB_STATUS_FAILED_KEY = "failed";
    const JOB_STATUS_FULL_KEY = "full";
    // Tutor/Applicant - What they see
    const JOB_STATUS_NEW_KEY = "new";
    const JOB_STATUS_ACCCEPTED_KEY = "accepted";
    const JOB_STATUS_REJECTED_KEY = "rejected";

// NEW FEATURE 2.0:
// Time Slot Specific
const TIME_SLOT_NAME_KEY = "timeSlotName";
const TIME_SLOT_DESCRIPTION_KEY = "timeSlotDescription";
const TIME_SLOT_STATUS_KEY = "timeSlotStatus";
// Commission Policy
const COMMISSION_POLICY_KEY = "comPol";
    // Values of COMMISSION_POLICY_KEY
    const COMMISSION_POLICY_10_KEY = "10pc";
    const COMMISSION_POLICY_20_KEY = "20pc";
    const COMMISSION_POLICY_30_KEY = "30pc";
    const COMMISSION_POLICY_40_KEY = "40pc";
    const COMMISSION_POLICY_50_KEY = "50pc";
    const COMMISSION_POLICY_2622181614_KEY = "2622181614pc";

// Tutor Request Form Specific (used in JobRequests modal)
const CLIENT_TYPE_KEY = "cType";
const CLIENT_STUDENT_GENDER_KEY = "cStuGen";
const CLIENT_SCHOOL_KEY = "cSchool";
const CLIENT_BUDGET_KEY = "cBudget";
const CLIENT_LENGTH_OF_COMMITMENT_KEY = "cLOC";
const CLIENT_START_DATE_KEY = "cStartDate";
const CLIENT_PREFERRED_DAY_OF_WEEK_KEY = "cPDOW";
const CLIENT_PREFERRED_TIME_SLOT_KEY = "cPSlot";
const CLIENT_PREFERRED_TUTOR_GENDER_KEY = "cPTGen";
const CLIENT_PREFERRED_TUTOR_RACE_KEY = "cStartDate";
const CLIENT_NOTES_KEY = "cNote";
const CLIENT_SURVEY_1_KEY = "cSurvey1";
const CLIENT_SURVEY_2_KEY = "cSurvey2";
const CLIENT_SURVEY_3_KEY = "cSurvey3";

// Admin Commission Policy (per month)
const ADMIN_PARAM_COMMISSION_POLICY_MONTH_1_KEY = "aMonth1";
const ADMIN_PARAM_COMMISSION_POLICY_MONTH_2_KEY = "aMonth2";
const ADMIN_PARAM_COMMISSION_POLICY_MONTH_3_KEY = "aMonth3";
const ADMIN_PARAM_COMMISSION_POLICY_MONTH_4_KEY = "aMonth4";
const ADMIN_PARAM_COMMISSION_POLICY_MONTH_5_KEY = "aMonth5";
const ADMIN_PARAM_COMMISSION_POLICY_MONTH_6_KEY = "aMonth6";
const ADMIN_PARAM_COMMISSION_POLICY_MONTH_7_KEY = "aMonth7";
const ADMIN_PARAM_COMMISSION_POLICY_MONTH_8_KEY = "aMonth8";
const ADMIN_PARAM_COMMISSION_POLICY_MONTH_9_KEY = "aMonth9";
const ADMIN_PARAM_COMMISSION_POLICY_MONTH_10_KEY = "aMonth10";
const ADMIN_PARAM_COMMISSION_POLICY_MONTH_11_KEY = "aMonth11";
const ADMIN_PARAM_COMMISSION_POLICY_MONTH_12_KEY = "aMonth12";

// GoLearn CLASS Module
const CLASS_ID = "id";
const CLASS_NAME = "name";
const CLASS_IMG_URL = "imgUrl";
const CLASS_DESC = "desc";
const CLASS_CATEGORY_KEY = "category";
const CLASS_CATEGORY_ID_KEY = "categoryId";
const CLASS_SUBJECT_KEY = "subject";
const CLASS_SUBJECT_ID_KEY = "subjectId";
const CLASS_ONLINE_KEY = "online";
const CLASS_VENUE = "venue";
const CLASS_AREA_KEY = "area";
const CLASS_AREA_ID_KEY = "areaId";
const CLASS_STATE_KEY = "state";
const CLASS_STATE_ID_KEY = "stateId";

const CLASS_TIMESLOT_DAY_OF_WEEK_ARR = "timeSlotDayOfWeekArr";
const CLASS_TIMESLOT_START_ARR = "timeSlotStartArr";
const CLASS_TIMESLOT_END_ARR = "timeSlotEndArr";
const CLASS_STUDENT_LIMIT = "stuLimit";
const CLASS_FIRST_CLASS_DATE = "firstClass";
const CLASS_ANNOUNCEMENT = "announcement";

const CLASS_FEES_KEY = "fees";
const CLASS_FEES_PER_MONTH_KEY = "feesPerMonth"; // NEW FEATURE 2.0
const CLASS_FEES_TYPE_KEY = "feesType";

// const CLASS_URL = "classUrl";
const CLASS_TYPE = "classType";
    const CLASS_TYPE_PRIVATE = "private";
    const CLASS_TYPE_PUBLIC = "public";
const CLASS_STATUS = "classStatus";
    const CLASS_STATUS_ACTIVE = "active";
    const CLASS_STATUS_INACTIVE = "inactive";

const CLASS_ADMIN_ID = "adminId";
const CLASS_TUTOR_ID_ARR = "tutorIdArr";
const CLASS_TUTOR_NAME_ARR = "tutorNameArr";
const CLASS_TUTOR_PHONE_ARR = "tutorPhoneArr";
const CLASS_TUTOR_IMG_URL_ARR = "tutorImgUrlArr";
const CLASS_STUDENT_ID_ARR = "stuIdArr";
const CLASS_VIEWER_ID_ARR = "viewerIdArr";
const CLASS_CLASS_URL = "urlClass"; // Zoom
const CLASS_CHAT_GROUP_URL = "urlGroup"; // Whatsapp / Telegrame
const CLASS_MATERIAL_URL = "urlMaterial"; // GClass

// const CLASS_TUTOR1_ADD_EDIT_STUDENT_ENABLE = "perT1AddEditStuEn";
// const CLASS_TUTOR1_REMOVE_STUDENT_ENABLE = "perT1DelStuEn";
// const CLASS_TUTOR1_ADD_EDIT_LESSON_ENABLE = "perT1AddEditLessonEn";
// const CLASS_TUTOR1_REMOVE_LESSON_ENABLE = "perT1AddDelLessonEn";
// const CLASS_TUTOR2_ADD_EDIT_STUDENT_ENABLE = "perT2AddEditStuEn";
// const CLASS_TUTOR2_REMOVE_STUDENT_ENABLE = "perT2DelStuEn";
// const CLASS_TUTOR2_ADD_EDIT_LESSON_ENABLE = "perT2AddEditLessonEn";
// const CLASS_TUTOR2_REMOVE_LESSON_ENABLE = "perT2AddDelLessonEn";
const CLASS_STUDENT_AUTO_JOIN_ENABLE = "perStuAutoJoinEn";
const CLASS_TUTOR_ADD_EDIT_LESSON_ENABLE = "perTAddLesEn";
const CLASS_TUTOR_REMOVE_LESSON_ENABLE = "perTDelLesEn";

const CLASS_DATE_ADD = "dateAdd";
const CLASS_DATE_EDIT = "dateEdit";
const CLASS_DATE_DEL = "dateDel";
const CLASS_EDIT_MSG = "editMsg"; // Auto status gen message 

// GoLearn LESSON Class Sub-Module
const LESSON_ID = "id";
const LESSON_CLASS_ID = "classId";
const LESSON_ADMIN = "adminId";
const LESSON_STATUS = "status";
const LESSON_DATE_ADD = "dateAdd";
const LESSON_DATE_EDIT = "dateEdit";
const LESSON_DATE_DEL = "dateDel";

const LESSON_DATE = "lesDate";
const LESSON_MONTH_TYPE = "lesMonthType"; // mmm-yyyy
const LESSON_START = "lesStart";
const LESSON_END = "lesEnd";
const LESSON_DESC = "lesDesc";
const LESSON_FEEDBACK = "lesFeedback";
const LESSON_RATE = "lesRate";

// GoLearn CLASS_STUDENT Class Sub-Module
const CLASS_STUDENT_ID = "id";
const CLASS_STUDENT_CLASS_ID = "classId";
const CLASS_STUDENT_ADMIN_ID = "adminId";
const CLASS_STUDENT_DEPENDENT_ID = "depId";
const CLASS_STUDENT_STATUS = "status";
const CLASS_STUDENT_DATE_ADD = "dateAdd";
const CLASS_STUDENT_DATE_EDIT = "dateEdit";
const CLASS_STUDENT_DATE_DEL = "dateDel";
const CLASS_STUDENT_ENROLLMENT_STATUS ="statusEnrollment";
    const CLASS_STUDENT_ENROLLMENT_STATUS_PENDING ="pending";
    const CLASS_STUDENT_ENROLLMENT_STATUS_ACTIVE ="active";
    const CLASS_STUDENT_ENROLLMENT_STATUS_INACTIVE ="inactive";

const CLASS_STUDENT_STU_ID = "stuId";
const CLASS_STUDENT_STU_NAME = "stuName";
const CLASS_STUDENT_STU_PHONE = "stuPhone";
const CLASS_STUDENT_STU_GENDER = "stuGender";
const CLASS_STUDENT_STU_EMAIL = "stuEmail";
const CLASS_STUDENT_GUR_ID = "gurId";
const CLASS_STUDENT_GUR_NAME = "gurName";
const CLASS_STUDENT_GUR_PHONE = "gurPhone";
const CLASS_STUDENT_GUR_EMAIL = "gurEmail";
const CLASS_STUDENT_GUR_ADDR = "gurAddr";
const CLASS_STUDENT_FEEDBACK = "feedback";
// const CLASS_STUDENT_BADGE_1 = "badge1"; // UNUSED
// const CLASS_STUDENT_BADGE_2 = "badge2";
// const CLASS_STUDENT_BADGE_3 = "badge3";
// const CLASS_STUDENT_BADGE_4 = "badge4";
// const CLASS_STUDENT_BADGE_5 = "badge5";


// GoLearn Student Module
const STU_ID = "id";
const STU_USER_ID = "userId";
const STU_ADMIN_ID = "adminId";
const STU_DEPENDENT_ID = "depId";
const STU_VIEWER_ID = "viewerId";
const STU_DATE_ADD = "dateAdd";
const STU_DATE_EDIT = "dateEdit";
const STU_DATE_DEL = "dateDel";
const STU_ENROLLMENT_STATUS ="statusEnrollment";
    const STU_ENROLLMENT_STATUS_PENDING ="pending";
    const STU_ENROLLMENT_STATUS_ACTIVE ="active";
    const STU_ENROLLMENT_STATUS_INACTIVE ="inactive";
const STU_STATUS = "status";

const STU_STATUS_ADMIN = "statusAdmin";
const STU_STATUS_USER = "statusUser"; // mmm-yyyy
const STU_ADMIN_NAME = "adName";
const STU_ADMIN_PHONE = "adPhone";
const STU_ADMIN_ADDR = "adAddr";
const STU_ADMIN_IMG_URL = "adImgUrl";
const STU_GUR_ID = "gurId";
const STU_GUR_RELATIONSHIP = "gurRelationship";
    const STU_GUR_RELATIONSHIP_PARENTS = "parents";
    const STU_GUR_RELATIONSHIP_GUARDIAN = "guardian";
    const STU_GUR_RELATIONSHIP_MYSELF = "myself";
const STU_GUR_NAME = "gurName";
const STU_GUR_PHONE = "gurPhone";
const STU_GUR_GENDER = "gurGender";
const STU_GUR_EMAIL = "gurEmail";
const STU_GUR_ADDR = "gurAddr";
const STU_GUR_STATE_ID = "gurStateId";
const STU_GUR_AREA_ID = "gurAreaId";
const STU_CHILD_ID = "childId";
const STU_CHILD_NAME = "childName";
const STU_CHILD_PHONE = "childPhone";
const STU_CHILD_GENDER = "childGender";
const STU_CHILD_EMAIL = "childEmail";
const STU_CHILD_SCHOOL = "childSchool";

// GoLearn Dependant Module
const DEP_ID = "id";
const DEP_USER_ID = "userId";
const DEP_DATE_ADD = "dateAdd";
const DEP_DATE_EDIT = "dateEdit";
const DEP_DATE_DEL = "dateDel";
const DEP_STATUS = "status";

const DEP_GUR_ID = "gurId";
const DEP_GUR_RELATIONSHIP = "gurRelationship";
    const DEP_GUR_RELATIONSHIP_PARENTS = "parents";
    const DEP_GUR_RELATIONSHIP_GUARDIAN = "guardian";
    const DEP_GUR_RELATIONSHIP_MYSELF = "myself";
const DEP_GUR_NAME = "gurName";
const DEP_GUR_PHONE = "gurPhone";
const DEP_GUR_GENDER = "gurGender";
const DEP_GUR_EMAIL = "gurEmail";
const DEP_GUR_ADDR = "gurAddr";
const DEP_GUR_STATE_ID = "gurStateId";
const DEP_GUR_AREA_ID = "gurAreaId";
const DEP_CHILD_ID = "childId";
const DEP_CHILD_NAME = "childName";
const DEP_CHILD_PHONE = "childPhone";
const DEP_CHILD_GENDER = "childGender";
const DEP_CHILD_EMAIL = "childEmail";
const DEP_CHILD_SCHOOL = "childSchool";

// Golearn TUTOR Module
const TUTOR_ID = "id";
const TUTOR_TUTOR_ID = "tutorId";
const TUTOR_ADMIN_ID = "adminId";
const TUTOR_DATE_ADD = "dateAdd";
const TUTOR_DATE_EDIT = "dateEdit";
const TUTOR_DATE_DEL = "dateDel";
const TUTOR_STATUS_ADMIN = "statusAdmin";
const TUTOR_STATUS_TUTOR = "statusTutor";
    const TUTOR_STATUS_TYPE_ACTIVE = 'active';
    const TUTOR_STATUS_TYPE_PASSIVE = 'passive';
    const TUTOR_STATUS_TYPE_DELETE = 'delete';

const TUTOR_ADMIN_NAME = "adName";
const TUTOR_ADMIN_PHONE = "adPhone";
const TUTOR_ADMIN_EMAIL = "adEmail";
const TUTOR_ADMIN_ADDR = "adAddr";
const TUTOR_ADMIN_IMG_URL = "adImgUrl";
const TUTOR_ADMIN_WEB_URL = "adWebUrl";

const TUTOR_TUTOR_NAME = "tutorName";
const TUTOR_TUTOR_PHONE = "tutorPhone";
const TUTOR_TUTOR_EMAIL = "tutorEmail";
const TUTOR_TUTOR_GENDER = "tutorGender";
const TUTOR_TUTOR_AGE = "tutorAge";
const TUTOR_TUTOR_ADDR = "tutorAddr";
const TUTOR_TUTOR_IMG_URL = "tutorImgUrl";
const TUTOR_TUTOR_WEB_URL = "tutorWebUrl";

const TUTOR_BANK_NAME = "bankName";
const TUTOR_AC_NO = "bankACNo";
const TUTOR_EPF = "noEpf";
const TUTOR_SOCSO = "noSocso";

// const TUTOR_CLASS_ACTIVE = "classActive";
// const TUTOR_CLASS_ID_ARR = "classIdArr";

// Golearn Tutor Settings
const SET_ID = "id";
const SET_TUTOR_ID = "tutorId"; // main
const SET_BIZ_NAME = "bizName";
const SET_BIZ_PHONE = "bizPhone";
const SET_BIZ_EMAIL = "bizEmail";
const SET_BIZ_ADDR = "bizAddr";
const SET_BIZ_IMG_URL = "bizImgUrl";
const SET_BANK_ACC_NAME = "bankAccName";
const SET_BANK_ACC_NUM = "bankAccNum";
const SET_BANK_NAME = "bankName";

const SET_INV_NOTE = "invNote";
const SET_INV_FOOTER_NOTE = "invFooterNote";

//  Transaction
const TRANS_ID = "id";
const TRANS_DOC_ID = "docId"; //id of the ori doc
const TRANS_DOC_NUM = "docNo"; //invoice / payslip no.
const TRANS_SENDER_ID = "idS";
const TRANS_RECEIVER_ID = "idR"; 
const TRANS_SENDER_NAME = "nameS";
const TRANS_RECEIVER_NAME = "nameR";
const TRANS_VIEWER_ARR = "viewerArr"; //main
const TRANS_DATE = "date";
const TRANS_TITLE = "title";
const TRANS_TYPE = "type"; // main
    const TRANS_TYPE_INV = "inv";
    const TRANS_TYPE_PAY = "pay";
const TRANS_DOC_STATUS = "docStatus"; // document specific statuses
    const TRANS_INV_STATUS_DRAFT = "draft";
    const TRANS_INV_STATUS_NEW = "new";
    const TRANS_INV_STATUS_PAID = "paid";
    // const TRANS_PAY_STATUS = "";
const TRANS_TOTAL = "total";
const TRANS_DATE_EDIT = "dateEdit";
const TRANS_STATUS = "status";

//  Invoice
const INV_ID = "id";
const INV_SENDER_ID = "idS"; // main
const INV_RECEIVER_ID = "idR";
const INV_SENDER_NAME = "nameS";
const INV_SENDER_DETAILS = "descS";
const INV_SENDER_IMG_URL = "logoUrl";
const INV_RECEIVER_NAME = "nameR";
const INV_RECEIVER_DETAILS = "descR";
const INV_TITLE = "title";
const INV_NUMBER = "invNo";
const INV_ISSUE_DATE = "invDate";
const INV_DUE_DATE = "invDue";
const INV_INV_STATUS = "invStatus";
    const INV_STATUS_DRAFT = "draft";
    const INV_STATUS_NEW = "new";
    const INV_STATUS_PAID = "paid";

const INV_ITEMS_ARR = "invItemsArr";
const INV_TOTAL = "invTotal";
const INV_NOTES = "note";
const INV_FOOTER_NOTES = "noteFooter";

const INV_PAYMENT_DATE = "payDate";
const INV_PAYMENT_AMOUNT = "payAmount";
const INV_PAYMENT_NOTE = "payNote";

const INV_DATE_ADD = "dateAdd";
const INV_DATE_EDIT = "dateEdit";
const INV_DATE_DEL = "dateDel";
const INV_STATUS = "status";

//  Payroll
const PAYROLL_ID = "id";
const PAYROLL_NAME = "name"; // main
const PAYROLL_DATE_START = "start";
const PAYROLL_DATE_END = "end";
const PAYROLL_EMPLOYEE_NUM = "num";
const PAYROLL_STATUS = "status";

//  Payslip (Payroll)
const PAY_ID = "id";
const PAY_PAYROLL_ID = "payrollId";
const PAY_PAYROLL_NAME = "payrollName";
const PAY_SENDER_ID = "idS"; // main
const PAY_RECEIVER_ID = "idR";
const PAY_SENDER_NAME = "nameS";
const PAY_SENDER_DETAILS = "descS";
const PAY_SENDER_IMG_URL = "logoUrl";
const PAY_RECEIVER_NAME = "nameR";
const PAY_RECEIVER_DETAILS = "descR";
const PAY_TITLE = "title";
const PAY_NUMBER = "invNo";
const PAY_ISSUE_DATE = "invDate";
const PAY_DUE_DATE = "invDue";
const PAY_PAY_STATUS = "invStatus";
    const PAY_STATUS_DRAFT = "draft";
    const PAY_STATUS_NEW = "new";
    const PAY_STATUS_PAID = "paid";

const PAY_ITEMS_ARR = "invItemsArr";
const PAY_TOTAL = "invTotal";
const PAY_NOTES = "note";
const PAY_FOOTER_NOTES = "noteFooter";

const PAY_PAYMENT_DATE = "payDate";
const PAY_PAYMENT_AMOUNT = "payAmount";
const PAY_PAYMENT_NOTE = "payNote";

const PAY_DATE_ADD = "dateAdd";
const PAY_DATE_EDIT = "dateEdit";
const PAY_DATE_DEL = "dateDel";
const PAY_STATUS = "status";



// -------------- Session Storage Key Start -------------- //
// TUTOR: Class Module 
const SESSION_STORAGE_CLASS_ALL_DOCS_KEY = "allDocs";
const SESSION_STORAGE_CLASS_CURRENT_DOC_KEY = "currentDoc";
const SESSION_STORAGE_CLASS_CURRENT_DOC_ID_KEY = "currentDocId";
const SESSION_STORAGE_CLASS_LOAD_KEY = "load"; // True => load/show, vice versa
const SESSION_STORAGE_CLASS_NON_ADMIN_KEY = "nonAdmin";
// const SESSION_STORAGE_CLASS_KEY = "sessionStorageClass";
// TUTOR: Student Module 
const SESSION_STORAGE_STUDENT_ALL_DOCS_KEY = "allStudentsDocs";
const SESSION_STORAGE_STUDENT_CURRENT_DOC_KEY = "currentStudentDoc";
// TUTOR: Dependant Module
const SESSION_STORAGE_DEPENDANT_ALL_DOCS_KEY = "allDependantsDocs";
const SESSION_STORAGE_DEPENDANT_CURRENT_DOC_KEY = "currentDependantDoc";
// TUTOR: Tutor Module
const SESSION_STORAGE_TUTOR_ALL_DOCS_KEY = "allTutorsDocs";
const SESSION_STORAGE_TUTOR_CURRENT_DOC_KEY = "currentTutorDoc";

// TUTOR:Transaction Module
const SESSION_STORAGE_TRANSACTION_ALL_DOCS_KEY = "allTransactionDocs";
const SESSION_STORAGE_TRANSACTION_CURRENT_DOC_KEY = "currentTransactionDoc";

// TUTOR:Invoice Module
const SESSION_STORAGE_INVOICE_ALL_DOCS_KEY = "allInvoiceDocs";
const SESSION_STORAGE_INVOICE_CURRENT_DOC_KEY = "currentInvoiceDoc";

// CLIENT: Class Module
const SESSION_STORAGE_CLIENT_CLASS_ALL_DOCS_KEY = "allClientClassDocs";
const SESSION_STORAGE_CLIENT_CLASS_CURRENT_DOC_KEY = "currentClientClassDoc";

// CLIENT:Invoice Module
const SESSION_STORAGE_CLIENT_INVOICE_ALL_DOCS_KEY = "allClientInvoiceDocs";
const SESSION_STORAGE_CLIENT_INVOICE_CURRENT_DOC_KEY = "currentClientInvoiceDoc";


// -------------- Session Storage Key End   -------------- //