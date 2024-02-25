import  express  from "express";
import cors from "cors";
import mainRouter from "./routes/index.js";
import { JWT_SECRET } from "./config.js";

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/v1", mainRouter);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})