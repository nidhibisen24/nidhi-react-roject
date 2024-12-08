import express from "express"
import dotenv from "dotenv"
import ConnectDb from "./config/db.js";

const app = express();

dotenv.config();

const PORT = process.env.PORT

// app.get("/",(req,res)=>{
//     res.send("Hello World")
// });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// =========================Routes=======================

import indexRouter from "./routes/indexRouter.js";
import userRoutes from "./routes/userRoutes.js";
import adminRoutes from "./routes/adminRoutes.js"

app.use("/", indexRouter)
app.use("/user",userRoutes)
app.use("/admin",adminRoutes)



// ==================Routes end============================
ConnectDb(process.env.MONGO_URL)
app.listen(PORT,()=>{
    console.log(`server is in port ${PORT}`)
});

