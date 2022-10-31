<?php

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

// profile
Route::get('/profile', [\App\Http\Controllers\ProfileController::class, 'index'])->name('profile');
Route::get('/updateProfile', function () {
    return Inertia::render('UpdateProfile');
})->name('updateProfile');

// forms ->->-> generalQuery successStory mentorForm
Route::get('/generalQuery', function () {
    return Inertia::render('QueriesForm');
})->name('generalQuery');
Route::post('/generalQuerySubmit', [\App\Http\Controllers\GeneralQueryController::class, 'store'])->name('generalQuerySubmit');

Route::get('/successStory', [\App\Http\Controllers\SuccessStoryController::class, 'index'])->name('successStory');
Route::post('/successStorySubmit', [\App\Http\Controllers\SuccessStoryController::class, 'store'])->name('successStorySubmit');

Route::get('/mentorForm',[\App\Http\Controllers\MentorFormController::class, 'index'])->name('mentorForm');
Route::post('/mentorFormSubmit', [\App\Http\Controllers\MentorFormController::class, 'store'])->name('mentorFormSubmit');

// import excel data
Route::get('/importUsers', function () {
    return Inertia::render('ImportData');
})->name('importUsers');
Route::post('/uploadUsers', [\App\Http\Controllers\ProfileController::class, 'uploadUsers'])->name('uploadUsers');

// adding/update post and comments
Route::post('/addPost', [\App\Http\Controllers\PostController::class, 'store'])->name('addPost');
Route::post('/updatePost/{post}', [\App\Http\Controllers\PostController::class, 'update'])->name('updatePost');

Route::get('/Posts', [\App\Http\Controllers\PostController::class, 'index'])->name('Posts');
Route::get('/MyPosts', function () {
    return Inertia::render('MyPosts');
})->name('MyPosts');


Route::get('/getComment/{post}', [\App\Http\Controllers\CommentController::class, 'index'])->name('getComment');
Route::post('/addComment/{post}', [\App\Http\Controllers\CommentController::class, 'store'])->name('addComment');



require __DIR__.'/auth.php';



Route::get('/members', function () {
    return Inertia::render('Members');
});

Route::get('/objectives', function () {
    return Inertia::render('Objectives');
});

Route::get('/gallery', function () {
    return Inertia::render('Gallery');
});

Route::get('/job', function () {
    return Inertia::render('JobForm');
});

Route::get('/guestspeaker', function () {
    return Inertia::render('GuestSpeakerform');
});

Route::get('/mediumofinstruction', function () {
    return Inertia::render('MediumOfInstructionForm');
});