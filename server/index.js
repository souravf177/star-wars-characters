import dotenv from "dotenv";
dotenv.config();
import express from "express";
import CorsFilter from "./filters/CorsFilter.js";
import ChracterRoute from "./routes/CharacterRoute.js";

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/healthcheck", (req, res) => res.json({ staus: "Healthy" }));

app.use(CorsFilter);
app.use((req, res, next) => {
  res.setHeader("x-content-type-options", "nosniff");
  next();
});

app.use("/character", ChracterRoute);

app.listen(port, () => console.log(`Server is up & running at port ${port}`));
