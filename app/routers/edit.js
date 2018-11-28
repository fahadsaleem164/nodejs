var  express =require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

router.get('/Edit/:id',function(req,res){
  var id =req.params.id;

  MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.collection("customers").find({username:id}).toArray(function(err, result) {
    if (err) throw err;
    var myobj ={

       myarray:result
    };
    
    db.close();
    res.render('edit',myobj);
  });

});


 

});
module.exports = router;