/* 
axios
  .get("https://swapi.dev/api/planets/")
  .then((res) => {
    console.log(res.data);
  })
  .catch((err) => {
    console.log("INSIDE CATCH");
    console.log(err);
  });
 */
//   CHAINING OF REQUESTS

axios
  .get("https://swapi.dev/api/planets/")
  .then(({ data }) => {
    for (let planet of data.planets) {
      console.log(planet.name);
    }
    return axios.get(data.next);
  })
  .then(({ data }) => {
    for (let planet of data.planets) {
      console.log(planet.name);
    }
  })
  .catch((err) => {
    console.log("INSIDE CATCH");
    console.log(err);
  });
