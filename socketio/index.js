var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

app.set('trust proxy', true);

app.get('/', function(req, res) {
  console.log('Ny anmodning fra klient');
  res.sendFile(__dirname + '/index.html');
})
  .use('/favicon', express.static(__dirname + '/favicon/'))
  .use('/p5', express.static(__dirname + '/node_modules/p5/lib/'))
  .use('/sketch.js', express.static(__dirname, { index: 'sketch.js' }));

io.on('connection', function(socket) {
  socket.on('chat message', function(msg) {
    io.emit('chat message', msg);
  });

  socket.on('position', function(msg) {
    io.emit('position', msg);
    console.log(msg);
  });

});

http.listen(port, function() {
  console.log('Serveren lytter på port ' + port);
});
