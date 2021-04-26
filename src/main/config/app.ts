import  setupRoutes  from "@/main/config/router-express-config";

import express from "express";
const app = express();

app.use(express.json());

setupRoutes(app);

export default app;