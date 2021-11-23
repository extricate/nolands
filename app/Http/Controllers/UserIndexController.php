<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use ProtoneMedia\LaravelQueryBuilderInertiaJs\InertiaTable;
use Spatie\QueryBuilder\AllowedFilter;
use Spatie\QueryBuilder\QueryBuilder;

class UserIndexController extends Controller
{
    public function __invoke()
    {
        $this->authorize('users.manage');

        $globalSearch = AllowedFilter::callback('global', function ($query, $value) {
            $query->where(function ($query) use ($value) {
                $query->where('name', 'LIKE', "%{$value}%")->orWhere('email', 'LIKE', "%{$value}%");
            });
        });

        $users = QueryBuilder::for(User::class)
            ->defaultSort('name')
            ->allowedSorts([
                'name',
                'email',
                'is_approved',
                'payment_received',
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
            ])
            ->allowedFilters([
                'name',
                'email',
                'is_approved',
                'payment_received',
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
                $globalSearch
            ])
            ->paginate()
            ->withQueryString();

        return Inertia::render('UserManagement', [
            'users' => $users,
        ])->table(function (InertiaTable $table) {
            $table
                ->addSearchRows([
                    'name'                        => 'Name',
                    'email'                       => 'Email address',
                    'is_approved'                 => 'Is approved',
                    'payment_received'            => 'Payment received',
                    'arrives_on'                  => 'Arrival date',
                    'has_arranged_transportation' => 'Has transportation',
                    'chauffeur_name'              => 'Drives with',
                    'has_medical_training'        => 'Has medical training',
                    'tent_size'                   => 'Tent size',
                    'other_tent_occupants'        => 'Other tent occupants',
                    'dietary_preferences'         => 'Dietary preferences',
                    'has_blankets'                => 'Brings blankets',
                    'initial_sustenance'          => 'Welcome package choice',
                    'departure_date'              => 'Departure date',
                ])
                ->addFilter('is_approved', 'Is approved', [
                    true  => 'Is approved',
                    false => 'Is not approved',
                ])
                ->addFilter('payment_received', 'Payment received', [
                    true  => 'Payment received',
                    false => 'No payment received',
                ])
                ->addFilter('has_medical_training', 'Has medical training', [
                    true  => 'Has medical training',
                    false => 'No medical training',
                ])
                ->addColumns([
                    'email'                       => 'Email address',
                    'is_approved'                 => 'Is approved',
                    'payment_received'            => 'Payment received',
                    'arrives_on'                  => 'Arrival date',
                    'has_arranged_transportation' => 'Has transportation',
                    'chauffeur_name'              => 'Drives with',
                    'has_medical_training'        => 'Has medical training',
                    'tent_size'                   => 'Tent size',
                    'other_tent_occupants'        => 'Other tent occupants',
                    'dietary_preferences'         => 'Dietary preferences',
                    'has_blankets'                => 'Brings blankets',
                    'initial_sustenance'          => 'Welcome package choice',
                    'departure_date'              => 'Departure date',
                ]);
        });
    }
}
