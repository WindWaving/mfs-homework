<?php
$data=$_GET['name'];
$callback=$_GET['callback'];
echo $callback . '(' . "'$data'" . ')';
?>