<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email')->unique();
            $table->string('password')->nullable();
            $table->string('phone', 20)->nullable();
            $table->string('designation')->nullable();
            $table->string('picture')->nullable();
            $table->string('city_state')->nullable();
            $table->string('country')->nullable();
            $table->string('organization')->nullable();
            $table->string('organization_email')->nullable();
            $table->string('department')->nullable();
            $table->string('batch_from')->nullable();
            $table->string('batch_to')->nullable();
            $table->string('areas_of_expertise')->nullable();
            $table->string('category')->nullable();
            $table->string('role')->default('user')->nullable();
            $table->timestamp('registered_at')->nullable();
            $table->timestamp('email_verified_at')->nullable();
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
};
