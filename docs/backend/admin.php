<?php
session_start();
include 'database.php';

if (!isset($_SESSION['role']) || $_SESSION['role'] !== 'admin') {
    header("Location: index.php");
    exit;
}

$sql = "SELECT id, name, email, role FROM Users";
$result = $conn->query($sql);
?>
<!DOCTYPE html>
<html lang="hu">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Panel</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
</head>
<body>
<div class="container mt-4">
    <h1>Admin Panel</h1>
    <a href="index.php" class="btn btn-primary mb-3">Vissza</a>
    <button class="btn btn-success mb-3" data-toggle="modal" data-target="#addUserModal">Új Felhasználó Hozzáadása</button>

    <table class="table table-bordered">
        <thead>
        <tr>
            <th>ID</th>
            <th>Név</th>
            <th>Email</th>
            <th>Szerep</th>
            <th>Műveletek</th>
        </tr>
        </thead>
        <tbody>
        <?php while ($row = $result->fetch_assoc()): ?>
            <tr>
                <td><?= htmlspecialchars($row['id']) ?></td>
                <td><?= htmlspecialchars($row['name']) ?></td>
                <td><?= htmlspecialchars($row['email']) ?></td>
                <td><?= htmlspecialchars($row['role']) ?></td>
                <td>
                    <button class="btn btn-warning btn-sm" data-toggle="modal" data-target="#editUserModal" onclick="populateEditForm(<?= $row['id'] ?>)">Szerkesztés</button>
                    <a href="delete_user.php?id=<?= $row['id'] ?>" class="btn btn-danger btn-sm" onclick="return confirm('Biztosan törlöd?')">Törlés</a>
                </td>
            </tr>
        <?php endwhile; ?>
        </tbody>
    </table>
