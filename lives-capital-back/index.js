import express from "express";
import cors from "cors";
import routerIp from "./routes/routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

// app.use("/", (req, res) => {
//   console.log("Hello");
//   res.send('Hello')
// });
app.use("/", routerIp);

app.listen(5005, () => {
  console.log("Server is running on port 5005");
});
