// this ajax call to get all blogs
function getblogs() {
    var url = "https://sabiobootcampapi.azurewebsites.net/api/blogs?pageIndex=0&pageSize=25";
    var settings = {
        cache: false,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        type: "GET",
        xhrFields: {
            withCredentials: true
        },

    }
    return $.ajax(url, settings);
}

//this ajax call for add blogs
function addBlogs(myData) {
    var url = "https://sabiobootcampapi.azurewebsites.net/api/blogs";
    var settings = {
        cache: false,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        type: "POST",
        data: JSON.stringify(myData),
        xhrFields: {
            withCredentials: true
        },


    }
    return $.ajax(url, settings);
} 