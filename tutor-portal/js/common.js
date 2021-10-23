// This file define common constants
const FEES_TYPE_KEY = "feesType";
    // Value of Fees Type 
    const FEES_TYPE_PER_MONTH_KEY = "Per Month";
    const FEES_TYPE_PER_HOUR_KEY = "Per Hour";

const DATE_CREATED_KEY = "dateCreated";
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