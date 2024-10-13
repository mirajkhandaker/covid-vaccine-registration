<?php

use App\Http\Controllers\RegistrationController;
use App\Http\Controllers\SearchController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/get-vaccine-centers', [RegistrationController::class, 'getVaccineCenters']);
Route::post('/registration', [RegistrationController::class, 'store']);
Route::get('/search',[SearchController::class, 'search']);
