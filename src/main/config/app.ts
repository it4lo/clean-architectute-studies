import  setupRoutes  from "@/main/config/router-express-config";

import express from "express";
const app = express();
setupRoutes(app);

export default app;