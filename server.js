var http = require('http')
var express = require('express')
var bodyParser = require('body-parser') 
var app = express() 
var server = http.Server(app) 
var Product = require('./product.model.js')  
app.use(express.static('public'))

//mongose
var mongoose = require('mongoose');
mongoose.Promise = global.Promise; // ?
var dbURL = 'mongodb://localhost:27017/product'
mongoose.connect(dbURL, {useNewUrlParser:true,useUnifiedTopology:true});
mongoose.connection.on('error', function (err)  {
    console.log(err)
 });
app.use(bodyParser.json()) 
app.use(bodyParser.urlencoded({extended:true})) 

        app.get('/',function(request,response){
            response.sendFile(__dirname +'/index.html')
 })

        app.get('/SingleProductDetails.html',function(request,response){
            response.sendFile(__dirname +'/SingleProductDetails.html')
})


  app.get('/product/getProduct/assig2',function(request,response){
    Product.find({}, function(err,data){
        if(err){
            return response.status(400).json({
                error:'data is missing'
            })
        }
        return response.status(200).json(JSON.stringify(data))
    })
  })


  app.post('/postproduct/Product/assig2',function(request,response){
    console.log('test1')
    var newproduct = Product(request.body)
    newproduct.save(function(err,data){
        if(err){
            response.status(400).json({error:'Failed'})
        }
        else{
            response.status(200).json({message:' not Failed'})
        }
    })
    
})

app.get("/addProduct.html",function(request,response){
    response.sendFile(__dirname +'/addProduct.html')
})


app.get('/cart.html',function(request,response){
    response.sendFile(__dirname +'/cart.html')
})

app.get('/index.html',function(request,response){
    response.sendFile(__dirname +'/index.html')
})




server.listen(process.env.PORT || 5000)
process.env.IP || 'localhost', function(){
    console.log("surver running")
}


