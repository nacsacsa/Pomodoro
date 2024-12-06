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
?>