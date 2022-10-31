<?php
namespace App\Http\Controllers;
use App\Models\Post;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Providers\RouteServiceProvider;


class PostController extends Controller
{

    public function index()
    {   
        $posts = Post::with('user')->get();
        return  response()->json([
            "posts" => $posts
        ]); 
   
    }



    public function create()
    {
        //
    }

   
    public function store(Request $request)
    {
                     
    $request->validate([
        'title' => 'required|string',
        'description' => 'required|string',
    ]);

    $post = Post::create([
        'user_id' => auth()->user()->id,
        'title' => $request->title, 
        'description' => $request->description, 
    ]);

    return redirect(RouteServiceProvider::HOME);
    }

 
    public function show(Post $post)
    {
        //
    }

  
    public function edit(Post $post)
    {
        //
    }

 
    public function update(Request $request, Post $post)
    {
        $request->validate([
            'title' => 'required|string',
            'description' => 'required|string',
        ]);
    
   
        $post->title = $request->title;
        $post->description = $request->description;
        $post->update();

    
        return redirect(RouteServiceProvider::HOME);
    }


    public function destroy(Post $post)
    {
        //
    }
}
