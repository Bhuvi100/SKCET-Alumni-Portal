<?php

namespace App\Http\Controllers;
use App\Http\Resources\UserResource;
use Inertia\Inertia;
use App\Models\User;
use Illuminate\Http\Request;
use App\Providers\RouteServiceProvider;
use App\Imports\UsersImport;
use Maatwebsite\Excel\Facades\Excel;
use Illuminate\Support\Facades\Log;

use App\Http\Resources\PostResource;
use App\Models\Post;


class ProfileController extends Controller
{

    public function uploadUsers(Request $request){
       Excel::import(new UsersImport,$request->excelFile);
        return redirect(RouteServiceProvider::HOME);
    }

    public function show(?User $user)
    {
        $user = $user->id ? $user : auth()->user();
         $posts = PostResource::collection(Post::with('user')->where('user_id', '=', $user->id)->get());
       // $posts =   PostResource::collection(Post::whereBelongsTo($user)->get());
       
        // Log::info("INFO", $posts);

        return Inertia::render('Profile/Show', ['user' => $user->toResource(), 'posts'=>$posts]);
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

        $request->validate([
          
            'name'=> 'required|string',
            'phone'=> 'required|string',
            'country'=> 'required|string',
            'city_state'=> 'required|string',
            'designation'=> 'required|string',

            'organization'=> 'nullable|string',
            'organization_email'=> 'nullable|string',
            'areas_of_expertise'=> 'nullable|string',
            'category'=> 'nullable|string',
        ]);
        $user->name = $request->name;
        $user->phone = $request->phone;
        $user->country = $request->country;
        $user->city_state = $request->city_state;
        $user->designation = $request->designation;
        $user->organization = $request->organization;
        $user->organization_email = $request->organization_email;
        $user->areas_of_expertise = $request->areas_of_expertise;
        $user->category = $request->category;
        $user->update();

        return redirect('profile');
    }

    public function destroy(User $user)
    {
        //
    }
}
