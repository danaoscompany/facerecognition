<?php
echo "Uploading...";
move_uploaded_file($_FILES['file']['tmp_name'], './face1.jpg');
