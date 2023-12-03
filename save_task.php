<?php
include("db.php");
// save_task.php

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Obtener los datos del formulario
    $nombre = $_POST['nombre'];
    $cp = $_POST['cp'];
    echo $nombre;
    // Realizar operaciones con los datos (puedes ejecutar código PHP aquí)
    $query = "INSERT INTO task(nombre, cp) VALUES ('$nombre','$cp')";
    mysqli_query($conn, $query);
    // Enviar una respuesta JSON (puede ser opcional, dependiendo de tus necesidades)
    $response = ['success' => true];
    header('Content-Type: application/json');
    echo json_encode($response);
} else {
    // Manejar otros métodos de solicitud si es necesario
    http_response_code(405); // Método no permitido
    echo json_encode(['error' => 'Método no permitido']);
}
?>
