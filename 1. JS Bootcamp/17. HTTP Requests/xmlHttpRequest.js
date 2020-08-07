// SINGLE REQUEST SEND TO URL USING XMLHttpRequest

/* const firstReq = new XMLHttpRequest();
firstReq.addEventListener("load", function () {
  console.log("IT WORKED!!!");
  const data = JSON.parse(this.responseText);
  for (let planet of data.results) {
    console.log(planet.name);
  }
});
firstReq.addEventListener("error", function () {
  console.log("ERROR!!!!");
});
firstReq.open("GET", "https://swapi.dev/api/planets/");
firstReq.send(); */

// CHAINING OF REQUESTS

const firstReq = new XMLHttpRequest();
firstReq.addEventListener("load", function () {
  console.log("First Request WORKED!!!");
  const data = JSON.parse(this.responseText);
  const filmURL = data.results[0].films[0];
  const filmReq = new XMLHttpRequest();
  filmReq.addEventListener("load", function () {
    console.log("Second Request WORKED!!!");
    const filmData = JSON.parse(this.responseText);
    console.log(filmData);
  });
  filmReq.addEventListener("error", function () {
    console.log("Second Request ERROR!!!!");
  });
  filmReq.open("GET", filmURL);
  filmReq.send();
});
firstReq.addEventListener("error", function () {
  console.log("First Request  ERROR!!!!");
});
firstReq.open("GET", "https://swapi.dev/api/planets/");
firstReq.send();
