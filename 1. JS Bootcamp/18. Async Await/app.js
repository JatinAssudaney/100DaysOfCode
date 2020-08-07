// BASIC FUNCTIONALITY

async function getPlanets() {
  const res = await axios.get("https://swapi.dev/api/planets/");
  console.log(res.data);
}

// ERROR HANDELING
async function getPlanets() {
  try {
    const res = await axios.get("https://swapi.dev/api/planets/");
    console.log(res.data);
  } catch (error) {
    console.log("IN CATCH!!!!", error);
  }
}
getPlanets();

// MULTIPLE REQUESTS HANDELING
async function getPlanets() {
  const p1 = await axios.get("https://swapi.dev/api/planets/?page=1");
  const p2 = await axios.get("https://swapi.dev/api/planets/?page=2");
  const p3 = await axios.get("https://swapi.dev/api/planets/?page=3");
  const p4 = await axios.get("https://swapi.dev/api/planets/?page=4");
  console.log(p1);
  console.log(p2);
  console.log(p3);
  console.log(p4);
}
