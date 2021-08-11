var MongoClient = require('mongodb').MongoClient;
var express =require('express');
app = express();
var bodyParser = require('body-parser');
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded(
    {
        extended:false
    }
));

const port = 4000;

app.use(bodyParser.json());

app.get('/',function(req,res)
{

});

app.post('/',function(req,res)
{
  

});


app.listen(port);