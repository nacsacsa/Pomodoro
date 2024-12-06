<?php
session_start();
include 'database.php';

if (!isset($_SESSION['role']) || $_SESSION['role'] !== 'admin') {
    header("Location: index.php");
    exit;
}

if (isset($_GET['id']) && is_numeric($_GET['id'])) {
    $id = $_GET['id'];
    $sql = "DELETE FROM Users WHERE id = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $id);

    if ($stmt->execute()) {
        header("Location: admin.php");
        exit;
    } else {
        echo "Hiba történt: " . $stmt->error;
    }

    $stmt->close();
} else {
    header("Location: admin.php");
    exit;
}

$conn->close();
?>
