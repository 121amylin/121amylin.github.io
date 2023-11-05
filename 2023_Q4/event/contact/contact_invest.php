<?php

    include_once("../common.php");
    global $con;


    echo "<meta http-equiv=Content-Type content='text/html; charset=utf-8' />";
    ##欄位檢查

    $skills      = $_POST['skills'];
    $stgroup     = $_POST['stgroup'];
    $name        = $_POST['name'];
    $Email       = $_POST['E-mail'];
    $stgroupnon  = $_POST['stgroupnon'];
    $verify_code = $_POST['verifyseecode'];
    $tmpstr='';

    $err_email = !preg_match('/^[0-9a-zA-Z][0-9a-zA-Z\_\.\-\+]+@[0-9a-zA-Z][0-9a-zA-Z\_\.\-]+\.[0-9a-zA-Z][0-9a-zA-Z\_\.\-]+$/i', $Email);

            $skillsarray = array("1"=>"醫療專業類","2"=>"生技產業研發類","3"=>"生技產業管理類","4"=>"生醫學術研究類","5"=>"其他生技/醫療類",
                         "6"=>"電子科技/資訊/軟體/半導體","7"=>"一般傳統製造","8"=>"礦業/土石能源採取","9"=>"法律/會計/顧問/研發/設計","10"=>"金融投顧/保險相關",
                         "11"=>"法律/會計/顧問/研發/設計","12"=>"運輸物流/倉儲/貿易","13"=>"建築營造/不動產相關",
                         "14"=>"醫療照護/環境衛生","15"=>"農林漁牧/水電資源","16"=>"一般服務業","17"=>"旅遊/休閒/運動","18"=>"餐飲/住宿服務","19"=>"大眾傳播相關",
                         "20"=>"教育/出版/藝文相關","21"=>"批發/零售/傳直銷"
                         );
    if($skills == '')          { $tmpstr.="請選擇 產業類別 \\n"; }
    if($stgroup == '' && $stgroupnon=='')         { $tmpstr.="請選擇 所需類別 \\n"; }
    if($name == '')            { $tmpstr.="請輸入 姓名 \\n"; }
    if($Email == '')           { $tmpstr.="請輸入 E-mail \\n"; }
    if($err_email==1 && $Email != '' ){ $tmpstr.="E-mail 格式錯誤 \\n"; }
    if($verify_code == '')     { $tmpstr.="請輸入 驗證碼 \\n"; }
    if($_SESSION['see_code'] != $verify_code && $verify_code!='' ) { $tmpstr.="驗證碼錯誤 \\n"; }

    if($tmpstr!=''){
    echo "
      <meta http-equiv=Content-Type content='text/html; charset=utf-8'>
      <script language='javascript'>
        alert('".$tmpstr."\\n');
        history.go(-1);
        </script>
    ";

    exit();
    }


if($tmpstr==''){


    if(empty($stgroupnon)) {
     foreach($stgroup as $kk=>$vv){
      $qid = mysqli_query($con,"INSERT INTO `subscriber_list` (sgroup,name, email,status,skills,skillsname)
				       	    VALUES ('".$vv."' , '".$name."' , '".$Email."' , '1' , '".$skills."','".$skillsarray["$skills"]."' )");
     }
    }

    if(!empty($stgroupnon)) {
        $qid = mysqli_query($con,"UPDATE subscriber_list SET status='0' WHERE email='".$Email."' ");
    }

	echo "
    <script>
	  alert('資料已成功送出!');
	  window.location.href='/investment-mail.html';
	</script>
	";

      unset($_SESSION["see_code"]);
         exit();
}


?>
