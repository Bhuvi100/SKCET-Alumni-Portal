<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

/** @mixin \App\Models\Post */
class PostResource extends JsonResource
{
    /**
     * @param Request $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'description' => $this->description,
            'likes' => $this->likes()->count(),
            'created_at' => $this->created_at->toDayDateTimeString(),
            'updated_at' => $this->updated_at,
            'comments_count' => $this->comments()->count(),

            'user_id' => $this->user_id,
            'liked_by_user' => $this->likedByUser(),

            'user' => new UserResource($this->whenLoaded('user')),

        ];
    }
}
