<?php

namespace App\Http\Controllers;

use App\Models\MentorForm;
use Illuminate\Http\Request;

class MentorFormController extends Controller
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
        'method_of_guidance' => 'required|string',
        'department' => 'required|string',
        'area_of_expertise' => 'required|string',
        'mentor_experience' => 'required|string',
        'specific_concern' => 'required|string',
    ]);

    $mentorForm = MentorForm::create([
        'user_id' => auth()->user()->id,
        'method_of_guidance' => $request->method_of_guidance,
        'department' => $request->department,
        'area_of_expertise' => $request->area_of_expertise,
        'mentor_experience' => $request->mentor_experience,
        'specific_concern' => $request->specific_concern, 
    ]);

    return redirect(RouteServiceProvider::HOME);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\MentorForm  $mentorForm
     * @return \Illuminate\Http\Response
     */
    public function show(MentorForm $mentorForm)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\MentorForm  $mentorForm
     * @return \Illuminate\Http\Response
     */
    public function edit(MentorForm $mentorForm)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\MentorForm  $mentorForm
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, MentorForm $mentorForm)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\MentorForm  $mentorForm
     * @return \Illuminate\Http\Response
     */
    public function destroy(MentorForm $mentorForm)
    {
        //
    }
}
