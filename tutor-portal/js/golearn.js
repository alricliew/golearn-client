// This js is used for Query data from GoLearn Firebase

// const testList = document.querySelector('#test')

// function renderData(doc){

//     let li = document.createElement('li');
//     let name = document.createElement('span');
//     let city = document.createElement('span');

//     li.setAttribute('data-id', doc.id);
//     name.textContent = doc.data().name;
//     city.textContent = doc.data().city;

//     li.appendChild(name);
//     li.appendChild(city);

//     testList.appendChild(li);

// }


// db.collection('test').get().then((snapshot) =>{
//    snapshot.docs.forEach(doc => {
//        renderData(doc);
//        console.log(doc)
//    }) 
// })

// Store last document
var latestDoc = null;

// Drop down function
$("#sort-dropdown-menu .dropdown-item").click(function(){
    $("#SortBy:first-child").text($(this).text());
    $("#SortBy:first-child").val($(this).text());
    
    clearTutor();
    latestDoc = null;
    window.location.href = "#submitsearch"; 

    var dropdownMenuButtonSelected = $(this).text();
    loadTutor(gState, gArea, gLevel, gSubject, gOnlineOnly, dropdownMenuButtonSelected);
    // window.location.href = "#submitsearch"; // After loading tutor, move down
    // document.querySelector('#submitsearch').scrollIntoView({
    //     behavior: 'smooth'
    //   });
    // $("#SortBy").scrollIntoView();
    // window.scroll({
    //     top: 10000, 
    //     left: 0, 
    //     behavior: 'smooth'
    // });
});

$(".SortBy").on('change', function(){
    alert($(this).text());
});

const dropdownMenuButton = document.querySelector('#SortBy');
dropdownMenuButton.style.visibility='hidden';
// const handleDropdownMenuClick = () =>{
    // loadTutor(gState, gArea, gLevel, gSubject, gOnlineOnly);
// }
// dropdownMenuButton.addEventListener('click', handleDropdownMenuClick );


// This section used in mainpage2.html
function loadTutor(gState, gArea, gLevel, gSubject, gOnlineOnly, orderBy="asc")
{
    let key = "fees";
    let dir = "asc";
    let startAfterConst = 999999; // A big magic number
    switch(orderBy) {
        case "Price Low to High":
            key = "fees";
            dir = "asc";
            startAfterConst = 0;
            break;
        case "Price High to Low":
            key = "fees";
            dir = "desc";
            startAfterConst = 999999;
            break;
        case "Highest Rated":
            key = "rating";
            dir = "desc";
            startAfterConst = 999999;
            break;
        default:
            key = "fees";
            dir = "asc";
            startAfterConst = 0;
    }
    console.log(key +"  "+ dir);

    if (gOnlineOnly)
    {
        //Firebase model: /country/malaysia/state/kuala lumpur/area/Bandar Tun Razak/category/preu/subject/eko/tutor
        var path = "country/malaysia/state/online/category/"+gLevel+"/subject/"+gSubject+"/tutor"
        var colRef = db.collection(path)
                        // .where(key, ">=", 0)
                        .orderBy(key, dir)
                        // .orderByChild('fees')
                        .startAfter(latestDoc || startAfterConst)
                        .limit(10);
        
        colRef
        .get()
        .then((querySnapshot) => {
            dropdownMenuButton.style.visibility='visible'; 
            // const documents = querySnapshot.docs.map(doc => doc.data());

            for (let i = 0; i < querySnapshot.docs.length; i++) {
                let doc = querySnapshot.docs[i];
                // console.log(doc.id, " => ", doc.data());
                // console.log("INDEX: " + i);
                renderTutor(doc, i);
            }

            // querySnapshot.docs.forEach(doc => {
            //     // renderData(doc);
            //     console.log(doc.id, " => ", doc.data());

            //     var a = documents.indexOf(doc);
            //     console.log("INDEX: " + a);

            //     renderTutor(doc);
            // }) ;

            // Update latest doc.
            latestDoc = querySnapshot.docs[querySnapshot.docs.length - 1];
            
            if (querySnapshot.empty){
                loadmore.removeEventListener('click', handleClick );
            }

            if (querySnapshot.docs.length < 10){
                loadmore.style.visibility='hidden';
            }else{
                loadmore.style.visibility='visible';
            }
        })
        .catch((error) => {
            
            dropdownMenuButton.style.visibility='hidden'; 

            console.log("Error getting documents: ", error);
        });
    }
    else{
        //Firebase model: /country/malaysia/state/kuala lumpur/area/Bandar Tun Razak/category/preu/subject/eko/tutor
        var path = "country/malaysia/state/"+gState+"/area/"+gArea+"/category/"+gLevel+"/subject/"+gSubject+"/tutor"
        var colRef = db.collection(path)
                        .orderBy(key, dir)
                        .startAfter(latestDoc || 0)
                        .limit(10);

        colRef
        .get()
        .then((querySnapshot) => {
            dropdownMenuButton.style.visibility='visible'; 

            for (let i = 0; i < querySnapshot.docs.length; i++) {
                let doc = querySnapshot.docs[i];
                // console.log(doc.id, " => ", doc.data());
                // console.log("INDEX: " + i);
                renderTutor(doc, i);
            }

            // querySnapshot.docs.forEach(doc => {
            //     // renderData(doc);
            //     console.log(doc.id, " => ", doc.data());
            //     renderTutor(doc);
            // }) 

           // Update latest doc.
           latestDoc = querySnapshot.docs[querySnapshot.docs.length - 1];
            
           if (querySnapshot.empty){
               loadmore.removeEventListener('click', handleClick );
           }

           if (querySnapshot.docs.length < 10){
               loadmore.style.visibility='hidden';
           }else{
               loadmore.style.visibility='visible';
           }
        })
        .catch((error) => {

            dropdownMenuButton.style.visibility='hidden'; 

            console.log("Error getting documents: ", error);
        });
    }
}

// Load More Button
const loadmore = document.querySelector('#loadmore');
loadmore.style.visibility='hidden';

const handleClick = () =>{
    // alert('Load more');
    loadTutor(gState, gArea, gLevel, gSubject, gOnlineOnly);
}
loadmore.addEventListener('click', handleClick );



// This js is used for Query tutor from GoLearn Firebase
function renderTutor(doc, index){

    // let li = document.createElement('li');
    // let name = document.createElement('span');
    // let city = document.createElement('span');

    // Upper Block Start
    // Upper Left Block Start


    let profile_image = document.createElement('img');
    profile_image.className = "profile-image";
    if (doc.data().imgUrl != null || doc.data().imgUrl != '' ){
        profile_image.src = doc.data().imgUrl;
    }
    else{
        if (doc.data().gender = 0){
            profile_image.src = "source/icon_boy01.png";
        }else{
            profile_image.src = "source/icon_girl01.png";
        }
    }
    let img_box =  document.createElement('div');
    img_box.className = "img-box";
    img_box.appendChild(profile_image);
    
    let icon_name = document.createElement('li');
    icon_name.className = "social-item";
    let icon_name_img = document.createElement('img');
    icon_name_img.className = "social-image";
    let icon_name_span = document.createElement('span');
    icon_name_span.className = "tooltiptext";
    if (doc.data().profileStatus[0] == true ){
        icon_name_img.src = "source/green-name-24.png";
        icon_name_span.textContent = "Profile VERIFIED";
    }
    else{
        icon_name_img.src = "source/black-name-24.png";
        icon_name_span.textContent = "Profile"
    }
    // icon_name_span.textContent = "Profile"
    icon_name.appendChild(icon_name_img);
    icon_name.appendChild(icon_name_span);

    let icon_phone = document.createElement('li');   
    icon_phone.className = "social-item";
    let icon_phone_img = document.createElement('img');
    icon_phone_img.className = "social-image";
    let icon_phone_span = document.createElement('span');
    icon_phone_span.className = "tooltiptext";
    if (doc.data().profileStatus[1] == true ){
        icon_phone_img.src = "source/green-iphone-24.png";
        icon_phone_span.textContent = "Phone VERIFIED";
    }
    else{
        icon_phone_img.src = "source/black-iphone-24.png";
        icon_phone_span.textContent = "Phone";
    }
    // icon_phone_span.textContent = "Phone"
    icon_phone.appendChild(icon_phone_img);
    icon_phone.appendChild(icon_phone_span);

    let icon_detail = document.createElement('li');
    icon_detail.className = "social-item";
    let icon_detail_img = document.createElement('img');
    icon_detail_img.className = "social-image";
    let icon_detail_span = document.createElement('span');
    icon_detail_span.className = "tooltiptext";
    if (doc.data().profileStatus[2] == true ){
        icon_detail_img.src = "source/green-view-details-24.png";
        icon_detail_span.textContent = "Qualification VERIFIED"
    }
    else{
        icon_detail_img.src = "source/black-view-details-24.png";
        icon_detail_span.textContent = "Qualification"
    }
    // icon_detail_span.textContent = "Qualification"
    icon_detail.appendChild(icon_detail_img);
    icon_detail.appendChild(icon_detail_span);

    let icon_location = document.createElement('li');
    icon_location.className = "social-item";
    let icon_location_img = document.createElement('img');
    icon_location_img.className = "social-image";
    let icon_location_span = document.createElement('span');
    icon_location_span.className = "tooltiptext";
    if (doc.data().profileStatus[3] == true ){
        icon_location_img.src = "source/green-marker-24.png";
        icon_location_span.textContent = "Location VERIFIED"
    }
    else{
        icon_location_img.src = "source/black-marker-24.png";
        icon_location_span.textContent = "Location"
    }
    // icon_location_span.textContent = "Location"
    icon_location.appendChild(icon_location_img);
    icon_location.appendChild(icon_location_span);

    let fa_star = document.createElement('span');
    fa_star.className = "fa fa-star fa-1.5x checked";
    let rating_font = document.createElement('span');
    rating_font.className = "rating_font";
    rating = Math.round(doc.data().rating / doc.data().ratingTimes);
    let review = document.createElement('p');
    review.className = "review";
    if (doc.data().ratingTimes == 0){
        rating_font.textContent = " Not Rated";
        // Skip review row
    }else if (doc.data().ratingTimes == 1){
        rating_font.textContent = " "+rating;
        review.textContent = doc.data().ratingTimes + "review";
    }else{
        rating_font.textContent = " "+rating;
        review.textContent = doc.data().ratingTimes + "reviews";
    } 
    
    let social_list = document.createElement('ul');    
    social_list.className = "social-list";
    social_list.appendChild(icon_name);
    social_list.appendChild(icon_phone);
    social_list.appendChild(icon_detail);
    social_list.appendChild(icon_location);
    // Upper Left Block End
    // Upper Right Block Start


    // Upper Right Block End

    let profile_sidebar = document.createElement('div');
    profile_sidebar.className = "profile-sidebar";
    profile_sidebar.appendChild(img_box);
    profile_sidebar.appendChild(social_list);
    profile_sidebar.appendChild(fa_star);
    profile_sidebar.appendChild(rating_font);
    profile_sidebar.appendChild(review);


    let profile_name = document.createElement('h2');
    profile_name.className = "profile-name";
    profile_name.textContent = doc.data().name;
    let profile_detail = document.createElement('p');
    profile_detail.className = "profile-detail";
    // Female | 24 | 2 yr of experience
    let gender = (doc.data().gender == 0 ) ? "Male" : "Female";
    let age = doc.data().age;
    let exp = doc.data().yearsExperience;
    let detail = "";
    if (exp == null || exp == 0){
        // No exp
        detail = gender + " | " + age;
    }else if (exp == 1){
        detail = gender + " | " + age + " |  1 year of experience";
    }else{ 
        detail = gender + " | " + age + " | "+ exp + " years of experience";
    }

    profile_detail.textContent = detail;
    let profile_education = document.createElement('p');
    profile_education.className = "profile-education";
    profile_education.textContent = doc.data().qualification;
    let profile_area = document.createElement('p');
    profile_area.className = "profile-area";

    // Todo: make it readable
    profile_area.textContent = doc.data().preferedAreaList;
    let profile_subject = document.createElement('p');
    profile_subject.className = "profile-subject";
    profile_subject.textContent = doc.data().preferedSubjectList;
    let profile_experience = document.createElement('p');
    profile_experience.className = "profile-experience";
    profile_experience.textContent = doc.data().tutoringApproach;

    let profile_main = document.createElement('div');
    profile_main.className = "profile-main";
    profile_main.appendChild(profile_name);
    profile_main.appendChild(profile_detail);
    profile_main.appendChild(profile_education);
    profile_main.appendChild(profile_area);
    profile_main.appendChild(profile_subject);
    profile_main.appendChild(profile_experience);

    let card = document.createElement('div');
    card.className = "card";
    card.appendChild(profile_sidebar);
    card.appendChild(profile_main);
    // Upper Block End
    // Lower Block Start

    let selecttutor = document.createElement('a');
    selecttutor.className = "btn btn-success btn-lg btn-block";
    selecttutor.setAttribute("id", "selecttutor");
    selecttutor.setAttribute("role", "button");
    selecttutor.setAttribute("target", "_blank");
    // https://golearn.com.my/enquire-tutor/?subject=Bahasa%20Melayu&tutor_name=Tang%20Ai%20Ying&level=SPM&area=Cheras&state=Selangor&stop=%2E&type=online
    // I want to request {get:tutor_name} to be my {get:type} tutor for {get:level} {get:subject}{get:stop} {get:area}{get:areastop} {get:state}
    let tutor_name = encodeURIComponent(doc.data().name);
    let type = gOnlineOnly? 'online': 'home';
    let level = encodeURIComponent(gLevelName);
    let subject = encodeURIComponent(gSubjectName);
    let stop =  gOnlineOnly? '': encodeURIComponent(" at");
    let area = gOnlineOnly? '': encodeURIComponent(gArea);
    let areastop = gOnlineOnly? '': encodeURIComponent(",");
    let state = gOnlineOnly? '': encodeURIComponent(gStateName);
    let finalUri = "https://golearn.com.my/enquire-tutor/?tutor_name="+tutor_name+"&type="+type+"&level="+level+"&subject="+subject+"&stop="+stop+"&area="+area+"&areastop="+areastop+"&state="+state ;
    console.log(finalUri);
    selecttutor.href = finalUri;
    // selecttutor.setAttribute("href", res);
    selecttutor.textContent = "Request Now";

    // let button = document.createElement('button');
    // button.className = "btn btn-success btn-lg btn-block";
    // button.setAttribute("id", "selecttutor");
    // button.setAttribute("type", "button");
    // button.textContent = "Request now";

    let finalFee = calculateMonthlyFee(doc.data().fees, doc.data().feesType);
    // let profile_fee_raw = document.createElement('span');
    // profile_fee_raw.textContent = "RM" + finalFee.fees;
    let blogsHtml = '';
    // blogsHtml += "<p class='profile-fee'><span class='profile-fee-bold'>RM"+ finalFee +"</span> /month </p>";
    blogsHtml += "<span class='profile-fee-bold'>RM"+ finalFee +"</span>/month";

    let profile_fee = document.createElement('p');
    profile_fee.className = "profile-fee";
    profile_fee.innerHTML = blogsHtml;
    // let profile_fee = document.createElement('p');
    // profile_fee.className = "profile-fee";
    // profile_fee.textContent = "<span>RM"+ finalFee.toFixed(2) +"</span>/month";
    // profile_fee.textContent = "<span>RM"+ finalFee.toFixed(2) +"</span>/month";
    // profile_fee.appendChild(profile_fee_raw + "/month" );

    let tooltiptext_profile_fee = document.createElement('span');
    tooltiptext_profile_fee.className = "tooltiptext-profile-fee";
    tooltiptext_profile_fee.textContent = "Assuming 2 hours per lesson, 4 lessons in a month";

    let fee_item = document.createElement('div');
    fee_item.className = "fee-item";

    let col_sm1 = document.createElement('div');
    if (doc.data().feesType == "Per Hour"){

        fee_item.appendChild(profile_fee);
        fee_item.appendChild(tooltiptext_profile_fee);

        let profile_fee_hourly_rate = document.createElement('p');
        profile_fee_hourly_rate.className = "profile-fee-hourly-rate";
        profile_fee_hourly_rate.textContent = "(RM"+doc.data().fees+"/hour)";

        col_sm1.className = "col-sm";
        col_sm1.appendChild(fee_item);
        col_sm1.appendChild(profile_fee_hourly_rate);
    }else{

        fee_item.appendChild(profile_fee); // Remove tooltips
        // Per Month - Do not create this 
        col_sm1.className = "col-sm";
        col_sm1.appendChild(fee_item);
    }


    let col_sm2 = document.createElement('div');
    col_sm2.className = "col-sm";
    let col_sm3 = document.createElement('div');
    col_sm3.className = "col-sm";
    col_sm3.appendChild(selecttutor);

    let row = document.createElement('div');
    row.className = "row";
    row.appendChild(col_sm1);
    row.appendChild(col_sm2);
    row.appendChild(col_sm3);

    let container = document.createElement('div');
    container.className = "container";
    container.appendChild(row);

    let footer = document.createElement('div');
    footer.className = "footer";
    footer.appendChild(container);
    // Lower Right End

    let tutor_card = document.createElement('div');
    tutor_card.className = "tutor-card";
    tutor_card.setAttribute('id', "tutor-card");
    tutor_card.appendChild(card);
    tutor_card.appendChild(footer);

    // -------ADS 1-----
    let requestnow_text= document.createElement('h3');
    requestnow_text.className = "d-flex justify-content-center";
    if(index == 4)
        requestnow_text.textContent = "Hard to decide? Let us help you.";
    else if (index == 9)
        requestnow_text.textContent = "Get the best offer from us!";
    let requestnow_text_div = document.createElement('div');
    requestnow_text_div.className = "col-md-8 col-sm-8 mx-3";
    requestnow_text_div.setAttribute('id', "heading");
    requestnow_text_div.appendChild(requestnow_text);

    let requestnow_btn = document.createElement('a');
    requestnow_btn.className = "btn btn-warning btn-block bg-light active";
    requestnow_btn.href = "https://golearn.com.my/request-a-tutor/";
    requestnow_btn.setAttribute('role', "button");
    requestnow_btn.setAttribute('id', "requestnow-btn");
    requestnow_btn.setAttribute('target', "_blank");
    requestnow_btn.textContent = "Find Now";
    let requestnow_div = document.createElement('div');
    requestnow_div.className = "col-md-3 col-sm-3 mx-3";
    requestnow_div.appendChild(requestnow_btn);

    let requestnow_unused_div = document.createElement('div');
    requestnow_unused_div.className = "col-md-1 col-sm-1";

    let heading_full_length = document.createElement('div');
    heading_full_length.className = "row";
    heading_full_length.setAttribute('id', "heading-full-length");
    heading_full_length.appendChild(requestnow_text_div);
    heading_full_length.appendChild(requestnow_div);
    heading_full_length.appendChild(requestnow_unused_div);


    const tutorFullList = document.querySelector('#tutor-list');
    if(index == 4 || index == 9){
        tutorFullList.appendChild(tutor_card);
        tutorFullList.appendChild(heading_full_length);
    }
    else{
        tutorFullList.appendChild(tutor_card);
    }
    

    // let tutor_listing_block = document.createElement('div');
    // tutor_listing_block.className = "tutor-listing-block";
    // tutor_listing_block.setAttribute('id', "tutor-listing-block");
    // tutor_listing_block.appendChild(tutor_card);

    // const tutorFullList = document.querySelector('#tutor-list');
    // tutorFullList.appendChild(tutor_listing_block);

}

function calculateMonthlyFee(inputPrice, inputFeesType) {
    var inputFinalPrice = 0;
    if (inputFeesType == "Per Month"){ // Per month
        inputFinalPrice= inputPrice;
    } else { // Per hours
        inputFinalPrice= inputPrice * 2  * 4; //2hr/class, 4 weeks in a month
    }
    return inputFinalPrice

}

function clearTutor(){
    var tutor_list = document.getElementById("tutor-list").childNodes;
    try {
        for(var i=tutor_list.length-1;i >= 0;i--){
            var childNode = tutor_list[i];
            childNode.parentNode.removeChild(childNode);
         }
    }
    catch(err) {
         console.log("No tutor list created yet");
    }
}
// ------ Scro'' to Top -----//

//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}








