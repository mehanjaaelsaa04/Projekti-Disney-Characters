<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $surname = $_POST['surname'];
    $email = $_POST['email'];
    $username = $_POST['username'];
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT);

    $conn = new mysqli('localhost', 'root', '', 'projekt');
    if ($conn->connect_error) {
        die('Connection Failed: ' . $conn->connect_error);
    } else {
        $stmt = $conn->prepare("INSERT INTO registration (Name, Surname, Email, Username, Password)
                VALUES (?, ?, ?, ?, ?)");
        $stmt->bind_param("sssss", $name, $surname, $email, $username, $password);
		
		if ($stmt->execute()) {
            echo "Registration Successfully...";
        } else {
            echo "Error during registration: " . $stmt->error;
        }


        $stmt->execute();

      
        $stmt->close();
        
        
        $conn->close();
    }
}
?>
