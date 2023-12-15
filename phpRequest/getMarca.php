<?php
header('Content-Type: application/json');

// Incluir el archivo de conexión
include 'db_connection.php';

// Obtener el valor de la variable desde la URL
$valorDado = ' ' . trim($_GET['valor']) . ' ';
$modelo = ' ' . trim($_GET['modelo']) . ' ';

// Consulta SQL para obtener todos los registros de la tabla "vehiculos"
$sql = "SELECT * FROM vehiculos WHERE idTipoVehiculoClave = '$valorDado' AND modeloLlave = '$modelo'";
$result = $conn->query($sql);

// Verificar si se obtuvieron resultados
if ($result->num_rows > 0) {
    // Inicializar un array para almacenar los resultados
    $data = array();

    // Obtener los resultados y agregarlos al array
    while ($row = $result->fetch_assoc()) {
        $data[] = $row;
    }

    // Convertir el array a formato JSON
    $json_response = json_encode($data);

    // Devolver el JSON como respuesta
    echo $json_response;
} else {
    echo "No se encontraron registros.";
}

// Cerrar la conexión
$conn->close();
?>
