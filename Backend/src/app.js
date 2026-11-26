import express from "express"
import cors from "cors"


const app = express();

//middleware
app.use(cors());
app.use(express.json());



// health check route
app.get("/",(req,res) => {
    res.status(200).json({
        success:true,
        message:"ALPHA UI Api is running"
    });
});

export default app;
