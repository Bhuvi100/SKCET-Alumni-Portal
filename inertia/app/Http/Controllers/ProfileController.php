<?php

namespace App\Http\Controllers;
use App\Http\Resources\UserResource;
use Inertia\Inertia;
use App\Models\User;
use Illuminate\Http\Request;
use App\Providers\RouteServiceProvider;
use App\Imports\UsersImport;
use Maatwebsite\Excel\Facades\Excel;

class ProfileController extends Controller
{

    public function uploadUsers(Request $request){
       Excel::import(new UsersImport,$request->excelFile);
        return redirect(RouteServiceProvider::HOME);
    }

    public function show(?User $user)
    {
        $user = $user->id ? $user : auth()->user();

        return Inertia::render('Profile/Show', ['user' => $user->toResource()]);
    }

    public function edit(User $user)
    {
        if (auth()->id() !== $user->id) {
            return abort(401);
        }

        return Inertia::render('Profile/Edit', ['user' => $user->toResource()]);
    }


    public function update(Request $request, User $user)
    {
    }

    public function destroy(User $user)
    {
        //
    }
}
