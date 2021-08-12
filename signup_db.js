var MongoClient = require('mongodb').MongoClient;
var express =require('express');
const path = require('path');
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
    
    var email=req.body.email;
    var password=req.body.password;
    var address=req.body.address;
    var contact_no=req.body.contact_no;
    ConnectionToMongoDBForLoginValidation(email,password,address,contact_no);
    res.send("You are successfully registered,please Login,")
    
    
   
    
  

});
function ConnectionToMongoDBForLoginValidation(email_,password_,address_,contact_no_)
    {
        MongoClient.connect('mongodb://localhost:27017/pizzawebsite',function(err,client)
        {
            if(err) throw err;
            else 
            console.log("connecteddddd to mongodb.....");
    
            var data = client.db('pizzawebsite');
            data.collection("users").insertOne({email:email_,password:password_,address:address_,contact_no:contact_no_},
                function(err,result)
                {
                    if(err) res.send(err);
                    
                    console.log(result);
                   
                });
    
        });
               
    
    }
app.listen(port);


