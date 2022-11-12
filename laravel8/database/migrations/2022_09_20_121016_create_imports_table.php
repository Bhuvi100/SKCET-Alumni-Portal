<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration{
    public function up()
    {
        Schema::create('imports', function (Blueprint $table) {
            $table->id();
            $table->string('file_name');
            $table->bigInteger('users')->default(0);
            $table->enum('status', ['W', 'P', 'C', 'F'])->default('W');
            $table->foreignId('imported_by')->constrained('users')->cascadeOnDelete();
            $table->string('file')->nullable();
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('imports');
    }
};
