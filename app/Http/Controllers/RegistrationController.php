<?php

namespace App\Http\Controllers;

use App\Http\Requests\RegistrationRequest;
use Carbon\Carbon;
use App\Models\User;
use App\Models\VaccineCenter;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class RegistrationController extends Controller
{
    public function getVaccineCenters()
    {
        $centers = VaccineCenter::select("id", "name")->orderBy("name")->get();
        return response()->json($centers);
    }

    public function store(RegistrationRequest $request)
    {
        try {
            DB::transaction(function () use ($request) {
                $user = User::create(
                    [
                        'name' => $request->input('name'),
                        'email' => $request->input('email'),
                        'nid' => $request->input('nid'),
                        'vaccine_center_id' => $request->input('vaccine_center_id'),
                        'scheduled_date' => $this->getNextAvailableDate(now(), $request->input('vaccine_center_id')),
                    ]
                );
            });
            return response()->json(["message" => "Registration successful!"], 201);
        }catch (\Exception $exception){
            Log::error($exception->getMessage(), $exception->getTrace());
            return response()->json(["message" => "Unable to complete the registration."], 500);
        }
    }

    private function getNextAvailableDate($date, $center_id)
    {
        $date = Carbon::parse($date);
        $center = VaccineCenter::find($center_id);
        $date->addDays(2);

        while (true) {
            if (in_array($date->format('l'), ['Friday', 'Saturday'])) {
                $date->addDay();
                continue;
            }

            $count = User::where('vaccine_center_id', $center_id)
                ->whereDate('scheduled_date', $date->format('Y-m-d'))
                ->count();

            if ($count < $center->daily_limit) {
                break;
            }

            $date->addDay();
        }

        return $date->format('Y-m-d');
    }
}
