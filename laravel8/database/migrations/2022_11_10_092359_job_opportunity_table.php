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
         Schema::create('job_opportunities', function (Blueprint $table) {
        $table->id();
        $table->foreignId('user_id')->constrained()->cascadeOnDelete();
        $table->string('job_title');
        $table->string('company');
        $table->string('workPlace_type');
        $table->string('employment_type');
        $table->string('job_location');
        $table->string('experience');
        $table->string('skills');
        $table->string('tools');
        $table->string('job_description');
        $table->string('link');
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
