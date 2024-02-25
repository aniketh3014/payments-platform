import  express  from "express";
import cors from "cors";
import mainRouter from "./routes/index";
import { JWT_SECRET } from "./config";

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/v1", mainRouter);