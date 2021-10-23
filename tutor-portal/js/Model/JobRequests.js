// This file defined all firestore Job Requests data model

class JobRequests {

    constructor (name_client,  id_client,  email_client,  phone_client,  address_client,  cType,  cStuGen,  cSchool,  cBudget,  cLOC,  cStartDate,  cPDOW,  cPSlot,  cPTGen,  cPTRace,  cNote,  cSurvey1,  cSurvey2,  cSurvey3,  id,  category,  categoryId,  subject,  subjectId,  area,  areaId,  state,  stateId, online,  jobDetail,  feeType, duration, fees, classPerWeek, tutorNameList, tutorIdList, tutorWebUrlList,  tutorStatusList,  comPol, dateCreated, dateClosed,  jobStatus,  jobMessage, status) {
        this.name_client = name_client;
        this.id_client = id_client;
        this.email_client = email_client;
        this.phone_client = phone_client;
        this.address_client = address_client;
        this.cType = cType;
        this.cStuGen = cStuGen;
        this.cSchool = cSchool;
        this.cBudget = cBudget;
        this.cLOC = cLOC;
        this.cStartDate = cStartDate;
        this.cPDOW = cPDOW;
        this.cPSlot = cPSlot;
        this.cPTGen = cPTGen;
        this.cPTRace = cPTRace;
        this.cNote = cNote;
        this.cSurvey1 = cSurvey1;
        this.cSurvey2 = cSurvey2;
        this.cSurvey3 = cSurvey3;
        this.id = id;
        this.category = category;
        this.categoryId = categoryId;
        this.subject = subject;
        this.subjectId = subjectId;
        this.area = area;
        this.areaId = areaId;
        this.state = state;
        this.stateId = stateId;
        this.online = online;
        this.jobDetail = jobDetail;
        this.feeType = feeType;
        this.duration = duration;
        this.fees = fees;
        this.classPerWeek = classPerWeek;
        this.tutorNameList = tutorNameList;
        this.tutorIdList = tutorIdList;
        this.tutorWebUrlList = tutorWebUrlList;
        this.tutorStatusList = tutorStatusList;
        this.comPol = comPol;
        this.dateCreated = dateCreated;
        this.dateClosed = dateClosed;
        this.jobStatus = jobStatus;
        this.jobMessage = jobMessage;
        this.status = status;
    }

    constructor (){}


    getName_client() {
        return name_client;
    }

    setName_client( name_client) {
        this.name_client = name_client;
    }

    getId_client() {
        return id_client;
    }

    setId_client( id_client) {
        this.id_client = id_client;
    }

    getEmail_client() {
        return email_client;
    }

    setEmail_client( email_client) {
        this.email_client = email_client;
    }

    getPhone_client() {
        return phone_client;
    }

    setPhone_client( phone_client) {
        this.phone_client = phone_client;
    }

    getAddress_client() {
        return address_client;
    }

    setAddress_client( address_client) {
        this.address_client = address_client;
    }

    getcType() {
        return cType;
    }

    setcType( cType) {
        this.cType = cType;
    }

    getcStuGen() {
        return cStuGen;
    }

    setcStuGen( cStuGen) {
        this.cStuGen = cStuGen;
    }

    getcSchool() {
        return cSchool;
    }

    setcSchool( cSchool) {
        this.cSchool = cSchool;
    }

    getcBudget() {
        return cBudget;
    }

    setcBudget( cBudget) {
        this.cBudget = cBudget;
    }

    getcLOC() {
        return cLOC;
    }

    setcLOC( cLOC) {
        this.cLOC = cLOC;
    }

    getcStartDate() {
        return cStartDate;
    }

    setcStartDate( cStartDate) {
        this.cStartDate = cStartDate;
    }

    getcPDOW() {
        return cPDOW;
    }

    setcPDOW( cPDOW) {
        this.cPDOW = cPDOW;
    }

    getcPSlot() {
        return cPSlot;
    }

    setcPSlot( cPSlot) {
        this.cPSlot = cPSlot;
    }

    getcPTGen() {
        return cPTGen;
    }

    setcPTGen( cPTGen) {
        this.cPTGen = cPTGen;
    }

    getcPTRace() {
        return cPTRace;
    }

    setcPTRace( cPTRace) {
        this.cPTRace = cPTRace;
    }

    getcNote() {
        return cNote;
    }

    setcNote( cNote) {
        this.cNote = cNote;
    }

    getcSurvey1() {
        return cSurvey1;
    }

    setcSurvey1( cSurvey1) {
        this.cSurvey1 = cSurvey1;
    }

    getcSurvey2() {
        return cSurvey2;
    }

    setcSurvey2( cSurvey2) {
        this.cSurvey2 = cSurvey2;
    }

    getcSurvey3() {
        return cSurvey3;
    }

    setcSurvey3( cSurvey3) {
        this.cSurvey3 = cSurvey3;
    }

    getId() {
        return id;
    }

    setId( id) {
        this.id = id;
    }

    getCategory() {
        return category;
    }

    setCategory( category) {
        this.category = category;
    }

    getCategoryId() {
        return categoryId;
    }

    setCategoryId( categoryId) {
        this.categoryId = categoryId;
    }

    getSubject() {
        return subject;
    }

    setSubject( subject) {
        this.subject = subject;
    }

    getSubjectId() {
        return subjectId;
    }

    setSubjectId( subjectId) {
        this.subjectId = subjectId;
    }

    getArea() {
        return area;
    }

    setArea( area) {
        this.area = area;
    }

    getAreaId() {
        return areaId;
    }

    setAreaId( areaId) {
        this.areaId = areaId;
    }

    getState() {
        return state;
    }

    setState( state) {
        this.state = state;
    }

    getStateId() {
        return stateId;
    }

    setStateId( stateId) {
        this.stateId = stateId;
    }

    getOnline() {
        return online;
    }

    setOnline( online) {
        this.online = online;
    }

    getJobDetail() {
        return jobDetail;
    }

    setJobDetail( jobDetail) {
        this.jobDetail = jobDetail;
    }

    getFeeType() {
        return feeType;
    }

    setFeeType( feeType) {
        this.feeType = feeType;
    }

    getDuration() {
        return duration;
    }

    setDuration( duration) {
        this.duration = duration;
    }

    getFees() {
        return fees;
    }

    setFees( fees) {
        this.fees = fees;
    }

    getClassPerWeek() {
        return classPerWeek;
    }

    setClassPerWeek( classPerWeek) {
        this.classPerWeek = classPerWeek;
    }

    getTutorNameList() {
        return tutorNameList;
    }

    setTutorNameList( tutorNameList) {
        this.tutorNameList = tutorNameList;
    }

    getTutorIdList() {
        return tutorIdList;
    }

    setTutorIdList( tutorIdList) {
        this.tutorIdList = tutorIdList;
    }

    getTutorWebUrlList() {
        return tutorWebUrlList;
    }

    setTutorWebUrlList( tutorWebUrlList) {
        this.tutorWebUrlList = tutorWebUrlList;
    }

    getTutorStatusList() {
        return tutorStatusList;
    }

    setTutorStatusList(tutorStatusList) {
        this.tutorStatusList = tutorStatusList;
    }

    getComPol() {
        return comPol;
    }

    setComPol( comPol) {
        this.comPol = comPol;
    }

    getDateCreated() {
        return dateCreated;
    }

    setDateCreated( dateCreated) {
        this.dateCreated = dateCreated;
    }

    getDateClosed() {
        return dateClosed;
    }

    setDateClosed( dateClosed) {
        this.dateClosed = dateClosed;
    }

    getJobStatus() {
        return jobStatus;
    }

    setJobStatus( jobStatus) {
        this.jobStatus = jobStatus;
    }

    getJobMessage() {
        return jobMessage;
    }

    setJobMessage( jobMessage) {
        this.jobMessage = jobMessage;
    }

    getStatus() {
        return status;
    }

    setStatus( status) {
        this.status = status;
    }
}

// Firestore data converter
var jobRequestsConverter = {
    toFirestore: function(jobRequests) {
        return {
            name_client: jobRequests.name_client,
            id_client : jobRequests.id_client,
            email_client : jobRequests.email_client,
            phone_client : jobRequests.phone_client,
            address_client : jobRequests.address_client,
            cType : jobRequests.cType,
            cStuGen : jobRequests.cStuGen,
            cSchool : jobRequests.cSchool,
            cBudget : jobRequests.cBudget,
            cLOC : jobRequests.cLOC,
            cStartDate : jobRequests.cStartDate,
            cPDOW : jobRequests.cPDOW,
            cPSlot : jobRequests.cPSlot,
            cPTGen : jobRequests.cPTGen,
            cPTRace : jobRequests.cPTRace,
            cNote : jobRequests.cNote,
            cSurvey1 : jobRequests.cSurvey1,
            cSurvey2 : jobRequests.cSurvey2,
            cSurvey3 : jobRequests.cSurvey3,
            id : jobRequests.id,
            category : jobRequests.category,
            categoryId : jobRequests.categoryId,
            subject : jobRequests.subject,
            subjectId : jobRequests.subjectId,
            area : jobRequests.area,
            areaId : jobRequests.areaId,
            state : jobRequests.state,
            stateId : jobRequests.stateId,
            online : jobRequests.online,
            jobDetail : jobRequests.jobDetail,
            feeType : jobRequests.feeType,
            duration : jobRequests.duration,
            fees : jobRequests.fees,
            classPerWeek : jobRequests.classPerWeek,
            tutorNameList : jobRequests.tutorNameList,
            tutorIdList : jobRequests.tutorIdList,
            tutorWebUrlList : jobRequests.tutorWebUrlList,
            tutorStatusList : jobRequests.tutorStatusList,
            comPol : jobRequests.comPol,
            dateCreated : jobRequests.dateCreated,
            dateClosed : jobRequests.dateClosed,
            jobStatus : jobRequests.jobStatus,
            jobMessage : jobRequests.jobMessage,
            status : jobRequests.status
            };
    },
    fromFirestore: function(snapshot, options){
        const data = snapshot.data(options);
        return new City(
            data.name_client,
            data.id_client,
            data.email_client,
            data.phone_client,
            data.address_client,
            data.cType,
            data.cStuGen,
            data.cSchool,
            data.cBudget,
            data.cLOC,
            data.cStartDate,
            data.cPDOW,
            data.cPSlot,
            data.cPTGen,
            data.cPTRace,
            data.cNote,
            data.cSurvey1,
            data.cSurvey2,
            data.cSurvey3,
            data.id,
            data.category,
            data.categoryId,
            data.subject,
            data.subjectId,
            data.area,
            data.areaId,
            data.state,
            data.stateId,
            data.online,
            data.jobDetail,
            data.feeType,
            data.duration,
            data.fees,
            data.classPerWeek,
            data.tutorNameList,
            data.tutorIdList,
            data.tutorWebUrlList,
            data.tutorStatusList,
            data.comPol,
            data.dateCreated,
            data.dateClosed,
            data.jobStatus,
            data.jobMessage,
            data.status
        );
    }
};
