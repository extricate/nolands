<?php

namespace App\Http\Controllers;

use App\Http\Requests\UpdateUserRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class UserController extends Controller
{
    /**
     * @param  User  $user
     * @return \Inertia\Response
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function edit(User $user)
    {
        $this->authorize('users.edit');

        return Inertia::render('User/Edit', [
            'user' => $user
        ]);
    }

    /**
     * @param  Request  $request
     * @param  User  $user
     * @return \Inertia\Response
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function update(UpdateUserRequest $request, User $user)
    {
        $user->update(Arr::except($request->validated(), 'is_admin'));

        if ($request->has('is_admin')) {
            $user->assignRole('admin');
        }

        return Inertia::render('User/Edit', [
            'user' => $user
        ]);
    }

    public function delete(Request $request, User $user)
    {
        $user->delete();

        return Redirect::to(route('user.index'));
    }
}
