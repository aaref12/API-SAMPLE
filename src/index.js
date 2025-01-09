import express from 'express'

const app=express()
const port=process.env.PORT || 3000
app.get('/',(req,res)=>{
 res.send('hello coder')
})

app.listen(port,()=>{
 console.log(`server is ready on http://localhost:${port}`)
})