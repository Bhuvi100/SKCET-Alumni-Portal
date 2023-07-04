<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\UserResource;
use Inertia\Inertia;
use App\Models\User;
use App\Providers\RouteServiceProvider;
use App\Imports\UsersImport;

use App\Http\Resources\PostResource;
use App\Models\Post;

class DashboardController extends Controller
{
    public function index()
    {   $posts = PostResource::collection(Post::with('user')->get());
        return Inertia::render('Dashboard', ['auth' => auth()->user(),'posts'=>$posts]);
    }
}
