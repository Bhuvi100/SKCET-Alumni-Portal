<?php

use App\Http\Controllers\PostController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Foundation\Auth\EmailVerificationRequest;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::get('/email/verify', function () {
    return view('auth.verify-email');
})->middleware('auth')->name('verification.notice');

Route::get('/email/verify/{id}/{hash}', function (EmailVerificationRequest $request) {
    $request->fulfill();
 
    return redirect('/home');
})->middleware(['auth', 'signed'])->name('verification.verify');

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::resource('posts', PostController::class);

Route::get('/generalQuery', function () {
    return Inertia::render('QueriesForm');
})->name('generalQuery');
Route::post('/generalQuerySubmit', [\App\Http\Controllers\GeneralQueryController::class, 'store'])->name('generalQuerySubmit');;

Route::get('/successStory', function () {
    return Inertia::render('SuccessStoriesForm');
})->name('successStory');
Route::post('/successStorySubmit', [\App\Http\Controllers\SuccessStoryController::class, 'store']);

Route::get('/mentorForm', function () {
    return Inertia::render('MentorForm');
})->name('mentorForm');
Route::post('/successStorySubmit', [\App\Http\Controllers\MentorFormController::class, 'store']);

require __DIR__.'/auth.php';
