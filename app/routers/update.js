var  express =require('express');
var app=express();
var router = express.Router();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({  extended: true               
}));                             
app.use(bodyParser.json());  
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

router.post('/update',function(req,res){
	var username = req.body.name;
  var newusername = req.body.newname;
   var lastname = req.body.lastname;
   var password = req.body.password;
   var message = req.body.message; 

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myquery = { username:username };
  var newvalues = { $set: {username:newusername,lastname:lastname,password:password,address: message, } };
  dbo.collection("customers").updateOne({ username:username }, newvalues, function(err, res) {
    if (err) throw err;
    console.log("1 document updated");
    db.close();
  });
})


   res.redirect('/'); 

});
module.exports = router;