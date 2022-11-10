<?php

namespace App\Http\Controllers;
use App\Models\GuestSpeaker;
use App\Models\JobOpportunity;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Providers\RouteServiceProvider;

class formsController extends Controller
{
    
    public function guestSpeakerSubmit(Request $request)
    {
               
    $request->validate([
        'orientation_type' => 'required|string',
        'expected_audience' => 'required|string',
        'specific_concern' => 'required|string',
        'availabilityFrom' => 'required|date',
        'availabilityTo' => 'required|date',
    ]);

    $comment = GuestSpeaker::create([
        'user_id' => auth()->user()->id,
        'orientation_type' => $request->orientation_type, 
        'expected_audience' => $request->expected_audience,
        'specific_concern' => $request->specific_concern, 
        'availabilityFrom' => $request->availabilityFrom,
        'availabilityTo' => $request->availabilityTo, 
    ]);

    return Inertia::render('GuestSpeakerform',['auth' => auth()->user()]);

    }

    public function jobSubmit(Request $request)
    {
               
    $request->validate([
        'job_title' => 'required|string',
        'company' => 'required|string',
        'workPlace_type' => 'required|string',
        'employment_type' => 'required|string',
        'job_location' => 'required|string',
        'experience' => 'required|string',
        'skills' => 'required|string',
        'tools' => 'required|string',
        'job_description' => 'required|string',
        'link' => 'required|string',
    ]);

    $comment = JobOpportunity::create([
        'user_id' => auth()->user()->id,
        'job_title' => $request->job_title, 
        'company' => $request->company,
        'workPlace_type' => $request->workPlace_type, 
        'employment_type' => $request->employment_type,
        'job_location' => $request->job_location, 
        'experience' => $request->experience, 
        'skills' => $request->skills,
        'tools' => $request->tools, 
        'job_description' => $request->job_description,
        'link' => $request->link, 
    ]);

    return Inertia::render('JobForm',['auth' => auth()->user()]);
    
    }

}
