<?php
session_start();

$servername = "localhost";
$username = "emehanjaa"; 
$password = "eeeeeeee"; 
$dbname = "logini";


$conn = new mysqli($servername, $username, $password, $dbname);


if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST["username"];
    $password = $_POST["password"];

    
    $sql = "SELECT * FROM login WHERE username=?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $result = $stmt->get_result();

   
    if ($result->num_rows == 1) {
        $row = $result->fetch_assoc();
        
        
        if (password_verify($password, $row["password"])) {
           
            $_SESSION["user_id"] = $row["id"]; 
            $_SESSION["username"] = $row["username"]; 
            header("Location: Log in.php");
            exit();
        } else {
            
            echo "Invalid username or password";
        }
    } else {
        
       echo "Invalid username or password";
    }


    $stmt->close();
}

$conn->close();
?>
