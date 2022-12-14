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
        // \App\Models\User::factory(10)->create();
         \App\Models\User::factory()->create([
             'name' => 'Test User',
             'email' => 'test@example.com',
             'phone' => '1234567899',
             'password' => \Hash::make('password'),
             'designation' => 'manager',
             'city_state' => 'cuddalore',
             'country' => 'India',
             'organization' => 'intel',
             'organization_email' => 'balatest@intel.co.in',
             'category' => 'Entrepreneurs',
             'role' => 'user',
         ]);
    }
}
