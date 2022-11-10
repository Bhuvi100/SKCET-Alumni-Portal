<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class JobOpportunity extends Model
{    protected $fillable = [
    'user_id',
    'job_title',
    'company',
    'workPlace_type',
    'employment_type',
    'job_location',
    'experience',
    'skills',
    'tools',
    'job_description',
    'link',
     ];
    use HasFactory;
}
