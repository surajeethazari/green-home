import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;
app.use(express.json()); // this middleware will parse JSON bodies: req.body

// app.post("/analyze", );

app.listen(PORT, () => {
  console.log("Server started on PORT:", PORT);
});
