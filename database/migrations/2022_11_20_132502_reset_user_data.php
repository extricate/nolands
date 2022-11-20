<?php

use App\Models\User;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        DB::transaction(function () {
            $everyone = User::all();

            foreach ($everyone as $user) {
                $user->update([
                    'payment_received' => false,
                    'has_arranged_transport' => false,
                    'arrives_on' => null,
                    'chauffeur_name' => null,
                    'has_medical_training' => null,
                    'tent_size' => null,
                    'other_tent_occupants' => null,
                    'dietary_preferences' => null,
                    'has_blankets' => null,
                    'initial_sustenance' => null,
                    'departure_date' => null,
//                    'is_approved' => null,
                    'team_choice_first' => null,
                    'team_choice_second' => null,
                    'team_choice_third' => null,
                ]);
            }
        });


    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
};
