var express = require('express');
var app = express();
app.get('/',function(req,res){
    res.send('Titoy taioro')
})

app.listen('8000')