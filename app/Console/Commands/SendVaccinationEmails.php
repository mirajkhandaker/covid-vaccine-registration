<?php

namespace App\Console\Commands;

use App\Models\User;
use App\Notifications\VaccinationScheduleNotification;
use Illuminate\Console\Command;

class SendVaccinationEmails extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:send-vaccination-emails';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Send vaccination schedule emails to users';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $tomorrow = now()->addDay()->format('Y-m-d');

        $users = User::with('vaccineCenter:id,name')
        ->where('scheduled_date', $tomorrow)->get();

        foreach ($users as $user) {
            $user->notify(new VaccinationScheduleNotification($user));
        }
    }
}
