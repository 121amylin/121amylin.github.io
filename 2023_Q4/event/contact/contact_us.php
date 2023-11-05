<?php
    // include_once("../common.php");
    session_start();
    echo "<meta http-equiv=Content-Type content=text/html; charset=utf-8 />";  
    $CustomerEmail= "";
    $code='utf-8';


    #確認google驗證碼
    // $remote_ip=$_SERVER['REMOTE_ADDR'];
    // $captcha=$_POST['g-recaptcha-response'];
    // $secret_key="6LdPlcUUAAAAAJPPWnPbBlEKykyB2dnW4pxW5Jbq";
    // $response_url='https://www.google.com/recaptcha/api/siteverify';
    // $response=json_decode(file_get_contents($response_url."?secret=".$secret_key."&response=".$captcha."&remoteip=".$remote_ip),true);



    


    ##欄位檢查
    // $category    = $_POST['category'];
    // $sex         = $_POST['sex'];
    // $Address     = $_POST['Address'];
    // $Name        = $_POST['name'];
    // $Content     = $_POST['content'];

    $Company     = $_POST['company'];
    $Position    = $_POST['position'];
    $Tel         = $_POST['tel'];
    $sex         = $_POST['gender'];
    $sexs        = $_POST['genders'];
    $sexs_str = (empty($sex))  ? $sexs : ',&nbsp;' . $sexs;
    $sex_str  = (empty($sexs)) ? $sex  : $sex . $sexs_str;
    $age         = $_POST['age'];
    $Mobile      = $_POST['mobile'];
    $time        = $_POST['time'];
    $time_str = (is_array($_POST['time'])) ? implode(',&nbsp;', $time) : '';
    $startTime   = $_POST['startTime'];
    $endTime     = $_POST['endTime'];
    $product     = $_POST['product'];
    $products    = $_POST['products'];
    $product_str  = (empty($product))  ? '' : implode(',&nbsp;', $product) ;
    $products_str = (empty($product))  ? $products    : ',&nbsp;' . $products;
    $product_str  = (empty($products)) ? $product_str : $product_str . $products_str;
    // 20200526
    $CustomerEmail   = 'jhujhu@ushio.com.tw';
    $CustomerCompany = '優志旺股份有限公司';

    $EmailSubject = $CustomerCompany . " - 聯絡我們";
    $verify_code= $_POST['verifycode'];
    $tmpstr='';


    $err_email = !preg_match('/^[0-9a-zA-Z][0-9a-zA-Z\_\.\-\+]+@[0-9a-zA-Z][0-9a-zA-Z\_\.\-]+\.[0-9a-zA-Z][0-9a-zA-Z\_\.\-]+$/i', $GuestEmail);

    

    if($Company == '')                      { $tmpstr.="請輸入 公司名稱 \\n"; }
    // if($Contact == '')                      { $tmpstr.="請輸入 聯絡人 \\n"; }
    if($Position == '')                     { $tmpstr.="請輸入 職稱 \\n"; }
    // if($GuestEmail == '')                   { $tmpstr.="請輸入 E-mail \\n"; }
    // if($err_email==1 && $GuestEmail != '' ) { $tmpstr.="E-mail 格式錯誤 \\n"; }
    if(empty($Tel))                          { $tmpstr.="請輸入 電話 \\n"; }
    if(empty($sex_str))                      { $tmpstr.="請輸入 性別 \\n"; }
    if(empty($age))                          { $tmpstr.="請輸入 年齡 \\n"; }
    if(empty($Mobile))                       { $tmpstr.="請輸入 手機 \\n"; }
    if(empty($time))                         { $tmpstr.="請輸入 方便拜訪時間 \\n"; }
    if(empty($startTime))                    { $tmpstr.="請輸入 開始時間 \\n"; }
    if(empty($endTime))                      { $tmpstr.="請輸入 結束時間 \\n"; }
    if(empty($product_str))                  { $tmpstr.="請輸入 對何種美容或皮膚產品有興趣 \\n"; }
    // if($Subject == '')                      { $tmpstr.="請輸入 諮詢服務 \\n"; }
    // if($Message == '')                      { $tmpstr.="請輸入 諮詢內容\\n"; }
    // if (preg_match("/\b(?:(?:https?|ftp):\/\/|www\.)[-a-z0-9+&@#\/%?=~_|!:,.;]*[-a-z0-9+&@#\/%=~_|]/i", $Message)) {
    //     $tmpstr.="詢問內容 不可填入連結!\\n";
    // }
    // if($Country == '')                           { $tmpstr.="請輸入 國家 \\n"; }
    // if(empty($Company_Type))               { $tmpstr.="請輸入 公司型態 \\n"; }
    // if($Address == '')                      { $tmpstr.="Please input Address \\n"; }
    // if($Name == '')                         { $tmpstr.="Please input Name \\n"; }
    // if($Content == '')                      { $tmpstr.="Please input Content \\n"; }

    // if(intval($response["success"]) !==1){
      
    //  $tmpstr.="請勾選我不是機器人"; 

    // }
    if($verify_code == '')              { $tmpstr.="請輸入驗證碼 \\n"; }
    if($_SESSION['vcode'] != $verify_code && $verify_code!='' ) { $tmpstr.="驗證碼有誤\\n"; }
   if($tmpstr!=''){
       echo "
          <meta http-equiv=Content-Type content='text/html; charset=".$code."'>
          <script language='javascript'>
            alert('" . $tmpstr . "');
            history.go(-1);
            </script>
        ";
       exit();
  }

/*
if(preg_match("/Spokesman/",$choice)){
   $CustomerEmail= "PR@unitedbiopharma.com,victor.sun@unitedbiopharma.com,";
}

if(preg_match("/Deputy_Spokesman/",$choice)){
   $CustomerEmail.= "yinglin.tsai@unitedbiopharma.com,";
}

if($CustomerEmail) $CustomerEmail = (substr($CustomerEmail, 0, -1));
*/

//20190329
 
 // $CustomerEmail = 'info@waytrain.com';
 // $CustomerEmail = 'b25661987@gtmc.com.tw';




        $mainhtml .= "\xEF\xBB\xBF<html><meta http-equiv=Content-Type content=text/html; charset=utf-8 />
            <span>※親愛的客戶 " . $CustomerCompany . "</span><br>
            <table width=\"100%\" border=\"1\" cellspacing=\"1\" cellpadding=\"2\" align=\"center\" noshade><tr>";
        
        $mainhtml .= "<tr><td width=\"20%\" align=\"right\">公司名稱:</td><td width=\"80%\">".$Company."&nbsp;</td></tr>";
        // $mainhtml .= "<tr><td width=\"20%\" align=\"right\">聯絡人:</td><td width=\"80%\">".$Contact."&nbsp;</td></tr>";
        $mainhtml .= "<tr><td width=\"20%\" align=\"right\">職稱:</td><td width=\"80%\">".$Position."&nbsp;</td></tr>";
        // $mainhtml .= "<tr><td width=\"20%\" align=\"right\">E-mail:</td><td width=\"80%\">".$GuestEmail."&nbsp;</td></tr>";
        $mainhtml .= "<tr><td width=\"20%\" align=\"right\">電話:</td><td width=\"80%\">&nbsp;". $Tel . "&nbsp;</td></tr>";
        $mainhtml .= "<tr><td width=\"20%\" align=\"right\">性別:</td><td width=\"80%\">&nbsp;". $sex_str . "&nbsp;</td></tr>";
        $mainhtml .= "<tr><td width=\"20%\" align=\"right\">年齡:</td><td width=\"80%\">&nbsp;". $age . "&nbsp;</td></tr>";
        $mainhtml .= "<tr><td width=\"20%\" align=\"right\">手機:</td><td width=\"80%\">&nbsp;". $Mobile . "&nbsp;</td></tr>";
        $mainhtml .= "<tr><td width=\"20%\" align=\"right\">方便拜訪時間:</td><td width=\"80%\">". $time_str . "&nbsp;" . $startTime . "&nbsp;~&nbsp;" . $endTime . "&nbsp;</td></tr>";
        $mainhtml .= "<tr><td width=\"20%\" align=\"right\">對何種美容或皮膚產品有興趣:</td><td width=\"80%\">&nbsp;" . $product_str . "&nbsp;</td></tr>";
        // $mainhtml .= "<tr><td width=\"20%\" align=\"right\">傳真:</td><td width=\"80%\">".$Fax."&nbsp;</td></tr>";
        // $mainhtml .= "<tr><td width=\"20%\" align=\"right\">行動電話:</td><td width=\"80%\">".$Mobile."&nbsp;</td></tr>";
        // $mainhtml .= "<tr><td width=\"20%\" align=\"right\">網頁:</td><td width=\"80%\">".$website."&nbsp;</td></tr>";
        // $mainhtml .= "<tr><td width=\"20%\" align=\"right\">國家:</td><td width=\"80%\">".$Country."&nbsp;</td></tr>";
        // $mainhtml .= "<tr><td width=\"20%\" align=\"right\">公司型態:</td><td width=\"80%\">".implode('、', $Company_Type)."&nbsp;</td></tr>";
        // $mainhtml .= "<tr><td width=\"20%\" align=\"right\">城市:</td><td width=\"80%\">".$City."&nbsp;</td></tr>";
        // $mainhtml .= "<tr><td width=\"20%\" align=\"right\">主旨:</td><td width=\"80%\">".$Subject."&nbsp;</td></tr>";
        // $mainhtml .= "<tr><td width=\"20%\" align=\"right\">詢問內容:</td><td width=\"80%\">".$Message."&nbsp;</td></tr>";
        $mainhtml .= "</table></html>";
        // $mainhtml .= "<tr><td width=\"30%\" align=\"right\">Address:</td><td width=\"70%\">".$Address."</td></tr>";
        // $mainhtml .= "<tr><td width=\"30%\" align=\"right\">Sex:</td><td width=\"70%\">".$sex."</td></tr>";


  //寄送信件
  include("class.phpmailer.php");
     
  $mail = new PHPMailer();
  $mail->Host     = "";
  $mail->Mailer   = "mail";
  $mail->ContentType  = "text/html";
  $mail->CharSet  = $code;
  $mail->Subject  = $EmailSubject;

  $mail->FromName = $Name;
  $mail->From     = $GuestEmail;
  $mail->Body     = $mainhtml;
  $mail->AddAddress($CustomerEmail);
  // $mail->AddBCC();

  if($mail->Send()) {
     $fg=1;
  } 
  //Clear set
  unset($_SESSION["vcode"]);
  $mail->ClearAddresses();
  $mail->ClearAttachments();   
   
if ($fg>0){
  echo "
    <script>
    alert('信件成功寄出!');
    window.location.href='../thanks.html';
  </script>
  ";
}else {
   echo "
  <script>
    alert('發生錯誤, 請重試!');
    window.location.href='../index.html';
  </script>
  ";
}
exit();

?>
