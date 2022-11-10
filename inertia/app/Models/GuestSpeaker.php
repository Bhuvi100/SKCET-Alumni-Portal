<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GuestSpeaker extends Model
{  
     protected $fillable = [
    'user_id',
    'orientation_type',
    'expected_audience',
    'specific_concern',
    'availabilityFrom',
    'availabilityTo',
     ];

    use HasFactory;
}
