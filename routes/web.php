<?php

use App\Http\Controllers\UserController;
use App\Http\Controllers\UserIndexController;
use App\Http\Controllers\UserStoryController;
use App\Mail\NewUserNeedsApproval;
use App\Models\User;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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
})->middleware(['auth', 'verified', 'approved'])->name('dashboard');

Route::get('/users', [UserIndexController::class, '__invoke'])
    ->middleware(['auth', 'verified', 'approved'])
    ->name('user.index');

Route::get('/user/{user}/edit', [UserController::class, 'edit'])
    ->middleware(['auth', 'verified', 'approved', 'role:admin'])
    ->name('user.edit');

Route::post('/user/{user}/edit/avatar', [UserController::class, 'setAvatar'])
    ->middleware(['auth', 'verified', 'approved'])
    ->name('user.avatar');

Route::patch('/user/{user}/edit', [UserController::class, 'update'])
    ->middleware(['auth', 'verified', 'approved'])
    ->name('user.update');

Route::delete('/user/{user}/delete', [UserController::class, 'delete'])
    ->middleware(['auth', 'verified', 'role:admin'])
    ->name('user.delete');

Route::get('/story', [UserStoryController::class, 'edit'])
    ->middleware(['auth', 'verified', 'approved'])
    ->name('story.edit');

Route::patch('/story/{user}', [UserStoryController::class, 'update'])
    ->middleware(['auth', 'verified', 'approved'])
    ->name('story.update');

Route::get('/info', function () {
    return redirect()->to(route('posts.index'));
})->middleware(['auth', 'verified', 'approved'])
    ->name('info');

Route::resource('/teams', \App\Http\Controllers\TeamController::class)
    ->middleware(['auth', 'verified', 'approved']);

Route::get('/awaiting-approval', function () {
    return Inertia::render('AwaitingApproval');
})->middleware(['auth'])->name('approval');

Route::resource('posts', \App\Http\Controllers\PostController::class)->middleware('auth');

require __DIR__ . '/auth.php';
