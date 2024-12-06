<?php
session_start();
include 'database.php';

// Ellenőrizzük, hogy van-e `id` paraméter az URL-ben
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['id'])) {
    $id = intval($_POST['id']);
    $name = $conn->real_escape_string($_POST['name']);
    $email = $conn->real_escape_string($_POST['email']);
    $password = $_POST['password'] ? password_hash($_POST['password'], PASSWORD_BCRYPT) : null;
    $role = $conn->real_escape_string($_POST['role']);

     // Az új jelszót csak akkor frissítjük, ha megadták
        if ($password) {
            $sql = "UPDATE Users SET name = ?, email = ?, password = ?, role = ? WHERE id = ?";
            $stmt = $conn->prepare($sql);
            $stmt->bind_param("ssssi", $name, $email, $password, $role, $id);
        } else {
            $sql = "UPDATE Users SET name = ?, email = ?, role = ? WHERE id = ?";
            $stmt = $conn->prepare($sql);
            $stmt->bind_param("sssi", $name, $email, $role, $id);
        }

        if ($stmt->execute()) {
            $_SESSION['message'] = "Felhasználó sikeresen frissítve!";
        } else {
            $_SESSION['message'] = "Hiba történt a felhasználó frissítésekor!";
        }
        $stmt->close();
        $conn->close();
        header("Location: admin.php");
        exit;
    } else {
        // Ha nem volt POST kérés vagy nem volt `id`, visszairányítjuk az admin.php-ra
        header("Location: admin.php");
        exit;
    }
?>