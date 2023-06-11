var mongoose = require('mongoose');
var readline = require('readline');

var gracefulShutdown;
//var dbUri = 'mongodb://user:pass@host:port/db';
var dbUri = 'mongodb://127.0.0.1:27017/fercosdb';
//mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.9.1
mongoose.connect(dbUri);
var db = mongoose.connection;

db.on('connected', function(){
    console.log('Conectado');
});
db.on('error', function(err){
    console.log('Erro de conexao.', err);
});
db.on('disconnected', function(){
    console.log('Desconectado');
});
gracefulShutdown = function(msg, callback) {
  db.close(function(){
    console.log('Mongoose disconnected through ' + msg);
  });
};

if(process.plataform === "win32"){
  var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  rl.on("SIGINT", function(){
    gracefulShutdown('app termination', function(){
        process.exit(0);
    });
  });
  rl.on("SIGUSR2", function(){
    gracefulShutdown('nodemon restart', function(){
        process.kill(process.id, 'SIGUSR2');
    });
  });
  rl.on("SIGTERM", function(){
    gracefulShutdown('app shutdown', function(){
        process.exit(0);
    });

  });
};

require('./userModel');
