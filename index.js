var express = require('express');
var mustache = require('mustache-express');
var app = express();
var port = 3000;
 
var angryBirdController = require('./controllers/angry_bird_controller');

// set your app's engine to use mustache-express
app.set('view engine' , 'html');
// set your app's view engine to html
app.engine('html',mustache());
// set your app's views directory
app.set('views', __dirname + '/views');

app.use('/angry_birds',angryBirdController);

app.get('/',function(request,response){
    response.send('AngryBirds Woooooooo');
})
app.listen(port,function(){
    console.log(`App is listening on ${port}`);
});