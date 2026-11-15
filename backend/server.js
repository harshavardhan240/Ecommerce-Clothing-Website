import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from'./config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';

// App Config

const app = express();
const port = process.env.port || 4000;

//Middleware
app.use(express.json())
app.use(cors())
connectDB()
connectCloudinary()

//api endpoints
app.get('/',(req,res) => {
    res.send("API Working")
})

app.listen(port, ()=> console.log('server is running on port port '+ port));