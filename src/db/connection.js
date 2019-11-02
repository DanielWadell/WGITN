const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/wgh');

mongoose.connection.once('open',function(){
    console.log('Connection has been made, now make fireworks');
}).on('error',function(error){
    console.log('Connection Error:',error);
});