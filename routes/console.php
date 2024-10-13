<?php

use App\Console\Commands\SendVaccinationEmails;
use Illuminate\Support\Facades\Schedule;

Schedule::command(SendVaccinationEmails::class)->dailyAt('21:00');
