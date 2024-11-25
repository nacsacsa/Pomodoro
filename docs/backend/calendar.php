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

<!DOCTYPE html>
<html lang="hu">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pomodoro - Naptár</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <link rel="stylesheet" href="../styles/calendar.css">
</head>
<body>

<script src="../scripts/calendar.js"></script>

<div class="navbar">
    <a href="index.php">Főoldal</a>
    <a href="logout.php">Kijelentkezés</a>
</div>

<div class="calendar-container">
    <div class="navigation">
        <button id="prev-month"><i class="bi bi-arrow-left-square-fill"></i></button>
        <h2 id="current-month"></h2>
        <button id="next-month"><i class="bi bi-arrow-right-square-fill"></i></button>
    </div>

    <div class="calendar" id="calendar"></div>
</div>
<script id="pomodoro-data" type="application/json">
    <?php echo $pomodoroDataJson; ?>
</script>

</body>
</html>