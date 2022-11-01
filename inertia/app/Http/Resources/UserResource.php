<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

/** @mixin \App\Models\User */
class UserResource extends JsonResource
{
    /**
     * @param Request $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'email' => $this->email,
            'phone' => $this->phone,
            'designation' => $this->designation,
            'picture' => $this->picture,
            'city_state' => $this->city_state,
            'country' => $this->country,
            'organization' => $this->organization,
            'organization_email' => $this->organization_email,
            'department' => $this->department,
            'batch_from' => $this->batch_from,
            'batch_to' => $this->batch_to,
            'areas_of_expertise' => $this->areas_of_expertise,
            'category' => $this->category,
            'role' => $this->role,
            'registered_at' => $this->registered_at,
            'email_verified_at' => $this->email_verified_at,
            'remember_token' => $this->remember_token,
            'created_at' => $this->created_at->toFormattedDateString(),
//            'updated_at' => $this->updated_at,
            'import_id' => $this->import_id,
            'picture_url' => $this->picture_url,
//            'comments_count' => $this->comments_count,
//            'notifications_count' => $this->notifications_count,
//            'posts_count' => $this->posts_count,
//            'read_notifications_count' => $this->read_notifications_count,
//            'unread_notifications_count' => $this->unread_notifications_count,
        ];
    }
}
