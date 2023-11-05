<?php
// include("lib/config.php");
session_start();
// session_register("adm_chk_code");

$width = 130;
$height = 35;
$im = imagecreatetruecolor($width, $height);

$transparent=imagecolorallocate($im, 253, 253, 253);

imagefilledrectangle($im, 0, 0, $width, $height, $transparent);

$color = imagecolorallocate($im, mt_rand(250,255), mt_rand(250,255), mt_rand(250,255));
imagefilledrectangle($im, 0, $height, $width, 0, $color);

for ($i = 0; $i < 6; $i++) {
    $color = imagecolorallocate($im, mt_rand(0,156), mt_rand(0,156), mt_rand(0,156));
    imageline($im, mt_rand(0, $width), mt_rand(0, $height), mt_rand(0, $width), mt_rand(0, $height), $color);
}
for ($i = 0; $i < 100; $i++) {
    $color = imagecolorallocate($im, mt_rand(200,255), mt_rand(200,255), mt_rand(200,255));
    imagestring($im, mt_rand(1, 5), mt_rand(0, $width), mt_rand(0, $height), '*', $color);
}

$_x = $width / 5;
$mm = '';
$letter1 = rand(1, 9);
$letter2 = rand(1, 9);
for ($i = 0; $i < 5; $i++) {
    $randNum = rand(1, 9);
    if ($randNum == $letter1 || $randNum == $letter2) $randNum = chr(rand(97, 122));
    $mm .= $randNum;
    $fontcolor = imagecolorallocate($im, mt_rand(0, 156), mt_rand(0,156), mt_rand(0,156));
    imagettftext($im, 20, mt_rand(-30,30), $_x * $i + mt_rand(1, 5) + 1, $height / 1.4, $fontcolor, 'cambria.ttc', $randNum);
}

header("content-type:image/png");
imagepng($im);
imagedestroy($im);
$_SESSION["vcode"] = $mm;
?>