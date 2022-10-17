<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Models\User;
use App\Providers\RouteServiceProvider;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

class AuthenticatedSessionController extends Controller
{
    public function validate_email(Request $request)
    {
        $request->validate([
            'email' => ['required', 'email',
                function ($attribute, $value, $fail) {
                    $user = User::firstWhere('email', $value);
                    if (!$user) {
                        $fail(trans("validation.email_not_found", ['value' => $value]));
                    } else if ($user->import_id && !$user->registered_at) {
                        $fail(trans('validation.email_not_signed'));
                    }
                }]
        ]);

        return response('', 200);
    }

    /**
     * Display the login view.
     *
     * @return \Inertia\Response
     */
    public function create()
    {
        return Inertia::render('Auth/Login', [
            'canResetPassword' => Route::has('password.request'),
            'status' => session('status'),
            'email_not_found' => trans('validation.email_not_found')[0],
            'email_not_signed' => trans('validation.email_not_signed')[0],
        ]);
    }

    /**
     * Handle an incoming authentication request.
     *
     * @param  \App\Http\Requests\Auth\LoginRequest  $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(LoginRequest $request)
    {
        if (auth()->check() && auth()->user()->import_id && !auth()->user()->registered_at) {
            return redirect()->route('login');
        }

        $request->authenticate();

        $request->session()->regenerate();

        return redirect()->intended(RouteServiceProvider::HOME);
    }

    /**
     * Destroy an authenticated session.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function destroy(Request $request)
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect('/');
    }
}
