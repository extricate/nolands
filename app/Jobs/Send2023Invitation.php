<?php

namespace App\Jobs;

use App\Mail\Year2023Invitation;
use App\Models\User;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Mail;

class Send2023Invitation implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        // only send invitations to pre-existing users that haven't received an invitation yet.
        $users = User::where('invitation_send', '==', false)
            ->where('created_at', '<', Carbon::parse('2022-12-31'))->get();

        foreach ($users as $user) {
            Mail::send(new Year2023Invitation($user));

            $user->update(['invitation_send' => true]);
        }
    }
}
