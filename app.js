// jshint esversion:  6

const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

const app = express();

app.listen(3000, ()=>{
    console.log("server started at port 3000 broo!!");
})