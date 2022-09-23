const express=require('express');

const kdramas = [{"id": 1,
"Healer": "very good",
"Sweet home":"not bad"},
{"id":2,
"FOE":"nice",
"Trueb":"awesome"
}];
        
const server=express();

//middleware:
server.use((req,res,next)=>{
    console.log("I am a middleware!")
    next();
})
server.use(express.json());

//routes
server.get('/',(req,res)=>{
    res.send('Home Route');
})   //no route
server.get('/about',(req,res)=>{
    res.send('About Route');
})
server.get('/kdramas',(req,res)=>{
    res.header("Content-type","application/json")
    res.send(kdramas);
})

server.post('/kdramas',(req,res)=>{
    res.header("Content-type","application/json")
    kdramas.push(req.body);
    res.send("We have some new dramas!" );
})

server.listen(4000,()=>{
    console.log(" Express Server is running on port 3000")
})