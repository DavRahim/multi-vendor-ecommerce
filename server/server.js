const express = require("express");

const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const dbConnect = require("./utils/db");
require("dotenv").config();


// middleware
const corsOptions = {
  origin: ["http://localhost:5173"],
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(bodyParser.json())
app.use(cookieParser())

app.use("/api", require("./routes/authRoutes"));

app.get("/", (req, res) => res.send("shop is ready?!!!"));
const port = process.env.PORT || 5000;
dbConnect();
app.listen(port, () => console.log(`shop is listening on ${port}`));
