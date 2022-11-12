<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Mail\CompleteProfileMail;
use App\Models\User;
use App\Providers\RouteServiceProvider;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Validation\Rules;
use Inertia\Inertia;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     *
     * @return \Inertia\Response
     */
    public function create()
    {
        return Inertia::render('Auth/Register');
    }

    /**
     * Handle an incoming registration request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => ['required', 'confirmed', 'min:8'],
            'phone'  => 'required|string|max:20|min:6',
            'designation' => 'required|string|max:255',
            'picture' => 'nullable|file|mimes:.jpg,.png,.jpeg',
            'city_state' => 'required|string|max:255',
            'country' => 'required|string|max:255',
            'organization' => 'required|string|max:255',
            'organization_email' => 'required|email|max:255',
            'department' => 'required|string|max:255',
            'batch_from' => 'required|numeric|min:1998|max:2018', //TODO Update for next year
            'batch_to' => 'required|numeric|min:1998|max:2022', //TODO Update for next year,
            'areas_of_expertise' => 'required|string|max:255',
            'category' => 'required|string|max:255',
        ]);

        $validated['password'] = Hash::make($validated['password']);

        unset($validated['picture']);

        if ($request->hasFile('picture')) {
            $validated['picture'] = $request->file('picture')->store('images/users', ['disk' => 'public']);
        }

        $user = User::forceCreate($validated);

        event(new Registered($user));

        Auth::login($user);

        return redirect()->route('verification.notice');
    }

    public function complete_mail(Request $request)
    {
        $request->validate([
            'email' => ['required', 'email'],
        ]);

        $user = User::whereEmail($request->email)->firstOrFail();

        if (!$user->import_id || $user->registered_at) {
            return abort(401);
        }

        Mail::to($user)->send(new CompleteProfileMail($user));

        session()->flash('status', 'success');
        session()->flash('message', 'Complete Profile Email Sent Successfully');

        return back();
    }

    public function complete_view(User $user)
    {
        Auth::login($user);

        $user->markEmailAsVerified();

        return Inertia::render('Auth/CompleteProfile', [
            'user' => $user,
            'status' => session('status'),
            'message' => session('message')
        ]);
    }

    /**
     * Handle an incoming registration request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function complete(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'password' => ['required', 'confirmed', 'min:8'],
            'phone'  => 'required|string|max:20|min:6',
            'designation' => 'required|string|max:255',
            'picture' => 'nullable|file|mimes:jpg,png,jpeg',
            'city_state' => 'required|string|max:255',
            'country' => 'required|string|max:255',
            'organization' => 'required|string|max:255',
            'organization_email' => 'required|email|max:255',
            'department' => 'required|string|max:255',
            'batch_from' => 'required|numeric|min:1998|max:2018', //TODO Update for next year
            'batch_to' => 'required|numeric|min:1998|max:2022', //TODO Update for next year,
            'areas_of_expertise' => 'required|string|max:255',
            'category' => 'required|string|max:255',
        ]);

        $validated['password'] = Hash::make($validated['password']);

        $validated['registered_at'] = now();

        unset($validated['picture']);

        if ($request->hasFile('picture')) {
            $validated['picture'] = $request->file('picture')->store('images/users', ['disk' => 'public']);
        }

        $user = auth()->user();

        $user->forceFill($validated)->save();

        return redirect()->route('dashboard');
    }
}
