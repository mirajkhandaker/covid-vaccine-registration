<?php

use App\Http\Controllers\VaccineCenterController;
use Illuminate\Support\Facades\Route;


Route::get('/{capture?}',function () {
    return view('app');
})->where('capture', '[\/\w\.-]*');

