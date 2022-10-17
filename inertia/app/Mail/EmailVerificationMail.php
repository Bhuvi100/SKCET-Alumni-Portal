<?php

namespace App\Mail;

use Illuminate\Mail\Mailable;

class EmailVerificationMail extends Mailable
{
    public $user;
    public $url;

    public function __construct($notifiable, $url)
    {
        $this->user = $notifiable;
        $this->url = $url;
    }

    public function build()
    {
        return $this->subject(env('app_name') . ': Email Verification')
            ->view('emails.email-verification');
    }
}
