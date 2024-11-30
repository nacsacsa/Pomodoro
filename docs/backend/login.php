<?php
session_start();
include 'database.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (!isset($_POST['email']) || !isset($_POST['password'])) {
        echo json_encode(["success" => false, "message" => "Hiba: Hiányzó email vagy jelszó mező!"]);
        exit;
    }

    $email = $_POST['email'];
    $password = $_POST['password'];

    $sql = "SELECT * FROM Users WHERE email = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        $user = $result->fetch_assoc();
        if (password_verify($password, $user['password'])) {
            $_SESSION['user_id'] = $user['id'];
            $_SESSION['user_name'] = $user['name'];
            echo json_encode(["success" => true]);
        } else {
            echo json_encode(["success" => false, "message" => "Hibás jelszó!"]);
        }
    } else {
        echo json_encode(["success" => false, "message" => "Nincs ilyen email!"]);
    }
    $stmt->close();
}

$conn->close();
?>
