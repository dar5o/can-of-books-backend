'use strict'
const express=require('express');
const app=express();
const Books =require('../modules/books');

app.post('/add_user', async(request,response)=>{
    let user=new Books(request.body);
try {
    await user.save();
    response.send(user);
}
catch(error){
response.status(200).send(error)};
console.log(user)
})
module.exports =app