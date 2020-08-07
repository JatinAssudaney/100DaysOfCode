// SINGLE REQUEST SEND TO URL USING FETCH

/* fetch("https://swapi.dev/api/planets/")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Status Not 200 ${response.status}`);
    }
    response.json().then((data) => {
      for (let planet of data.results) {
        console.log(planet.name);
      }
    });
  })
  .catch((err) => {
    console.log("Something Went WRONG");
    console.log(err);
  });
 */

// CHAINING OF REQUESTS
/* 
fetch("https://swapi.dev/api/planets/")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Status Not 200 ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    const filmURL = data.results[0].films[0];
    return fetch(filmURL);
  })
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Status Not 200 ${response.status}`);
    }
    return response.json();
  })
  .then((filmData) => {
    console.log(filmData.title);
  })
  .catch((err) => {
    console.log("Something Went WRONG");
    console.log(err);
  }); 
*/

//   REFACTORED FETCHING
const checkStatus = (response) => {
  if (!response.ok) {
    throw new Error(`Status Not 200 ${response.status}`);
  }
  return response.json();
};
const printPlanets = (data) => {
  for (let planet of data.results) {
    console.log(planet.name);
  }
  //   NEEDS TO RETURN PROMISE FOR CHAINING .then()
  return Promise.resolve(data.next);
  //   data.next contains url for next 10 planets
};
const fetchNext = (url = "https://swapi.dev/api/planets/") => {
  return fetch(url);
};
fetchNext()
  .then(checkStatus)
  .then(printPlanets)
  .then(fetchNext)
  .then(checkStatus)
  .then(printPlanets)
  .catch((err) => {
    console.log("Something Went WRONG");
    console.log(err);
  });
