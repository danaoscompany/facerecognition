<?php
use ElephantIO\Client;
use ElephantIO\Engine\SocketIO\Version2X;

require './vendor/autoload.php';

$client = new Client(new Version2X('http://45.132.240.102:2819', [
]));
$client->initialize();
$client->emit('faceRecognition', [
	'img1url' => 'http://45.132.240.102/facerecognition/img1.jpg',
	'img2url' => 'http://45.132.240.102/facerecognition/img2.jpg'
]);
$client->close();
