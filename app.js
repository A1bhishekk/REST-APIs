import express from 'express';
const app = express();
const port=4500

app.get('/', (req, res) => {
    res.send({name:"Abhishek",
email:"abhishek@gmail.com"})
})

app.listen(port,()=>{
    console.log(`server listning on port http://localhost:${port}`)
})