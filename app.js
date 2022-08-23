import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./Config/db.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();

//configure env variables
dotenv.config();
const port = process.env.PORT;
const DATABASE_URL = process.env.DATABASE_URL;

//Database connection
connectDB(DATABASE_URL);

//CORS POLICY
app.use(cors());

//JSON
app.use(express.json());

//Load routes
app.use("/user", userRoutes);

app.listen(port, () => {
  console.log(`server listning on port http://localhost:${port}`);
});
