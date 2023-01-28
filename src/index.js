const express=require('express')
const cors=require("cors")
require("dotenv").config();
const PORT=process.env.PORT
const connect=require("./Database/connectDB")
const quizeRoute=require("./Routes/quizedata.route")

const app = express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())

app.get('/',(req,res)=>{
 return res.send('Hello')
})
app.use("/quize",quizeRoute)

app.listen(8080,async()=>{
    try{
        await connect()
        console.log("Database connected");
    }catch(e){
        console.log(e.message);
    }
    console.log('Listening Server')})