const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;
const routes = require("./routes/urlRoute");
const { connectMongodb } = require("./connect");

connectMongodb("mongodb://127.0.0.1:27017/url-app-1").then(() => {
  console.log("mongodb connect ");
});
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
const urlRoute = require("./routes/urlRoute");
app.use("/api", routes);
app.get("/", async (req, res) => {
  try {
    console.log("api working");
    res.send("api working");
  } catch (error) {
    console.log(error);
  }
});

app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
