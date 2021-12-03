const ex = require('express');
const jsonfile = require('jsonfile');
const sql = require('./Models/controller.js');

const app = ex();

app.use(ex.urlencoded({extended: true}))

app.set('views',__dirname + '/myViews');
app.set('view engine', 'ejs');

app.get('/', function(req,res){
    res.render('index');
});
app.get('/hello', function(req,res){
    res.render('data1',{
        resultat : 'Hello Colo',
        magad : 'OMG'
    });
})
app.get('/admin/:p1/:p2', function(req,res){
    res.render('data2',{
        p1: req.params.p1,
        p2: req.params.p2,
    });
})
app.get('/admin', function(req,res){
    let datas = jsonfile.readFileSync('Models/data.json');
    res.render('data3', datas)
})
app.get('/rt4', function(req,res){
    jsonfile.readFile('Models/data.json', function(err,data){
        if(err) throw err;
        console.log(data);
        res.render('data3', data)
    });
    console.log('Coloooooooooooooo');
})
app.get('/sqltest', function(req,res){
    sql.getAll('bro', function(bro) {
        console.log(bro);
        res.render("index",{
            bro: bro
        })
    })
})
app.post('/bro/new', function(req,res){
    console.log(req.body);
    res.send('POST to home')
    // res.render("newBro");
})
app.get('/rt6', function(req,res){
    res.render("data6")
    res.render("newBro");
})
// serveur
const p = 8000
app.listen(p);
console.log(`Server started on localhost:${p}`);