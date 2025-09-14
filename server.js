const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

// App Setup
dotenv.config();
const app = express();
connectDB();
app.use(cors());
app.use(express.json());


 
app.get("/",(req,res)=>{
    return res.send("welcome to the server")
})

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
