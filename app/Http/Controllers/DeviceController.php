<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class DeviceController extends Controller
{
    public function show()
    {
        return view('devices');
    }

    public function add()
    {
        return view('device.add');
    }
}
