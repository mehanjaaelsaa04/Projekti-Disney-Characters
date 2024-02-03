<?php
session_start();

$servername = "logi_host"; 
$username = "logi_username"; 
$password = "logi_password"; 


$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST["email"];
    $password = $_POST["password"];

    $sql = "SELECT * FROM usertable WHERE email='$email' AND password='$password'";
    $result = $conn->query($sql);

    if ($result->num_rows == 1) {
        $_SESSION["user_email"] = $email;
        header("Location: dashboard.php");
        exit();
    } else {
        $error_message = "Invalid email or password";
    }
}

$conn->close();
?>