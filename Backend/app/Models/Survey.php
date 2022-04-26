<?php

namespace App\Models;


class Survey{

    public function getSurveys() {

        $path = storage_path('app/json_data');

        $files = File::allFiles($path);

        //for each file in the data folder save distinct surveys in result array
        $result=[];
        foreach ($files as $file) {
            $contents = file_get_contents($file);
            $content = json_decode($contents);
            if(!in_array($content->survey,$result))
                array_push($result,$content->survey);
        }
        return $result;

    }

}