require("dotenv").config({ path: "./.env" });
const express = require("express");
const cors = require("cors");
const session = require("express-session");
const app = express();
const errorHandler = require("./middleware/error");
const connectDB = require("./config/db");
const { adminBro, adminRoute } = require("./config/adminBro");

app.use(adminBro.options.rootPath, adminRoute);

var corsOptions = {
  origin: process.env.FRONTEND_URL || "*",
  credentials: true,
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: "your-secret-key",
    resave: false, // add this line to define the resave option
    saveUninitialized: true,
    cookie: { secure: true },
  })
);

connectDB();

app.get("/", (req, res, next) => {
  res.send("Fitnest api running!");
});

// Connecting Routes

app.use("/api/auth", require("./routes/auth"));
app.use("/api/user", require("./routes/user"))
app.use("/api/profile", require("./routes/profile"))
app.use("/api/question", require("./routes/question"));
app.use("/api/meal-plan", require("./routes/mealPlan"));
app.use("/api/workout", require("./routes/workout"));


app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () =>
  console.log(`Sever running on port ${PORT}`)
);

process.on("unhandledRejection", (err, promise) => {
  console.log(`Logged Error: ${err.message}`);
  server.close(() => process.exit(1));
});
