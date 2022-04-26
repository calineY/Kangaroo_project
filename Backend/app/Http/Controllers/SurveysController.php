<?php

namespace App\Http\Controllers;
use App\Models\Survey;

use Illuminate\Http\Request;

class SurveysController extends Controller
{
    public function getAllSurveys() {
        
        $surveys= Survey::getSurveys();
        return $surveys;
    
    }

}
