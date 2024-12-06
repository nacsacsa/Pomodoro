<?php
session_start();
include 'database.php';

if (!isset($_SESSION['role']) || $_SESSION['role'] !== 'admin') {
    header("Location: index.php");
    exit;
}

if (isset($_GET['id']) && is_numeric($_GET['id'])) {
    $id = $_GET['id'];
    $sql = "SELECT id, name, email, role FROM Users WHERE id = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $id);
    $stmt->execute();
    $result = $stmt->get_result();
    $user = $result->fetch_assoc();
    $stmt->close();

    if ($user) {
        echo json_encode($user);
    } else {
        http_response_code(404);
        echo json_encode(["error" => "User not found"]);
    }
} else {
    http_response_code(400);
    echo json_encode(["error" => "Invalid request"]);
}

$conn->close();
?>
