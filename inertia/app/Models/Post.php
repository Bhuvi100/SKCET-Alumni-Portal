<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{   
    protected $fillable = [
        'user_id',
        'title',
        'description',
        'likes',
      
    ];
    use HasFactory;

    public function likes(){
        return $this->hasMany(Like::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function likedByUser()
    {
        return $this->likes()->where('user_id',auth()->id())->exists();
    }
    
    public function comments()
    {
        return $this->hasMany(Comment::class);
    }
}
