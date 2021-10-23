// This js is used for common functionality

$("#btn-login").click(function(){
    var email = $("#email").val();
	console.log(email)
    var password = $("#password").val();
	console.log(password)
    if (email != "" && password != ""){
        var result = firebase.auth().signInWithEmailAndPassword(email, password);

        result.catch(function(error){
            var errorCode = error.code;
            var errorMessage = error.message;

            console.log(errorCode);
            console.log(errorMessage);
            alert("Message : ", errorMessage);
        })
    }else{
        alert("Please fill out all fields : ");
    }
})

$("#btn-logout").click(function(){
    firebase.auth().signOut().then(() => {
        // Sign-out successful.
        window.alert("Logging out successfull");
      }).catch((error) => {
        // An error happened.
        window.alert("LOgging out failed");
      });
})

$("#btn-resetpassword").click(function(){
    var auth = firebase.auth();
    var email = $("#email").val();
    window.alert("Reset password has been sent to: ", email);

    if (email != ""){
        firebase.auth().sendPasswordResetEmail(email).then(function(){
            window.alert("Reset password has been sent to: ", email);
        }).catch(function(error){
            var errorCode = error.code;
            var errorMessage = error.message;

            window.alert("Reset password failed", errorMessage);        
        });
    }else  {
        window.alert("Please enter your email address");
    }

})

$("#btn-signup").click(function(){
    var email = $("#email").val();
    var password = $("#password").val();
    var confirmpassword = $("#confirmpassword").val();
    if (password == confirmpassword){
        if (email != "" && password != "" && confirmpassword != ""){
            var result = firebase.auth().createUserWithEmailAndPassword(email, password);
    
            result.catch(function(error){
                var errorCode = error.code;
                var errorMessage = error.message;
    
                console.log(errorCode);
                console.log(errorMessage);
                window.alert("Message : ", errorMessage);
            })
        }
        else{
            window.alert("Please fill out all fields : ");
        }
    }else{
        window.alert("Password does not match");
        
    }
})


$("#btn-update").click(function(){
    var firstName = $("#firstName").val();
    var lastName = $("#lastName").val();
    var phone = $("#phone").val();
    var address = $("#address").val();
    var about = $("#about").val();
    var gender = $("#gender").val();
    var country = $("#country").val();

    var rootRef = firebase.database().ref().child("testUser")
    var userId = firebase.auth().currentUser.uid;
    var userRef = rootRef.child(userId);

    if(firstName != "" && 
    lastName != "" &&
    phone != "" && 
    gender != "" &&
    country != "" ){
        var userData = 
        {
            "firstName": firstName,
            "lastName": lastName,
            "phone": phone,
            "address": address,
            "about": about,
            "gender": gender,
            "country": country
        };
        userRef.set(userData, function(error){
            if(error){
                var errorCode = error.code;
                var errorMessage = error.message;
    
                console.log(errorCode);
                console.log(errorMessage);
                // window.alert("Update Failed : ", errorMessage);
            }
            else{
                window.location.href = "mainpage.html"
                // window.alert("Update Success : ", errorMessage);
            }
        });
    }else{

        window.alert("Form is incomplete.")
    }
})





var validImagetypes = ["image/gif", "image/jpeg", "image/png", "image/gif", ]

$("#selected-image").hide();

function previewImage(image_blog){
    if(image_blog.files && image_blog.files[0]){
        var reader = new FileReader();
        reader.onload = function(e){
            $("#selected-image").attr('src', e.target.result);
            $("#selected-image").fadeIn;
        }

        reader.readAsDataURL(image_blog.files[0]);
        $("#selected-image").show();
    }


}

$("#main-image").change(function(){
    previewImage(this);
});

$("#save-blog").click(function(){
    $("#main-desc").removeClass("is-invalid");
    $("#main-image").removeClass("is-invalid");

    var desc = $("#main-desc").val();
    var picture = $("#main-image").prop("files")[0];

    if(!desc){
        $("#main-desc").addClass("is-invalid");
        return
    }

    if(picture == null){
        $("#main-image").addClass("is-invalid");
        return;
    }

    if($.inArray(picture["type"], validImagetypes)< 0 ){
        $("#main-image").addClass("is-invalid");
        return;
    }
    // ---------------Upload and Save to Firebase Start ---------------//
    var databaseRef = firebase.database().ref().child("Blogs")
    databaseRef.once('value').then(function(snapshot){
        var name = picture["name"];
        var dateStr = new Date().getTime();
        var fileCompleteName = name + "_" + dateStr;

        var storageRef = firebase.storage().ref("Blog Images");
        var blogStorageRef = storageRef.child(fileCompleteName);

        var uploadTask = blogStorageRef.put(picture);

        uploadTask.on
        (   
            "state_changed", 
            function progress(snapshot){
                var percentage = (snapshot.bytesTransferred / snapshot.totalBytes)*100
                $("#upload-progress").html(Math.round(percentage)+"%");
                $("#upload-progress").attr("style", "width:" + percentage + "%");

            },
            function error(err){

            },
            function complete(){
                var user = firebase.auth().currentUser;
                var userName;
                firebase.database().ref('Users/' + user.uid).once('value').then(function(snapshot){
                    var firstName = (snapshot.val() && snapshot.val().firstName);
                    var lastName = (snapshot.val() && snapshot.val().lastName);

                    userName = firstName + " " + lastName;
                });
                uploadTask.snapshot.ref.getDownloadURL().then(function(downloadUrl){
                    var time = new Date();
                    var option = {
                        weekday: "long",
                        month: "long",
                        day: "2-digit",
                        year: "numeric",
                    };

                    var blogData = {
                        "image" : downloadUrl,
                        "name": fileCompleteName,
                        "desc": desc,
                        "uid": user.uid,
                        "counter": counter,
                        "username": userName,
                        "time": time.toLocaleString("en-US", {hour: 'numeric', minute: 'numeric', hour12: true}),
                        "date":time.toLocaleDateString("en-US", option)
                    };
                    // var rootRef = firebase.database().ref().child("testUser")
                    // var userId = firebase.auth().currentUser.uid;
                    // var userRef = rootRef.child(userId);


                    var newPostRef = databaseRef.push();
                    newPostRef.set(blogData, function(err){
                        if(err){
                            $("#result").attr("class", "alert alert-danger");
                            $("#result").html("Upload Failed");
                            // $("#result").html(err.message);

                        }else{
                            $("#result").attr("class", "alert alert-success");
                            $("#result").html("Blog has been uploaded successfully");

                            window.open("", "_self");
                        }   
                        
                        // Once we uploaded, clear the form
                        resetForm();
                    })
                })


            }
        );
    });
// ---------------Upload and Save to Firebase ---------------//

});

function resetForm(){
    $("#main-form")[0].reset();
    $("#selected-image").hide();
    $("#upload-progress").html("Completed");

}


// Run once when page load
var dbBlogs = firebase.database().ref().child("Blogs").orderByChild("counter");

dbBlogs.on("value", function(blogs)
{
    if(blogs.exists())
    {
        var blogsHtml = "";

        blogs.forEach(function(singleBlog)
        {
            counter = counter + 1;
            blogsHtml += "<div class='jumbotron bg-light text-dark border border-dark'>";
                blogsHtml += "<div><img width='1000px' height='550px' src='";
                    blogsHtml += singleBlog.val().image;
                blogsHtml += "'/></div><br>";

                blogsHtml += "<div class='row'>";
                    blogsHtml += "<div class='col-sm-5'><p style='color:grey;'>"
                                + "Published by: " + singleBlog.val().username    
                                + "</p></div>" +

                                "<div class='col-sm-3'><p style='color:grey;'>"
                                + "Time by: " + singleBlog.val().time  
                                + "</p></div>" +

                                "<div class='col-sm-4'><p style='color:grey;'>"
                                + "Date by: " + singleBlog.val().date    
                                + "</p></div>"
                                ;
                blogsHtml += "</div><br>";


                blogsHtml += "<div style='text-align: justify; color: black;'>";
                    blogsHtml += singleBlog.val().desc;
                blogsHtml += "</div><br>";

                
                blogsHtml += "<div class='form-group' style='text-align: justify; color: black;'>";
                    blogsHtml += "<button class='form-control btn btn-light bg-dark text-white' onclick=deleteblogRecord('"+singleBlog.key+"')>Remove</button>"
                blogsHtml += "</div><br>";

            blogsHtml += "</div>";
        });
        $("#blogs").html(blogsHtml);

    }
});

function deleteblogRecord(key)
{
    var deleteRef = firebase.database().ref().child("Blogs").child(key);
    
    return deleteRef.remove()
    .then(function()
    {
        console.log("Remove success");
    })
    .catch(function()
    {
        console.log("Remove failed");
    });
}

// ---------------Retrieve and Display from Firebase End---------------//







