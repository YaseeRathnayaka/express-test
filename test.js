var express = require('express');

var test = express();

test.get('/getusers',function(req,res){
    res.send("hello typing by me");
});

test.listen(5200);