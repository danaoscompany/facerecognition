<?php

class Test extends CI_Controller {
	
	public function upload_face_1() {
		$config['upload_path']          = './userdata/';
        $config['allowed_types']        = '*';
        $config['max_size']             = 2147483647;
        $config['file_name']            = "face1.jpg";
        $config['overwrite'] 			= TRUE;
        $this->load->library('upload', $config);
        if ($this->upload->do_upload('file')) {
        	echo $this->upload->data()['file_name'];
        } else {
        	echo json_encode($this->upload->display_errors());
        }
	}
	
	public function upload_face_2() {
		$config['upload_path']          = './userdata/';
        $config['allowed_types']        = '*';
        $config['max_size']             = 2147483647;
        $config['file_name']            = "face2.jpg";
        $config['overwrite'] 			= TRUE;
        $this->load->library('upload', $config);
        if ($this->upload->do_upload('file')) {
        	echo $this->upload->data()['file_name'];
        } else {
        	echo json_encode($this->upload->display_errors());
        }
	}
}
