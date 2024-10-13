<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class SearchController extends Controller
{
    public function search(Request $request)
    {
        $request->validate([
           'search' => 'required'
        ],[
            'search.required' => 'Please enter nid number'
        ]);

        $nid = $request->get('search');

        $user = User::with('vaccineCenter:id,name')
            ->where('nid', $nid)
            ->first();

        if (!$user) {
            $status = 'Not registered';
        } elseif (!$user->scheduled_date) {
            $status = 'Not scheduled';
        } elseif ($user->scheduled_date > now()->format('Y-m-d')) {
            $status = 'Scheduled';
        } else {
            $status = 'Vaccinated';
        }

        return response()->json(['status' => $status, 'user' => $user]);
    }
}

