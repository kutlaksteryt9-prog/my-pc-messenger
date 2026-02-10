const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http, { cors: { origin: '*' } });

app.use(express.static(__dirname));

io.on('connection', (socket) => {
  console.log('Пользователь подключился');

  socket.on('msg', (data) => {
    io.emit('msg', data); // всем отправляем
  });
});

http.listen(3000, () => {
  console.log('Сервер работает на http://localhost:3000');
});
