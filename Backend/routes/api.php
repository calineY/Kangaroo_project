<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SurveysController;


Route::get('/surveys', [SurveysController::class, 'getAllSurveys']); 

