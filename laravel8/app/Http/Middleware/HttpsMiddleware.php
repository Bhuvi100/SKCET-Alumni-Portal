<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class HttpsMiddleware
{
    public function handle(Request $request,Closure $next)
    {
        if(config('app.env') === 'production' && !$request->secure()) {
            return redirect()->secure($request->path());
        }
        return $next($request);
    }
}
