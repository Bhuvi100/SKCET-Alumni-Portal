<?php

namespace App\Mail;

use Illuminate\Mail\Mailable;

class ResetPasswordMail extends Mailable
{
    public function __construct()
    {
    }

    public function build()
    {
        return $this->view('emails.reset-password');
    }
}
