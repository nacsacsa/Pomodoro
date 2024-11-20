<?php
session_start();
include 'database.php';

$sql = "SELECT DATE(end_time) AS cycle_date, COUNT(*) AS cycle_count
        FROM PomodoroSessions
        WHERE user_id = ?
        GROUP BY DATE(end_time)";

$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $_SESSION['user_id']);
$stmt->execute();
$result = $stmt->get_result();

$pomodoroData = [];

while ($row = $result->fetch_assoc()) {
    $pomodoroData[$row['cycle_date']] = $row['cycle_count'];
}

$pomodoroDataJson = json_encode($pomodoroData);
?>
