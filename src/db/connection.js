const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URL,{
    useNewUrlParser:true,
    useUnifiedTopology: true
});

// mongoose.connection.once('open',function(){
//     console.log('Connection has been made, now make fireworks');
// }).on('error',function(error){
//     console.log('Connection Error:',error);
// });