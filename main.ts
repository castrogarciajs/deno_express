import Express from "npm:express";

const App = Express();

App.get("/", (req, res) => {
  res.send("hello");
});
App.listen(3000, () => {
  console.log("server on port" + 3000);
});
