import express from "express";
import logger from "./middleware/logger.js";
import studentRoutes from "./route/studentRoute.js";

const app = express();

app.use(express.json()); 
app.use(logger); 

app.use("/students", studentRoutes); 

app.listen(3000, () => {
  console.log("Server running on port 3000");
});