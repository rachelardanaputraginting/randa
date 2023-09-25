<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\Admin\AdminCartResource;
use App\Http\Resources\Admin\AdminProductResource;
use App\Http\Resources\Admin\AdminTableResource;
use App\Models\Cart;
use App\Models\Category;
use App\Models\Invoice;
use App\Models\Product;
use App\Models\Table;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class AdminTransactionController extends Controller
{
    public $tables;

    public function __construct()
    {
        $this->tables = Table::select('id', 'name', 'slug')->where('status', 1)->get();
    }

    public function index(Request $request)
    {
        $search_products = $request->input('query');
        if ($search_products) {
            $products = Product::query()
                ->where('name', 'LIKE', "%$search_products%")
                ->select('id', 'category_id', 'name', 'slug', 'price', 'picture')
                ->when($request->category, fn ($q, $v) => $q->whereBelongsTo(Category::where('slug', $v)->first()))
                ->latest()
                ->fastPaginate(10)->withQueryString();
        } else {
            $products = Product::query()
                ->select('id', 'category_id', 'name', 'slug', 'price', 'picture')
                ->when($request->category, fn ($q, $v) => $q->whereBelongsTo(Category::where('slug', $v)->first()))
                ->latest()
                ->fastPaginate(10)->withQueryString();
        }

        $carts = DB::table('carts')
            ->join('products', 'carts.product_id', '=', 'products.id')
            ->select('carts.id', 'carts.price', 'carts.quantity', 'products.name AS product_name', 'products.slug AS product_slug', 'products.price AS product_price', 'products.picture AS product_picture')
            ->where('carts.status', 0)
            ->where('carts.user_id', $request->user()->id)
            ->get();

            $today = Carbon::now()->format('Y-m-d');
        $invoices = Invoice::where('succeeded_at', $today)->get();

        return inertia('Admin/Transaction/Index', [
            "categories" => Category::query()->select('id', 'name', 'icon', 'slug')->get(),
            "products" => AdminProductResource::collection($products),
            "carts" => $carts,
            "tables" =>  AdminTableResource::collection($this->tables),
            "invoices" => $invoices
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
