<?php
if(isset($_GET["create"]) && isset($_POST)){
    $contents=file_get_contents("jsons/currentResearch.json");
    $contents=json_decode($contents);

    unset($_POST['hiddenField']);
    $new=$_POST;
    array_unshift($contents, $new);
    $new_array=json_encode($contents);
    file_put_contents("jsons/currentResearch.json", $new_array);
    header("Location: edit.php");
    exit();
}
else if(isset($_GET["delete"]) && isset($_POST)){
    $contents=file_get_contents("jsons/currentResearch.json");
    $contents=json_decode($contents,true);

    unset($_POST['hiddenField']);
    // $new=$_POST;
    $index=0;
    echo $_POST['title'];
    foreach ($contents as $key=>$value) {
        if($value['title']==$_POST['title']){
            $index=$key;
            echo $index;
            break;
        }
        // echo $value['date']."<br>";
    }
    // var_dump($contents);
    array_splice($contents,$index,1);

    // array_unshift($contents, $new);
    $new_array=json_encode($contents);
    file_put_contents("jsons/currentResearch.json", $new_array);
    header("Location: edit.php");
    exit();
}else if(isset($_GET["update"]) && isset($_POST)){
    $contents=file_get_contents("jsons/currentResearch.json");
    $contents=json_decode($contents,true);

    // $new=$_POST;
    $index=0;
    foreach ($contents as $key=>$value) {
        if($value['title']==$_POST['hiddenField']){
            $index=$key;
            echo $index;
            break;
        }
        // echo $value['date']."<br>";
    }
    unset($_POST['hiddenField']);
    $contents[$index]=$_POST;
    // var_dump($contents);
    // array_splice($contents,$index,1);

    // array_unshift($contents, $new);
    $new_array=json_encode($contents);
    file_put_contents("jsons/currentResearch.json", $new_array);
    header("Location: edit.php");
    exit();
}


?>