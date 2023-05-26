import express from "express";
import connectDb from "./config/db";
import apiRoutes from "./routes/apiRoutes";
import bodyParser from "body-parser";
import importData from "./seeder/seeder";
import cors from "cors";

const app = express();

app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

connectDb();
// importData();

app.use("/api", apiRoutes);

//  handle error
app.use((error, req, res, next) => {
  const message = error.message;
  const stack = error.stack;
  const status = 500;

  if (process.env.NODE_ENV === "development") {
    console.log({ status, message, stack });
  }

  res.status(status).send({ status, message, stack });
});

const port = 8081;
app.listen(port, () => {
  console.log(`>>> Backend app listening on port ${port}`);
});
