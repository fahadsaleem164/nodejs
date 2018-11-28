var  express =require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";


router.get('/show',function(req,res){	
	MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.collection("customers").find({}).toArray(function(err, result){
    if (err) throw err;
    var myobj ={

    	 myarray:result
    };
    console.log(result);
    
    db.close();
     res.render('show',myobj);

  });

});

	



});
module.exports = router;