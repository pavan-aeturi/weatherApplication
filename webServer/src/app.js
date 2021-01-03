const express=require('express');
const path=require('path');
const hbs=require('hbs');
const app=express()

const pathToPublic=path.join(__dirname, '../public')
const pathToviews=path.join(__dirname, '../templates/views');
const pathTopartials=path.join(__dirname, '../templates/partials');

app.set("view engine","hbs")
app.set("views",pathToviews)
hbs.registerPartials(pathTopartials)
app.use(express.static(pathToPublic))

app.get('',(req,res)=>{
    res.render("index",{
        title:"weatherApplication",
        name:"pavan",
        content:"home"
    })
})

app.get('/about',(req,res)=>{
    res.render("about",{
        title:"about",
        name:"pavan",
        content:"about"
    })
})

app.get('/weather',(req,res)=>{
    res.render("weather",{
        title:"Weather",
        name:"pavan",
        content:"weather"
    })
})

app.listen(3000,()=>{
    console.log("Server started listening on port 3000")
})
