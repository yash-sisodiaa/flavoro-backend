const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");
require("dotenv").config();
const cookieParser = require("cookie-parser");
const {connectDb} = require('./connection.js')
const routes = require("./routes.js")

connectDb();
app.use(cors(
    {
        origin:["http://localhost:5173","https://flavoro-a-food-ordering-app.vercel.app/"],
        credentials: true
    }
));
app.use(express.json());
app.use(cookieParser());



app.use("/api",routes);
app.listen(port,()=> console.log(`server is running on port ${port}`))