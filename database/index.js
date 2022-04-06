const mongoose = require('mongoose');
const {dbHost, dbPass, dbPort, dbUser, dbName} = require('../app/config');

mongoose.connect(`mongodb://${dbUser}:${dbPass}@${dbHost}:${dbPort}/${dbName}?authSource=admin`);
// mongodb://FadhilGanteng:programmersenja@localhost:27017?authSource=admin
const db = mongoose.connection;

// db.on('open', function(){
// //   server.listen(port);
// //   server.on('error', onError);
// //   server.on('listening', onListening);
//   console.log('database running')
// })
module.exports=db;