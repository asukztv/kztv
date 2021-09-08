<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DeviceAccounting\DeviceAccountController;
use App\Http\Controllers\DeviceAccounting\MovementController;
use App\Http\Controllers\DeviceAccounting\ModernizationAccountController;


Route::middleware(['auth'])->group(function(){

    Route::get('/devices', [DeviceAccountController::class, 'index'])
            ->name('devices');

    Route::any('/devices/add', [DeviceAccountController::class, 'add'])
        ->name('devices.add');

    Route::any('/devices/add_movement_log', [MovementController::class, 'store'])
        ->name('devices.add_movement_log');

    Route::any('/devices/delete', [DeviceAccountController::class, 'delete'])
        ->name('devices.delete');

    Route::any('/devices/delete_movement_log', [MovementController::class, 'delete'])
        ->name('devices.delete_movement_log');

    Route::get('/devices/fetch_data', [DeviceAccountController::class, 'fetch_data'])
        ->name('devices.fetch_data');

    Route::get('/devices/edit_property', [DeviceAccountController::class, 'get_property_edit_form'])
        ->name('devices.get_property_edit_form');
    
        Route::post('/devices/edit_property', [DeviceAccountController::class, 'edit_property'])
            ->name('devices.edit_property');
            
    Route::any('/devices/find_devices', [DeviceAccountController::class, 'fetch_data'])
        ->name('devices.find_devices');

    Route::get('/devices/get_device_comment_log_view', [DeviceAccountController::class, 'get_device_comment_log_view'])
        ->name('devices.get_device_comment_log_view');

    Route::get('/devices/get_device_form_view', [DeviceAccountController::class, 'get_device_form_view'])
        ->name('devices.get_device_form_view');

    Route::get('/devices/get_device_log_view', [DeviceAccountController::class, 'get_device_log_view'])
        ->name('devices.get_device_log_view');

    Route::get('/devices/get_device_more_info_view', [DeviceAccountController::class, 'show_more_info'])
        ->name('devices.get_device_more_info_view');

    Route::get('/devices/get_movement_log_view', [MovementController::class, 'get_log_view'])
        ->name('devices.get_movement_log_view');

    Route::get('/devices/get_movement_log_form_view', [MovementController::class, 'get_form_view'])
        ->name('devices.get_movement_log_form_view');

    Route::any('/devices/update', [DeviceAccountController::class, 'update'])
        ->name('devices.update');

    Route::any('/devices/update_device_comment', [DeviceAccountController::class, 'update_comment'])
        ->name('devices.update_device_comment');

    Route::any('/devices/update_movement_log', [MovementController::class, 'update'])
        ->name('devices.update_movement_log');
        
    Route::get('/devices/{deviceId}/modernizations/create', [ModernizationAccountController::class, 'create'])
        ->name('modernization.create');

    Route::post('/devices/{deviceId}/modernizations/store', [ModernizationAccountController::class, 'store'])
        ->name('modernization.store');

    Route::delete('/devices/{deviceId}/modernizations/{modernizationId}/delete', [ModernizationAccountController::class, 'destroy'])
        ->name('modernization.delete');
});