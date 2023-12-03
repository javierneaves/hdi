<?php
$conn = mysqli_connect('localhost', 'root', '', 'prueba_mysql');

$query = "SELECT * FROM 871_reporte_catalogo";
$result_query = mysqli_query($conn, $query);

$data = array(); // Inicializar un arreglo para almacenar los datos

while ($row = mysqli_fetch_assoc($result_query)) {
    $data[] = $row;
}

// Enviar el arreglo como JSON al cliente
header('Content-Type: application/json');
echo json_encode($data);

// Terminar la ejecución para evitar cualquier salida adicional
exit;
?>
