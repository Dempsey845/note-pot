import express from "express";
import dotenv from "dotenv";
import testRoutes from "./routes/test.js";

dotenv.config();
const app = express();

app.use(express.json());

app.use("/api/test", testRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
