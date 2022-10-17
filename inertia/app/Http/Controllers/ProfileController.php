<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use App\Models\User;
use Illuminate\Http\Request;
use App\Providers\RouteServiceProvider;
use App\Imports\UsersImport;
use Maatwebsite\Excel\Facades\Excel;

class ProfileController extends Controller
{

    public function index()
    {
        return Inertia::render('Profile',['auth'=>auth()->user()]);
    }

    public function uploadUsers(Request $request){
       Excel::import(new UsersImport,$request->excelFile);
        return redirect(RouteServiceProvider::HOME);
    }
    public function create()
    {
        //
    }


    public function store(Request $request)
    {
         //
    }


    public function show(User $user)
    {
        //
    }

    public function edit(User $user)
    {
        //
    }


    public function update(Request $request, User $user)
    {
        //
    }

    public function destroy(User $user)
    {
        //
    }
}
