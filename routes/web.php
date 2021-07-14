<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DeviceController;

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
    return view('welcome');
});

Route::get('/dashboard', function () {
    return view('dashboard');
})
    // ->middleware(['auth'])
    ->name('dashboard');

Route::get('/devices', [DeviceController::class, 'show'])
    // ->middleware(['auth'])
    ->name('devices');

    Route::any('/devices/update', [DeviceController::class, 'update'])
    // ->middleware(['auth'])
    ->name('devices.update');

    Route::get('/devices/delete', [DeviceController::class, 'delete'])
    // ->middleware(['auth'])
    ->name('devices.delete');

require __DIR__.'/auth.php';