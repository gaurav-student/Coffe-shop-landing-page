const express = require("express");
const path =require("path");

const app = express();
const port = 80;
//Set the template engine as pug
app.set('view engine', 'pug')

//set the views directory
app.set('views',path.join(__dirname,'views'))

//our pug demo endpoint
app.get('/demo',(req, res)=> {
    res.status(200).render('demo', { title: 'Hey', message: 'Hello there!' })
  }) ;

app.get("/",(req, res)=>{
    res.send("This is my home");
});
app.get("/about",(req, res)=>{
    res.send("This is my home page");
});
app.get("/products",(req, res)=>{
    res.send("This is my first about page");
});

app.listen(port, ()=>{
      console.log(`the application started successfully on port ${port}`);
})