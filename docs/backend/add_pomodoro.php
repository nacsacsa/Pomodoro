<?php
session_start();
include 'database.php';

if (!isset($_SESSION['user_id'])) {
    http_response_code(403);
    echo "Hozzáférés megtagadva.";
    exit();
}

if (isset($_POST['action'], $_POST['mode'], $_POST['timestamp'])) {
    $action = $_POST['action'];
    $mode = $_POST['mode'];
    $timestamp = $_POST['timestamp'];

    $sql = "INSERT INTO PomodoroSessions (user_id, start_time, end_time) VALUES (?, NOW(), NOW() + INTERVAL 25 MINUTE)";
    $stmt = $conn->prepare($sql);

    if ($stmt) {
        $stmt->bind_param("i", $_SESSION['user_id']);
        if ($stmt->execute()) {
            echo "Sikeresen hozzáadva.";
        } else {
            echo "Hiba történt: " . $stmt->error;
        }
        $stmt->close();
    } else {
        echo "Adatbázis hiba: " . $conn->error;
    }
} else {
    echo "Nincs elegendő adat.";
}

$conn->close();
?>
