import express from "express";
const PORT = 3000;
const app = express();

app.get("/", (req, res) => {
  res.send("Learning Express Js");
});

app.listen(PORT, () => {
  console.log(`server is connected at ${PORT}`);
});
