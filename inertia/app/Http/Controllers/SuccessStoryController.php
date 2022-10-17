<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use App\Models\SuccessStory;
use Illuminate\Http\Request;
use App\Providers\RouteServiceProvider;

class SuccessStoryController extends Controller
{

    public function index()
    {
        return Inertia::render('SuccessStoriesForm',['auth'=>auth()->user()]);
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        
    $request->validate([
        'achievement' => 'required|string',
        'category'=> 'required|string',
        'description' => 'required|string',
        'date_of_achievement' => 'required|date',
        'video_url' => 'required|string',
        'snapshot' => 'required|file', 
    ]);

    $successStory = SuccessStory::create([
   
        'user_id' => auth()->user()->id,
        'achievement' => $request->achievement,
        'category' => $request->category,
        'description' => $request->description,
        'date_of_achievement' => $request->date_of_achievement,
        'video_url' => $request->video_url,
       // 'snapshot' => $request->snapshot,
    ]);
   
    $successStory->snapshot = $request->file('snapshot')->store("SuccessStory/snapshot/{$successStory->id}");
    $successStory->save();


    return redirect(RouteServiceProvider::HOME);
    }

    
    public function show(SuccessStory $successStory)
    {
        //
    }


    public function edit(SuccessStory $successStory)
    {
        //
    }

 
    public function update(Request $request, SuccessStory $successStory)
    {
        //
    }


    public function destroy(SuccessStory $successStory)
    {
        //
    }
}
