<?php
session_start();
if (!isset($_SESSION['user_id'])) {
    header('Content-Type: text/html; charset=UTF-8');
    exit;
}
?>