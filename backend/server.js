import express, { json } from "express";
import { connect } from "mongoose";
import { config } from "dotenv";
import router from "./routes/cardRoute.js";
import cors from "cors";

config();

const app = express();
const port = process.env.PORT || 5000;

app.use(json());
app.use(cors());

console.log("dsf safsaf saf s");
connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
  });
app.use("/api", router);

app.get("/ping", (req, res) => {
  res.send("Server is running!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
