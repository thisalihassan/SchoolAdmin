const express = require("express");
const connectDB = require("../config/db");
const path = require("path");
const cors = require("cors");
const app = express();

// Connect Database
connectDB();
const corsOptions = {
  Origin: "http://localhost:5000/",
  "Access-Control-Allow-Headers":
    "Origin, X-Requested-With, Content-Type, Accept",
};
app.use(cors(corsOptions));
// Init Middleware
app.use(express.json({ extended: false }));

// Define Routes
app.use("/api/users", require("../routes/users"));
app.use("/api/auth", require("../routes/auth"));
app.use("/api/profile", require("../routes/profile"));
app.use("/api/members", require("../routes/members"));

// Serve static assets in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.resolve(__dirname, "../react-ui/build")));

  app.get("*", function (request, response) {
    response.sendFile(
      path.resolve(__dirname, "../react-ui/build", "index.html")
    );
  });
}
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
