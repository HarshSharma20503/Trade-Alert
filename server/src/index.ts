import dotenv from "dotenv";
import connectDB from "./config/db.js";
import { app } from "./app.js";
// import { GetLatestNews } from "./scripts/GetNews";

dotenv.config();

const port: number = Number(process.env.PORT) || 8000;

app.get("/", (req, res) => {
  res.send("Welcome to the backend");
});

connectDB()
  .then(() => {
    console.log("Database connected");
    app.listen(port, async () => {
      console.log(`Server listening on port ${port}`);
      // await GetLatestNews();
    });
  })
  .catch((err: Error) => {
    console.log(err.message);
  });
