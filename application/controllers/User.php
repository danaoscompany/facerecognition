<?php

class User extends CI_Controller {
	
	public function upload_image() {
		$config['upload_path']          = './userdata/';
        $config['allowed_types']        = '*';
        $config['max_size']             = 2147483647;
        $config['file_name']            = $this->input->post('file_name');
        $config['overwrite'] 			= TRUE;
        $this->load->library('upload', $config);
        if ($this->upload->do_upload('file')) {
        	echo $this->upload->data()['file_name'];
        } else {
        	echo json_encode($this->upload->display_errors());
        }
	}
	
	public function delete_image() {
		$fileName = $this->input->post('file_name');
		unlink("userdata/" . $fileName);
	}
}
