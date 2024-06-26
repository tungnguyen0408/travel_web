const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");
const errorController = require("./controllers/error");
require("dotenv").config();
const viewEngine = require("./config/viewEngine");
const initWebRoutes = require("./routes/routeWeb");
import cors from "cors";
import connectDB from "./config/connectDB";
const app = express();
console.log("------------------------------------------------------");
// app.use(express.static(path.join(__dirname, "public")));
app.use(cors({ credentials: true, origin: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use("/admin", adminRoutes);
viewEngine(app);
initWebRoutes(app);
app.use(errorController.get404);
connectDB();
let port = process.env.PORT || 6969;

app.listen(port, () => {
  console.log("Backend nodejs running on the port " + port);
});
