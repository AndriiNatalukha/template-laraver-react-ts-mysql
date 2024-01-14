<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class WelcomeController extends Controller
{
    public function index()
    {
        $users = User::all();
        return view('welcome', compact('users'));
    }

    public function getUsers()
    {
        //dd('asdfasdfasdfasdfasdf');
        $users = User::all();
        return response()->json(['users' => $users]);
    }
}
