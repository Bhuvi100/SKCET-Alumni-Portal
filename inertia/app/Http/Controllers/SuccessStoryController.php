<?php

namespace App\Http\Controllers;

use App\Models\SuccessStory;
use Illuminate\Http\Request;

class SuccessStoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        
    $request->validate([
        'name' => 'required|string|max:255',
        'phone' => 'required|string',
        'achievement' => 'required|string',
        'description' => 'required|string',
        'date_of_achievement' => 'required|date',
        'video_url' => 'required|string',
        'snapshot' => 'required|file',
        
    ]);

    $successStory = SuccessStory::create([
        'name' => $request->name,
        'phone' => $request->phone,
        'achievement' => $request->achievement,
        'description' => $request->description,
        'date_of_achievement' => $request->date_of_achievement,
        'video_url' => $request->video_url,
        'snapshot' => $request->snapshot,
    ]);
    $successStory->save();
    $successStory->snapshot = $request->file('snapshot')->store("SuccessStory/snapshot/{$successStory->id}");
    $successStory->save();

    return redirect(RouteServiceProvider::HOME);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\SuccessStory  $successStory
     * @return \Illuminate\Http\Response
     */
    public function show(SuccessStory $successStory)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\SuccessStory  $successStory
     * @return \Illuminate\Http\Response
     */
    public function edit(SuccessStory $successStory)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\SuccessStory  $successStory
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, SuccessStory $successStory)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\SuccessStory  $successStory
     * @return \Illuminate\Http\Response
     */
    public function destroy(SuccessStory $successStory)
    {
        //
    }
}
