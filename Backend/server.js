// # pehle server banao, module type server hai
import express from 'express'
import cors from 'cors'
import { connectToDb } from './Config/db.js' 
import foodRouter from './routes/fooRoute.js'


// app config
const app = express() // initializing aapp
const port = 4000

// middleware
app.use(express.json()) // to allow cross origin request
app.use(cors()) // used to access any backend from front end

// db connection
connectToDb()

// api end point
app.use('/api/food', foodRouter)

app.get('/', (req, res)=>{
    res.send('API Working')
})// using get method we can request the data from severs
// here we will give path '/'

// to run express server
app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`);
})



// connection String 
// mongodb+srv://Viplove11:viplove@1109@cluster0.sttxk.mongodb.net/?