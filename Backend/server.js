import dotenv from "dotenv";
import app from "./src/app.js";
import connectDB from "./src/config/db.js";


dotenv.config();

const startServer = async () =>{
    await connectDB();
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`ALPHA UI server is running on port ${PORT}`);
})

startServer();