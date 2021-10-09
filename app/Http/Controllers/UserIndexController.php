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
            ->allowedSorts(['name', 'email', 'payment_received'])
            ->allowedFilters(['name', 'email', 'payment_received', $globalSearch])
            ->paginate()
            ->withQueryString();

        return Inertia::render('UserManagement', [
            'users' => $users,
        ])->table(function (InertiaTable $table) {
            $table->addSearchRows([
                'name' => 'Name',
                'email' => 'Email address',
            ])->addFilter('payment_received', 'Payment received', [
                true => 'Payment received',
                false => 'No payment received',
            ])->addColumns([
                'email' => 'Email address',
                'payment_received' => 'Payment received',
            ]);
        });
    }
}
