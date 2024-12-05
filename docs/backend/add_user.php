<?php
session_start();
include 'database.php';

if (!isset($_SESSION['role']) || $_SESSION['role'] !== 'admin') {
    header("Location: index.php");
    exit;
}

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT);
    $role = $_POST['role'];

    $sql = "INSERT INTO Users (name, email, password, role) VALUES (?, ?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ssss", $name, $email, $password, $role);

    if ($stmt->execute()) {
        header("Location: admin.php");
        exit;
    } else {
        echo "Hiba történt: " . $stmt->error;
    }

    $stmt->close();
}

$conn->close();
?>
<!DOCTYPE html>
<html lang="hu">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Felhasználó Hozzáadása</title>
</head>
<body>
<div class="container mt-4">
    <h1>Új Felhasználó Hozzáadása</h1>
    <form method="post" action="add_user.php">
        <label for="name">Név:</label>
        <input type="text" id="name" name="name" required><br>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required><br>
        <label for="password">Jelszó:</label>
        <input type="password" id="password" name="password" required><br>
        <label for="role">Szerepkör:</label>
        <select id="role" name="role">
            <option value="user">Felhasználó</option>
            <option value="admin">Admin</option>
        </select><br>
        <button type="submit">Hozzáadás</button>
    </form>
</div>
</body>
</html>
