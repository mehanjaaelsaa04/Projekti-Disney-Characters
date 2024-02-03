<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $Name = $_POST['name'];
    $Surname = $_POST['surname'];
    $Email = $_POST['email'];
    $Username = $_POST['username'];
    $Password = password_hash($_POST['password'], PASSWORD_DEFAULT);

    $conn = new mysqli('localhost', 'root', '', 'webi');
    if ($conn->connect_error) {
        die('Connection Failed: ' . $conn->connect_error);
    } else {
        $stmt = $conn->prepare("INSERT INTO registration (Name, Surname, Email, Username, Password)
                VALUES (?, ?, ?, ?, ?)");
        $stmt->bind_param("sssss", $Name, $Surname, $Email, $Username, $Password);
        
        if ($stmt->execute()) {
            echo "Registration Successfully...";
        } else {
            echo "Error during registration: " . $stmt->error;
        }

        $stmt->close();
        $conn->close();
    }
}
?>