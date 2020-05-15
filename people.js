var services = { authors: {} };

services.getPeopleUrl =
  "https://sabiobootcampapi.azurewebsites.net/api/people?pageIndex=0&pageSize=100";

services.authors.getPeople = () => {
  var settings = {
    type: "GET",
    headers: {
      "Sabio-auth": "SA-1391-AAA"
    },
    cache: false,
    dataType: "json",
    xhrFields: {
      withCredentials: true
    },

    contentType: "application/jason; charset=utf-8"
  };
  return $.ajax(services.getPeopleUrl, settings);
};

services.authors.postModaldata = (myData) => {
  var url = "https://sabiobootcampapi.azurewebsites.net/api/people";

  var settings = {
    type: "POST",
    headers: {
      "Sabio-auth": "SA-1391-AAA"
    },
    cache: false,
    data: JSON.stringify(myData),
    dataType: "json",
    contentType: "application/json; charset=utf-8",
    xhrFields: {
      withCredentials: true
    },
  };
  return $.ajax(url, settings);
};

services.authors.editModalData = (id, myData) => {
  var url = `https://sabiobootcampapi.azurewebsites.net/api/people/${id}`;

  var settings = {
    cache: false,
    contentType: "application/json; charset=UTF-8",
    data: JSON.stringify(myData),
    dataType: "json",
    type: "PUT",
    headers: { "SABIO-AUTH": "SA-1391-AAA" },
    xhrFields: {
      withCredentials: true
    },
  };
  return $.ajax(url, settings).then(function () {
    return myData;
  });
}
