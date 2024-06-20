<?php
// Configuración de la conexión a la base de datos de Access
$databaseFile = 'ruta/a/tu/base_de_datos.accdb';
$conn = odbc_connect("Driver={Microsoft Access Driver (*.mdb, *.accdb)};DBQ=$databaseFile", '', '');

if (!$conn) {
    die("Error al conectar a la base de datos: " . odbc_errormsg());
}

// Recibir datos del formulario
$nombre = $_POST['nombre'];
$email = $_POST['email'];
$fecha = $_POST['fecha'];
$hora = $_POST['hora'];
$motivo = $_POST['motivo'];
$servicio = $_POST['servicio'];

// Preparar la consulta SQL
$sql = "INSERT INTO Reservas (Nombre, Email, Fecha, Hora, Motivo, Servicio) VALUES (?, ?, ?, ?, ?, ?)";
$stmt = odbc_prepare($conn, $sql);

if (!$stmt) {
    die("Error al preparar la consulta: " . odbc_errormsg());
}

// Ejecutar la consulta con los datos del formulario
$result = odbc_execute($stmt, array($nombre, $email, $fecha, $hora, $motivo, $servicio));

if (!$result) {
    die("Error al ejecutar la consulta: " . odbc_errormsg());
}

echo "Datos almacenados con éxito";

// Cerrar la conexión
odbc_close($conn);
?>
