<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GeneralQuery extends Model
{    protected $fillable = [
    'name',
    'phone',
    'subject',
    'query',
     ];
    use HasFactory;
}
