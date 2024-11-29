<?php
session_start();
if (!isset($_SESSION['user_id'])) {
    header('Content-Type: text/html; charset=UTF-8');
    exit;
}
include 'database.php';

// Hibaüzenetek inicializálása
$error_message = '';
$success_message = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $current_password = $_POST['current_password'];
    $new_password = $_POST['new_password'];

    // Jelszó hosszúság ellenőrzése (minimum 6 karakter)
    if (strlen($new_password) < 6) {
        $error_message = "Az új jelszónak legalább 6 karakter hosszúnak kell lennie!";
    } else {
        $sql = "SELECT password FROM Users WHERE id = ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("i", $_SESSION['user_id']);
        $stmt->execute();
        $result = $stmt->get_result();
        $user = $result->fetch_assoc();

        if (password_verify($current_password, $user['password'])) {
            $hashed_password = password_hash($new_password, PASSWORD_DEFAULT);
            $update_sql = "UPDATE Users SET password = ? WHERE id = ?";
            $update_stmt = $conn->prepare($update_sql);
            $update_stmt->bind_param("si", $hashed_password, $_SESSION['user_id']);
            if ($update_stmt->execute()) {
                $success_message = "Jelszó sikeresen módosítva!";
            } else {
                $error_message = "Hiba történt a jelszó módosításakor. Kérlek próbáld újra később.";
            }
        } else {
            $error_message = "A \"Jelenlegi jelszó\" hibás!";
        }
    }
}

$conn->close();
?>

<!doctype html>
<html lang="hu">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Fiókom - Pomodoro</title>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css" rel="stylesheet">
    <link rel="stylesheet" href="../styles/profile.css">
    <script src="../scripts/passwordEyeSwitch.js"></script>
</head>
</html>