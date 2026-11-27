import express from "express"
import cors from "cors"
import assistantRoutes from "./routes/assistantRoutes.js";


const app = express();

//middleware
app.use(cors());
app.use(express.json());
// Assistant API Routes
app.use("/api/assistant", assistantRoutes);



// health check route
app.get("/",(req,res) => {
    res.status(200).json({
        success:true,
        message:"ALPHA UI Api is running"
    });
});

export default app;
