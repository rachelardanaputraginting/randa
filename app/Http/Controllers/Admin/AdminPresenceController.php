<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\Admin\AdminPresenceResource;
use App\Models\Presence;
use App\Models\Salary;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use SimpleSoftwareIO\QrCode\Facades\QrCode; // Import kelas QrCode



class AdminPresenceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {

        // Admin
        $date = Carbon::parse(now())->format('Y:m:d');

        // Data presensi
        $presensi = [
            "date" => Carbon::now(),
        ];

        // Konversi data presensi ke JSON
        $presensiJson = json_encode($presensi);

        // Generate QR code menggunakan simple/qrcode
        $qr = QrCode::size(400); // Sesuaikan ukuran sesuai kebutuhan
        $qrCodes = $qr->generate($presensiJson)->toHtml();


        $total_presences = Presence::whereDate('presence_date', $date)->get()->count();

        $search_users = $request->input('search');

        if ($search_users) {
            $presences = Presence::query()
                ->with('user')
                ->whereHas('user', function ($query) use ($search_users) {
                    $query->where('name', 'LIKE', "%$search_users%");
                })
                ->select('id', 'user_id', 'presence_date', 'is_presence', 'created_at')
                ->whereDate('presence_date', $date)
                ->fastPaginate(10)
                ->withQueryString();
        } else {
            $presences = Presence::query()
                ->with('user')
                ->select('id', 'user_id', 'presence_date', 'is_presence', 'created_at')
                ->whereDate('presence_date', $date)
                ->fastPaginate(10);
        }

        return inertia('Admin/Presence/Index', [
            "presences" => AdminPresenceResource::collection($presences),
            "total_presences" => $total_presences,
            'qrCodes' => $qrCodes
        ]);
    }

    public function store(Request $request)
    {


        // Admin
        $adminDate = Carbon::parse(now())->format('Y:m:d');

        if (Auth::user()->status == "admin") {
            Presence::updateOrCreate([
                "user_id" => $user = $request->user_id,
                "presence_date" => $adminDate,
            ], [
                "user_id" => $user = $request->user_id,
                "presence_date" => $adminDate,
                "is_presence" => $user ? 1 : 0,
            ]);

            Salary::updateOrCreate([
                "user_id" => $user = $request->user_id,
                "date" => $adminDate,
            ], [
                'salary' => 120000,
                'total_salary' => 120000,
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        } else {
            $date = $request->date;
            $formateDate = Carbon::parse($date)->format('Y:m:d');
            if ($formateDate !== $adminDate) {
                return to_route('admin.presence.index');
            } else {

                // Employee
                Presence::updateOrCreate([
                    "user_id" => $user = $request->user_id,
                    "presence_date" => $formateDate,
                ], [
                    "user_id" => $user = $request->user_id,
                    "presence_date" => $formateDate,
                    "is_presence" => $user ? 1 : 0,
                ]);

                Salary::updateOrCreate([
                    "user_id" => $user = $request->user_id,
                    "date" => $formateDate,
                ], [
                    'salary' => 100000,
                    'total_salary' => 100000,
                    'created_at' => now(),
                    'updated_at' => now(),
                ]);
            }
        }


        return to_route('admin.presence.index');
    }
}
