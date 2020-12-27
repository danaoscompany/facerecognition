const io = require('socket.io-client');
io("http://localhost:2819").emit('facerecognition', {'img1url': 'http://localhost/img1.jpg', 'img2url': 'http://localhost/img2.jpg'});
