var  express =require('express');
var app=express();
var router = express.Router();
var  upload = require('express-fileupload');
app.use(upload());

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({  extended: true               
}));                             
app.use(bodyParser.json());  
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

router.post('/insert',function(req,res){

	 var username = req.body.name;
   var lastname = req.body.lastname;
   var password = req.body.password;
   var message = req.body.message; 

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myobj = { username:username, address:message, password:password, lastname:lastname };
  dbo.collection("customers").insertOne(myobj, function(err, res) {
    if (err) throw err;
    db.close();
  });
});


   res.redirect('/'); 

});
module.exports = router;