// AXIOS GLOBALS
axios.defaults.headers.common["X-Auth-Token"] =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";

// GET REQUEST
async function getTodos() {
  // METHOD 1
  /* axios({
    method: "get",
    url: "https://jsonplaceholder.typicode.com/todos",
    params: {
      _limit: 5,
    },
  })
    .then((res) => showOutput(res))
    .catch((err) => console.error(err)); */

  // METHOD 2
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/todos", {
      params: { _limit: 5 },
    });
    showOutput(res);
  } catch (error) {
    console.error(error);
  }
}

// POST REQUEST
async function addTodo() {
  // METHOD 1
  /* axios({
    method: "post",
    url: "https://jsonplaceholder.typicode.com/todos",
    data: {
      title: "New Todo",
      completed: false,
    },
  })
    .then((res) => showOutput(res))
    .catch((err) => console.error(err)); */

  // METHOD 2
  try {
    const res = await axios.post("https://jsonplaceholder.typicode.com/todos", {
      title: "New Todo",
      completed: false,
    });
    showOutput(res);
  } catch (error) {
    console.error(error);
  }
}

// PUT/PATCH REQUEST
async function updateTodo() {
  // PUT
  /* try {
    const res = await axios.put(
      "https://jsonplaceholder.typicode.com/todos/1",
      {
        title: "Updated Todo",
        completed: true,
      }
    );
    showOutput(res);
  } catch (error) {
    console.error(error);
  } */

  // PATCH
  try {
    const res = await axios.patch(
      "https://jsonplaceholder.typicode.com/todos/1",
      {
        title: "Updated Todo",
        completed: true,
      }
    );
    showOutput(res);
  } catch (error) {
    console.error(error);
  }
}

// DELETE REQUEST
async function removeTodo() {
  try {
    const res = await axios.delete(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    showOutput(res);
  } catch (error) {
    console.error(error);
  }
}

// SIMULTANEOUS DATA
async function getData() {
  try {
    const [todos, posts] = await axios.all([
      axios.get("https://jsonplaceholder.typicode.com/todos"),
      axios.get("https://jsonplaceholder.typicode.com/posts"),
    ]);
    // res[0] -> todos list
    // res[1] -> posts list
    showOutput(posts);
  } catch (error) {
    console.error(error);
  }
}

// CUSTOM HEADERS
async function customHeaders() {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: "sometoken",
    },
  };
  try {
    const res = await axios.post(
      "https://jsonplaceholder.typicode.com/todos",
      {
        title: "New Todo",
        completed: false,
      },
      config
    );
    showOutput(res);
  } catch (error) {
    console.error(error);
  }
}

// TRANSFORMING REQUESTS & RESPONSES
async function transformResponse() {
  const options = {
    method: "post",
    url: "https://jsonplaceholder.typicode.com/todos",
    data: {
      title: "Hello World",
    },
    transformResponse: axios.defaults.transformResponse.concat((data) => {
      data.title = data.title.toUpperCase();
      return data;
    }),
  };
  const res = await axios(options);
  showOutput(res);
}

// ERROR HANDLING
async function errorHandling() {
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/todoss");
    showOutput(res);
  } catch (error) {
    if (error.response) {
      // Server Responded with a status other than in 200 range
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (err.request) {
      // Request was made but got no response
      console.error(err.request);
    } else {
      console.error(err.message);
    }
  }
}

// CANCEL TOKEN
function cancelToken() {
  console.log("Cancel Token");
}

// INTERCEPTING REQUESTS & RESPONSES
axios.interceptors.request.use(
  (config) => {
    const time = `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`;
    console.log(
      `${config.method.toUpperCase()} request sent to ${config.url} at ${time}`
    );
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// AXIOS INSTANCES

// Show output in browser
function showOutput(res) {
  document.getElementById("res").innerHTML = `
  <div class="card card-body mb-4">
    <h5>Status: ${res.status}</h5>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Headers
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.headers, null, 2)}</pre>
    </div>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Data
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.data, null, 2)}</pre>
    </div>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Config
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.config, null, 2)}</pre>
    </div>
  </div>
`;
}

// Event listeners
document.getElementById("get").addEventListener("click", getTodos);
document.getElementById("post").addEventListener("click", addTodo);
document.getElementById("update").addEventListener("click", updateTodo);
document.getElementById("delete").addEventListener("click", removeTodo);
document.getElementById("sim").addEventListener("click", getData);
document.getElementById("headers").addEventListener("click", customHeaders);
document
  .getElementById("transform")
  .addEventListener("click", transformResponse);
document.getElementById("error").addEventListener("click", errorHandling);
document.getElementById("cancel").addEventListener("click", cancelToken);
