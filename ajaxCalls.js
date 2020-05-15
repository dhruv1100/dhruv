// this ajax call for Register...
function postDatatoDataBaseRegister(myData) {
    var url = "https://sabiobootcampapi.azurewebsites.net/api/users/register";


    var settings = {
        cache: false,
        contentType: "application/json; charset=UTF-8",
        data: JSON.stringify(myData),
        dataType: "json",
        type: "POST",
        headers: { "SABIO-AUTH": "SA-1391-AAA" }

    };
    return $.ajax(url, settings);
};

// this ajax call for Login...
function postDatatoDataBase() {
    var url = "https://sabiobootcampapi.azurewebsites.net/api/users/login";

    var settings = {
        cache: false,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        data: {
            Email: $("#exampleInputEmail1").val(),
            Password: $("#exampleInputPassword1").val()
        },
        dataType: "json",
        type: "POST",
        headers: { "SABIO-AUTH": "SA-1391-AAA" },
        xhrFields: {
            withCredentials: true
        },
    };
    return $.ajax(url, settings);
};

// this ajax call for homePage to get current Auth...
function getAuth() {
    var url = "https://sabiobootcampapi.azurewebsites.net/api/tests/auth/current";
    var settings = {
        type: "GET",
        cache: false,
        dataType: "json",
        contentType: "application/json; charset=UTF-8",
        headers: { "SABIO-AUTH": "SA-1391-AAA" },
        xhrFields: { withCredentials: true }
    };
    return $.ajax(url, settings);
}

// this ajax call for logOut...
function logOutUsers() {
    var url = "https://sabiobootcampapi.azurewebsites.net/api/users/logout";
    var settings = {
        type: "GET",
        cache: false,
        dataType: "json",
        contentType: "application/json; charset=UTF-8",
        headers: { "SABIO-AUTH": "SA-1391-AAA" },
        xhrFields: { withCredentials: true }
    };
    return $.ajax(url, settings);
};

//  this  
