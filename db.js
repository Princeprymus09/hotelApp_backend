//require the library
const mongoose = require('mongoose');
mongoose.set('strictQuery',false);
//connect to the database
mongoose.connect('mongodb+srv://fsdsharmas77:zyhhRDdydE5RkBHJ@hotle-management.qt4ixva.mongodb.net/rooms_db?retryWrites=true&w=majority');
// acquire the connection to db (to check the connection is sucessfull or not)
const db = mongoose.connection;
//on error in connection
db.on('error',console.error.bind(console,'Error in connecting to DB'));
// on sucessfully connected
db.once('open',function(){
    console.log('Sucessfully connected to DB !');
});
module.exports=db;