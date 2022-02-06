<?php

namespace Database\Seeders;

use App\Models\Team;
use Illuminate\Database\Seeder;

class TeamSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Team::create([
            'name'                   => 'aankleding',
            'category'               => 'locatie',
            'required_people_amount' => 4,
        ]);

        Team::create([
            'name'                   => 'opbouw',
            'category'               => 'locatie',
            'required_people_amount' => 8,
        ]);

        Team::create([
            'name'                   => 'afbouw',
            'category'               => 'locatie',
            'required_people_amount' => 8,
        ]);

        Team::create([
            'name'                   => 'welkom',
            'category'               => 'locatie',
            'required_people_amount' => 4,
        ]);

        Team::create([
            'name'                   => 'merchandise',
            'category'               => 'locatie',
            'required_people_amount' => 3,
        ]);

        Team::create([
            'name'                   => 'muziek',
            'category'               => 'entertainment',
            'required_people_amount' => 3,
        ]);

        Team::create([
            'name'                   => 'vermaak zaterdag',
            'category'               => 'entertainment',
            'required_people_amount' => 5,
        ]);

        Team::create([
            'name'                   => 'vermaak zondag',
            'category'               => 'entertainment',
            'required_people_amount' => 5,
        ]);

        Team::create([
            'name'                   => 'nolandsgevoel',
            'category'               => 'entertainment',
            'required_people_amount' => 5,
        ]);

        Team::create([
            'name'                   => 'schoonmaak vrijdag overdag',
            'category'               => 'schoonmaak',
            'required_people_amount' => 5,
        ]);

        Team::create([
            'name'                   => 'schoonmaak vrijdag avond',
            'category'               => 'schoonmaak',
            'required_people_amount' => 5,
        ]);

        Team::create([
            'name'                   => 'schoonmaak zaterdag overdag',
            'category'               => 'schoonmaak',
            'required_people_amount' => 5,
        ]);

        Team::create([
            'name'                   => 'schoonmaak zaterdag avond',
            'category'               => 'schoonmaak',
            'required_people_amount' => 5,
        ]);

        Team::create([
            'name'                   => 'schoonmaak zondag overdag',
            'category'               => 'schoonmaak',
            'required_people_amount' => 5,
        ]);

        Team::create([
            'name'                   => 'schoonmaak zondag avond',
            'category'               => 'schoonmaak',
            'required_people_amount' => 5,
        ]);

        Team::create([
            'name'                   => 'diner vrijdag',
            'category'               => 'eets & drinks',
            'required_people_amount' => 3,
        ]);

        Team::create([
            'name'                   => 'diner zaterdag',
            'category'               => 'eets & drinks',
            'required_people_amount' => 3,
        ]);

        Team::create([
            'name'                   => 'diner zondag',
            'category'               => 'eets & drinks',
            'required_people_amount' => 3,
        ]);

        Team::create([
            'name'                   => 'brunch',
            'category'               => 'eets & drinks',
            'required_people_amount' => 3,
        ]);

        Team::create([
            'name'                   => 'inkoop & logistiek',
            'category'               => 'eets & drinks',
            'required_people_amount' => 3,
        ]);
    }
}
