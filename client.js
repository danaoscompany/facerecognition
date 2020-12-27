const io = require('socket.io-client');
io("http://45.132.240.102:2819").emit('facerecognition', {'img1url': 'http://45.132.240.102/facerecognition/img1.jpg', 'img2url': 'http://45.132.240.102/facerecognition/img2.jpg'});
