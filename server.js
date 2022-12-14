const apiRoutes = require("./Develop/routes/apiRoutes");
const htmlRoutes = require("./Develop/routes/htmlRoutes");
const express = require("express");
const fs = require("fs");
const PORT = process.env.PORT || 3001;
const app = express();

//parse through json data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("./Develop/public"));

app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

app.listen(PORT, () => {
  console.log(`API server now on ${PORT}`);
});
