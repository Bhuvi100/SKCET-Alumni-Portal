<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SuccessStory extends Model
{   protected $fillable = [
    'user_id',
    'achievement',
    'category',
    'description',
    'date_of_achievement',
    'video_url',
    'snapshot',

     ];
    use HasFactory;
}
