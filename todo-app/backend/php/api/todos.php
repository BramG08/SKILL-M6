<?php
$data = ['Bram Lammers', 'Daantje Bosch', 'Dinellove'];
header('Content-Type: application/json; charset=utf-8');
echo json_encode($data);