var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
const { exec } = require("child_process");
app.get('/', function(req, res) {
   res.sendfile('index.html');
});
io.on('connection', function(socket) {
   console.log('A user connected');
   //Whenever someone disconnects this piece of code executed
   socket.on('disconnect', function () {
      console.log('A user disconnected');
   });
   socket.on('testEvent', function(data) {
      console.log(data);
   });
   socket.on('facerecognition', function(data) {
   		let img1url = data['img1url'];
   		let img2url = data['img2url'];
   		// python2 main.py --img1url http://45.132.240.102/facerecognition/img1.jpg --img2url http://45.132.240.102/facerecognition/img2.jpg
   		exec("python2 /home/dana/Documents/Python/FaceRecognition/main.py --img1url "+img1url+" --img2url "+img2url, (error, stdout, stderr) => {
    		if (error) {
        		console.log(`error: ${error.message}`);
        		return;
    		}
		    if (stderr) {
        		console.log(`stderr: ${stderr}`);
        		return;
		    }
		    console.log(`stdout: ${stdout}`);
		});
   });
});
http.listen(2819, function() {
   console.log('listening on *:2819');
});
