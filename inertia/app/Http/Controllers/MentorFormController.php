<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use App\Providers\RouteServiceProvider;
use App\Models\MentorForm;
use Illuminate\Http\Request;

class MentorFormController extends Controller
{
    
    public function index()
    {
        return Inertia::render('MentorForm',['auth'=>auth()->user()]);
    }

    public function create()
    {
        //
    }


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

    public function show(MentorForm $mentorForm)
    {
        //
    }


    public function edit(MentorForm $mentorForm)
    {
        //
    }


    public function update(Request $request, MentorForm $mentorForm)
    {
        //
    }

    public function destroy(MentorForm $mentorForm)
    {
        //
    }
}
