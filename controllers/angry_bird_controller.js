var express = require('express');

var router = express.Router(); 

var angryBird = require('../modules/angry_birds');

router.get('/',function(request,response){
    
    var mustacheVariables = {

        birds: angryBird.birds
    }
   response.render('./angry_birds/index', mustacheVariables); 

})

router.get('/:id',function(request,response){
    var index = request.params.id;
    var mVariables = {

        bird: angryBird.birds[index]
    }
    // response.send("test")
    response.render('./angry_birds/show', mVariables);
})

// router.get('/:?feels=',function(request,response){

//    var feels = request.params.query.feels;
//    console.log(feels);

// })

module.exports = router;