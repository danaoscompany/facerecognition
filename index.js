const WebSocket = require('ws');
const { exec } = require("child_process");

const wss = new WebSocket.Server({ port: 6178 })

wss.on('connection', ws => {
  ws.on('message', data => {
    console.log(`Received message => ${data}`);
    let obj = JSON.parse(data);
    if (obj['type'] == 'faceRecognition') {
    	let img1url = obj['data']['img1url'];
		let img2url = obj['data']['img2url'];
		console.log(img1url);
		console.log(img2url);
		// python2 main.py --img1url http://45.132.240.102/facerecognition/img1.jpg --img2url http://45.132.240.102/facerecognition/img2.jpg
		exec("python2 /home/dana/Documents/Web/facerecognition/main.py --img1url "+img1url+" --img2url "+img2url, (error, stdout, stderr) => {
		    if (error) {
		        console.log(`error: ${error.message}`);
		        return;
		    }
			if (stderr) {
		        console.log(`stderr: ${stderr}`);
		        return;
			}
			console.log(stdout);
			ws.send(JSON.stringify({'type': 'faceRecognitionResponse', 'data': stdout}));
		});
    }
  });
});
