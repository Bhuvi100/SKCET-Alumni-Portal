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
        Schema::create('guest_speakers', function (Blueprint $table) {

        $table->id();
        $table->foreignId('user_id')->constrained()->cascadeOnDelete();
        $table->string('orientation_type');
        $table->string('expected_audience');
        $table->string('specific_concern');
        $table->date('availabilityFrom');
        $table->date('availabilityTo');
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
        //
    }
};
