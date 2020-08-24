$(document).ready(function() {
    $('#RegisterForm').on('submit', function(event) {
        event.preventDefault();
        var form_data = $(this).serialize();
        $.ajax({
            url: "SomeThing/UserRequests.php",
            method: "POST",
            data: form_data,
            success: function(data) {
                if (data == "1") {
                    alert("Thanks for Registering");
                    window.location.assign('SomeThing/BasicVerification.php');
                } else if (data == "2") {
                    alert("You are already Registered");
                    window.location.assign("login.php");
                } else { alert("Some Error Occured"); }
            }
        });
    });
    $('#ModalRegister').on('submit', function(event) {
        event.preventDefault();
        var form_data = $(this).serialize();
        $.ajax({
            url: "SomeThing/UserRequests.php",
            method: "POST",
            data: form_data,
            success: function(data) {
                if (data == "1") {
                    alert("Thanks for Registering");
                    window.location.assign('SomeThing/BasicVerification.php');
                } else if (data == "2") {
                    alert("You are already Registered");
                    window.location.assign("login.php");
                } else { alert("Some Error Occured"); }
            }
        });
    });
    $('#ModalLogin').on('submit', function() {
        event.preventDefault();
        var form_data = $(this).serialize();
        $.ajax({
            url: "SomeThing/UserRequests.php",
            method: "POST",
            data: form_data,
            dataType: "JSON",
            success: function(data) {
                if (data.Status == 10) {
                    alert("You are NOT registered");
                    window.location.assign(data.URL);
                } else if (data.Status == 1) { window.location.assign(data.URL); } else if (data.Status == 2) { window.location.assign(data.URL); } else if (data.Status == 3) { alert(data.URL); } else if (data.Status == 51) { alert(data.URL); } else { alert("Some Error Occured"); }
            }
        });
    });
    $('#CallRequest').on('submit', function(event) {
        event.preventDefault();
        var form_data = $(this).serialize();
        $.ajax({
            url: "SomeThing/UserRequests.php",
            method: "POST",
            data: form_data,
            success: function(data) {
                if (data == "100") { alert("Your request has been Submitted"); } else { alert("Your request failed"); }
            }
        });
    });
    $('#ModalForget').on('submit', function(event) {
        event.preventDefault();
        var form_data = $(this).serialize();
        $.ajax({
            url: "SomeThing/UserRequests.php",
            method: "POST",
            data: form_data,
            success: function(data) {
                if (data == "100") {
                    alert("Your will receive your Password on Registered Email and Mobile");
                    window.location.reload();
                } else if (data == "200") { alert("Your request failed"); }
            }
        });
    });
});
var person = { Name: "", userID: "", accessToken: "", email: "" };

function LogIn() {
    FB.login(function(response) {
        if (response.status == "connected") {
            person.userID = response.authResponse.userID;
            person.email = response.authResponse.email;
            person.accessToken = response.authResponse.accessToken;
            FB.api('/me?fields=id,name,email', function(userData) {
                person.name = userData.name;
                person.email = userData.email;
                person.id = userData.id;
                if (person.accessToken != "") {
                    $.ajax({
                        url: "SomeThing/UserRequests.php",
                        type: 'POST',
                        data: { "AccessToken": person.accessToken, "ID": person.id, "Name": person.name, "email": person.email, "Meth": 3 },
                        success: function(data) {
                            if (data == "1") {
                                alert("Thanks for Registering");
                                window.location.assign('SomeThing/SocialVerification.php');
                            } else if (data == "2") {
                                alert("You are already Registered");
                                window.location.assign("login.php");
                            } else {
                                alert("Some Error Occured");
                                location.reload(true);
                            }
                        }
                    });
                }
            })
        }
    }, { scope: 'public_profile, email' })
}
window.fbAsyncInit = function() {
    FB.init({ appId: '920016635057254', cookie: true, xfbml: true, version: 'v3.3' });
    FB.AppEvents.logPageView();
};
(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) { return; }
    js = d.createElement(s);
    js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));