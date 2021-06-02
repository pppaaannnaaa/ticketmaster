import express from "express";

const app = express();
app.use(express.json());
app.get("/api/users/currentuser", (req, res) => {
  console.log("/api/users/currentuser");
  res.send("Hi There!!");
});
app.listen(3001, () => {
  console.log("listening on port 3001!!");
});
