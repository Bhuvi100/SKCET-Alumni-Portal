<?php

namespace App\Models;

use App\Http\Resources\UserResource;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\Storage;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable implements MustVerifyEmail
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'phone',
        'designation',
        'picture',
        'city_state',
        'country',
        'organization',
        'organization_email',
        'department',
        'batch_from',
        'batch_to',
        'areas_of_expertise',
        'category',
        'role',
        'import_id',
        'registered_at'
    ];

    protected $guarded = [
        'password'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];


    public function posts()
    {
        return $this->hasMany(Post::class);
    }

    public function comments()
    {
        return $this->hasMany(Comment::class);
    }

    public function getpictureUrl()
    {    
        return $this->getAttribute('picture') ? Storage::disk('public')
            ->url(str_replace('public/', '', $this->getAttribute('picture'))) : asset('/assets/user.png');
    }

    public function toResource()
    {
        return json_decode(json_encode(new UserResource($this->getModel())));
    }
}
