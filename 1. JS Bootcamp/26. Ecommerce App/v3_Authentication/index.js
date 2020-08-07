const express = require("express");
const bodyParser = require("body-parser");
const usersRepo = require("./repositories/users");
const cookieSession = require("cookie-session");
const { response } = require("express");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ["abfjahauh3y83"] }));

// ROUTE HANDLER
app.get("/signup", (req, res) => {
  res.send(`
    <div>
      <form method="POST">
        <input name="email" placeholder="email" />
        <input name="password" placeholder="password" />
        <input name="passwordConfirmation" placeholder="password confirmation" />
        <button>Sign Up</button>
      </form>
    </div>
  `);
});

app.post("/signup", async (req, res) => {
  const { email, password, passwordConfirmation } = req.body;
  const existingUser = await usersRepo.getOneBy({ email });
  if (existingUser) {
    return res.send("Email in Use");
  }
  if (password !== passwordConfirmation) {
    return res.send("Passwords must match");
  }
  // CREATE a user in our user repository to represent this user
  const user = await usersRepo.create({ email, password });
  // Store the id of that user inside the users cookie

  // req.session get added by cookie-session
  req.session.userId = user.id;
  res.send("Account Created");
});

app.get("/signout", (req, res) => {
  req.session = null;
  res.send("You are logged out");
});

app.get("/signin", (req, res) => {
  res.send(`
    <div>
      <form method="POST">
        <input name="email" placeholder="email" />
        <input name="password" placeholder="password" />
        <button>Sign In</button>
      </form>
    </div>
  `);
});

app.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  const user = await usersRepo.getOneBy({ email });
  if (!user) {
    return res.send("Email not found");
  }
  const validPassword = await usersRepo.comparePasswords(
    user.password,
    password
  );
  if (!validPassword) {
    return res.send("Invalid password");
  }
  req.session.userId = user.id;
  res.send("LOGGED IN");
});

app.listen(3000, () => {
  console.log("Listening at PORT 3000");
});
