<?php
// Kết nối đến cơ sở dữ liệu
$host = "localhost";
$username = "root";
$password = "";
$dbname = "restaurant";
$conn = mysqli_connect($host, $username, $password, $dbname);

// Kiểm tra kết nối
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}

// Lấy thông tin bình luận từ form đăng bình luận
if(isset($_POST['name'])) {
  $name = $_POST["name"];
  $email = $_POST["email"];
  $comment = $_POST["comment"];

  // Thêm bình luận vào cơ sở dữ liệu
  $sql = "INSERT INTO comments (name, email, comment) VALUES ('$name', '$email', '$comment')";
  if (mysqli_query($conn, $sql)) {
    echo "Bình luận của bạn đã được gửi thành công.";
  } else {
    echo "Lỗi: " . $sql . "<br>" . mysqli_error($conn);
  }
}

// // Duyệt bình luận đã được phê duyệt
// $sql = "SELECT * FROM comments WHERE approved = 1 ORDER BY created_at DESC";
// $result = mysqli_query($conn, $sql);

// if (mysqli_num_rows($result) > 0) {
//   while ($row = mysqli_fetch_assoc($result)) {
//     echo '<div class="comment">
//             <h4>' . $row['name'] . '</h4>
//             <p>' . $row['comment'] . '</p>
//             <small>' . $row['created_at'] . '</small>
//           </div>';
//   }
// }

// Đóng kết nối đến cơ sở dữ liệu
mysqli_close($conn);
?>





