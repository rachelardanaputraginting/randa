<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\AdminUserRequest;
use App\Http\Resources\Admin\AdminUserResource;
use App\Models\User;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Collection;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AdminUserController extends Controller
{
    public function index()
    {

        $collection = [
            ['id' => 1, 'name' => 'owner'],
            ['id' => 2, 'name' => 'admin'],
            ['id' => 3, 'name' => 'employee'],
        ];

        $statuses = new Collection($collection);

        $total_employee = User::get()->count();
        $users = User::query()
            ->select('id', 'name', 'username', 'email', 'number_phone', 'address', 'status', 'picture', 'password')
            // ->where('status', 'employee')
            ->latest()
            ->fastPaginate();
        return inertia('Admin/Employee/Index', [
            "employees" => AdminUserResource::collection($users),
            "total_employees" => $total_employee,
            "statuses" => $statuses
        ]);
    }

    public function store(AdminUserRequest $request)
    {
        $picture = $request->file('picture');
        User::create([
            "name" => $name = $request->name,
            "username" => $request->username,
            "email" => $request->email,
            "number_phone" => $request->number_phone,
            "address" => $request->address,
            "status" => $request->status['name'],
            "password" => Hash::make($request->password),
            "picture" => $request->hasFile('picture') ? $picture->storeAs('images/experiences', $name . '.' . $picture->extension()) : null
        ]);

        return back();
    }


    public function update(AdminUserRequest $request, User $User)
    {
        $User->update([
            "number" => $number = $request->number ? $request->number : $User->number,
            "slug" => str($number)->slug(),
        ]);

        return back();
    }

    public function destroy(User $User)
    {
        if ($User->picture) {
            Storage::delete($User->picture);
        }

        $User->delete();
        return back();
    }
}
