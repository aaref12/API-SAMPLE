import express from 'express'
import { ApiError } from '../utiles/API-ERRORS.js'
import { ApiResponse } from '../utiles/API-RESPONSE.js'
 

const app=express()
app.use(express.json())





const port=process.env.PORT || 3000
app.get('/',(req,res)=>{
 res.send('hello coder')
})


app.post('/add',(req,res)=>{

 const {name}=req.body
 if(!name){
  throw new ApiError(401,'name is complasary')
 }
 const data=[];
 data.push(req.body)

 return res.status(200).json({
  
 })
 


  
})

app.listen(port,()=>{
 console.log(`server is ready on http://localhost:${port}`)
})