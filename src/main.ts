import Express from "npm:express";
import router from "./routes/routes.ts";
import './db.ts'

const App = Express();

App.use(Express.json())
App.use(router);

App.listen(3000, () => {
  console.log("server on port: " + 3000);
});
