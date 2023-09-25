<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\User::create([
            'username' => 'rachelginting',
            'name' => 'Rachel Ginting',
            'email' => 'rachelardanaputraginting@gmail.com',
            'password' => bcrypt("password"),
            'number_phone' => '081535458207',
            'address' => 'Aceh',
            'picture' => 'picture1.jpg',
            'status' => 'employee',
        ]);

        \App\Models\User::factory(500)->create();
        \App\Models\Table::create([
            'name' => 1,
            'slug' => 1,
            'status' => 1
        ]);
        \App\Models\Table::create([
            'name' => 2,
            'slug' => 2,
            'status' => 1
        ]);
        \App\Models\Table::create([
            'name' => 3,
            'slug' => 3,
            'status' => 1
        ]);

        $this->call([
            CategorySeeder::class,
        ]);

        \App\Models\Product::factory(500)->create();
    }
}
