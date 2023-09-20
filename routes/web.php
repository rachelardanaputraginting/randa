<?php

use App\Http\Controllers\Admin\AdminCategoryController;
use App\Http\Controllers\Admin\AdminDashboardController;
use App\Http\Controllers\Admin\AdminTableController;
use App\Http\Controllers\Admin\AdminTransactionController;
use App\Http\Controllers\Admin\SettingController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
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

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});


// Admin
Route::prefix('admin')->middleware('auth')->group(function() {
    // Dashboard
    Route::get('/dashboard', AdminDashboardController::class)->name('dashboard');

    // Transaction
    Route::get('/transaction', [AdminTransactionController::class, 'index'])->name('transaction');

    // Admin Category
    Route::get('/setting/category', [AdminCategoryController::class, 'index'])->name('setting.category.index');
    Route::post('/setting/category', [AdminCategoryController::class, 'store'])->name('setting.category.store');

    // Admin Table
    Route::get('/setting/table', [AdminTableController::class, 'index'])->name('setting.table.index');
});

require __DIR__.'/auth.php';
