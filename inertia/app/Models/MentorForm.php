<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MentorForm extends Model
{   protected $fillable = [
    'user_id',
    'method_of_guidance',
    'department',
    'area_of_expertise',
    'mentor_experience',
    'specific_concern',
     ];
    use HasFactory;

    public function users()
    {
        return $this->belongsTo(User::class);
    }
}
