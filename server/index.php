<?php
require_once('./getid3/getid3.php');

function dump_array($data) {
    $stream = "";
    for ($i=0; $i < count($data);$i++){
        $stream = $stream.str_replace('"', '\"', $data[$i]);
    }

    return $stream;
}

function writeData($fileName, $txt){
    $file = fopen($fileName, "w") or die("Unable to open file!");
    fwrite($file, $txt);
    fclose($file);
}

function scan_music($dir){
    $path = $dir;
    $file_Write = fopen("song_list.json", "w") or die("Unable to open file!");
    fwrite($file_Write, '[');

    function getFiles($path, $file_Write) {
        $getID3 = new getID3;
        $data = "";
        if ($handle = opendir($path)) {
            while ( false !== ($file = readdir($handle)) ) {
                if ( $file != "." && $file != ".." ) {
                    if( is_dir($path . '/' . $file) ) {
                        getFiles($path . '/' . $file, $file_Write);
                    }
                    $fileInfo = pathinfo($file);
                    $allowedExtensions = array('mp3', 'wav', 'ogg', 'flac');
                    if( in_array($fileInfo['extension'], $allowedExtensions) ) {
                        // echo "<br>>>"; print_r($ThisFileInfo); echo "<br><br>";
                        try {
                            $ThisFileInfo = $getID3->analyze($path."\\".$file);
                            fwrite($file_Write, '{"link": "server/'.str_replace('"', '\"', $ThisFileInfo["filepath"]).'/'.$file.'", "name": "');
                            
                                if ($ThisFileInfo["tags"]['id3v2']['title'] == "") {
                                fwrite($file_Write,$file.'", "artist": "Unknown Artist", "genre": "General", "album": "Unknown Album", "duration": "'.$ThisFileInfo["playtime_string"].'", "picture": ""},');
                            } else {
                                fwrite($file_Write, dump_array($ThisFileInfo["tags"]['id3v2']['title']).'", "artist": "'.dump_array($ThisFileInfo["tags"]['id3v2']['artist']).'", "genre": "'.dump_array($ThisFileInfo["tags"]['id3v2']["genre"]).'", "album": "'.dump_array($ThisFileInfo["tags"]['id3v2']["album"]).'", "duration": "'.$ThisFileInfo["playtime_string"].'", "picture": "');
                                fwrite($file_Write, '"},');
                            }
                        } 
                        catch (exception $e) {
                            echo "";
                        }
                    }
    
                }
            }
            closedir($handle);
        }
        return $data;
    }
    getFiles($path, $file_Write);
    fwrite($file_Write, '{"end": "EOL"}]');
}

if (isset($_GET["resync"])) {
    scan_music(getcwd()."./music");
}

if (isset($_GET["id"])) {
    $json = file_get_contents('song_list.json');   
    $json_data = json_decode($json,true);
    echo '{"link": "' . str_replace(str_replace("\\","/", getcwd()), "",$json_data[$_GET["id"]]["link"]) . '"}';

    if (isset($_SESSION["private"]) && $_SESSION["private"] == "false") {
        // echo "Session On Private";
    }
}
?>
