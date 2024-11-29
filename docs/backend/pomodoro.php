<?php
session_start();
include 'database.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $start_time = $_POST['start_time'];
    $end_time = $_POST['end_time'];
    $user_id = $_SESSION['user_id'];
    $task_id = $_POST['task_id'];

    $sql = "INSERT INTO PomodoroSessions (user_id, task_id, start_time, end_time) VALUES (?, ?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("iiss", $user_id, $task_id, $start_time, $end_time);

    if ($stmt->execute()) {
        echo "Munkamenet sikeresen rögzítve!";
    } else {
        echo "Hiba: " . $conn->error;
    }
    $stmt->close();
}

$conn->close();
?>
