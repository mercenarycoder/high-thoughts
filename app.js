const express = require("express");
const app = express();

app.get("/names", (_req, res) => {
  res.send("telmo");
});

app.listen(5000, () => {});
