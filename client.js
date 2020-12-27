const WebSocket = require('ws');

const ws = new WebSocket('ws://45.132.240.102:6178');

ws.onopen = () => {
	console.log("WebSocket opened");
  	ws.send(JSON.stringify({'type': 'faceRecognition', 'data': {'img1url': 'http://localhost/img1.jpg', 'img2url': 'http://localhost/img2.jpg'}}));
};

ws.onerror = () => {
	console.log("WebSocket error");
};

ws.onmessage = (data) => {
  	console.log(data['data']);
  	if (data['data'] == 'ho!') {
  		ws.send('test');
  	}
};
