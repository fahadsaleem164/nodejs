var  express =require('express');
var app=express();
app.set('view engine','ejs');
app.set('views','app/views');
app.use(express.static('app/public'));
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({  extended: true               
}));                             
app.use(bodyParser.json()); 


     


var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});






app.use(require('./routers/index'));
app.use(require('./routers/insert'));
app.use(require('./routers/show'));
app.use(require('./routers/Delete'));
app.use(require('./routers/Edit'));
app.use(require('./routers/update'));
app.locals.siteTitle = 'Testing Theme';





app.listen(3000,function(){
console.log("working");
});
