<?php
// Configuración de la conexión a la base de datos
$servername = "127.0.0.1";
$username = "root";
$password = ""; // La contraseña puede estar vacía si no tiene una configurada
$database = "hdi"; // Reemplaza con el nombre de tu base de datos

// Crear conexión
$conn = new mysqli($servername, $username, $password, $database);

// Verificar la conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Establecer el conjunto de caracteres a utf8mb4
$conn->set_charset("utf8mb4");
?>
