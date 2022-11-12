<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Models\Comment;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Providers\RouteServiceProvider;
class CommentController extends Controller
{
   
    public function index(Post $post)
    {   $comment = Comment::where('post_id',$post->id)->where('comment_id',null)->with(['user','replies.user'])->get();
        return response()->json($comment);   
    }

    public function create()
    {
        //
    }

    public function store(Request $request, Post $post)
    {
               
    $request->validate([
        'description' => 'required|string',
        'comment_id' =>['sometimes','nullable','numeric']  
    ]);

    $comment = Comment::create([
        'user_id' => auth()->user()->id,
        'post_id' => $post->id,
        'description' => $request->description, 
        'comment_id' => $request->comment_id,
    ]);

    return redirect(RouteServiceProvider::HOME);
    }

    public function show(Comment $comment)
    {
        //
    }

    public function edit(Comment $comment)
    {
        //
    }


    public function update(Request $request, Comment $comment)
    {
        //
    }


    public function destroy(Comment $comment)
    {
        //
    }
}
