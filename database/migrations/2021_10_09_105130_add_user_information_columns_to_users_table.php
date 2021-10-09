<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddUserInformationColumnsToUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->timestamp('arrives_on')->nullable();
            $table->boolean('has_arranged_transportation')->default(false);
            $table->string('chauffeur_name')->nullable();
            $table->boolean('has_medical_training')->default(false);
            $table->integer('tent_size')->nullable();
            $table->string('other_tent_occupants')->nullable();
            $table->string('dietary_preferences')->nullable();
            $table->boolean('has_blankets')->nullable();
            $table->string('initial_sustenance')->nullable();
            $table->timestamp('departure_date')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn([
                'arrives_on',
                'has_arranged_transportation',
                'chauffeur_name',
                'has_medical_training',
                'tent_size',
                'other_tent_occupants',
                'dietary_preferences',
                'has_blankets',
                'initial_sustenance',
                'departure_date',
            ]);
        });
    }
}
