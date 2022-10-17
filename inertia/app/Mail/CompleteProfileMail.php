<?php

namespace App\Mail;

use App\Models\User;
use Illuminate\Mail\Mailable;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Support\Facades\Lang;
use Illuminate\Support\Facades\URL;

class CompleteProfileMail extends Mailable
{
    public User|null $user = null;
    public string|null $url = null;

    public function __construct(User $user)
    {
        $this->user = $user;

        $this->url = URL::temporarySignedRoute('register.complete_view', now()->addHour(),
            ['user' => $this->user->getKey(), 'hash' => sha1($this->user->email)]);
    }

    public function build()
    {
        return $this->subject(env('app_name') . ': Complete Profile')
            ->view('emails.complete_profile');
    }
}
