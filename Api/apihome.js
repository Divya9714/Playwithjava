var express= require('express');
var api=express();
var port=1414;
var mongo=require('mongodb');
var MongoClient=mongo.MongoClient;
var mongourl="mongodb://localhost:27017";
var cors= require('cors');
var db;
var col_name='restaurants';
api.use(cors());


api.get('/restaurants',(req,res)=>{ 
    db.collection(col_name).find({}).toArray((err,result)=>{
    if(err) throw err;
    res.send(result)
});
}); 

api.get('/restaurants/:cityname',(req,res)=>{
    console.log(location)
    var location={city:req.params.cityname}
           
    db.collection(col_name).find(location).toArray((err,result)=>{
        if (err) throw err;
        res.send(result)
});
});


MongoClient.connect(mongourl,(err,client)=>{
    if (err) console.log(err);
    db=client.db("assignment9")
    api.listen(port,(err)=>{
    if(err) throw err;
    console.log(`Server is rumming on Port ${port}`)
      });
})