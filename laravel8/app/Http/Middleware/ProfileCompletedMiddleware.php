<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class ProfileCompletedMiddleware
{
    public function handle(Request $request, Closure $next)
    {
        if (auth()->check() && auth()->user()->import_id && !auth()->user()->registered_at) {
            auth()->logout();

            return redirect()->route('login');
        }

        return $next($request);
    }
}
