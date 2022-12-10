<?php

namespace App\Http\Controllers;

use App\Http\Requests\UpdateUserAvatarRequest;
use App\Http\Requests\UpdateUserRequest;
use App\Mail\UserIsApproved;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class UserController extends Controller
{
    /**
     * @param User $user
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
     * @param Request $request
     * @param User $user
     * @return \Inertia\Response
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function update(UpdateUserRequest $request, User $user)
    {
        $user->update(Arr::except($request->validated(), 'is_admin'));

        if ($request->has('is_admin')) {
            $request->get('is_admin') ? $user->assignRole('admin') : $user->removeRole('admin');
        }

        if ($request->has('is_approved') && $user->is_approved && !$user->approved_on) {
            $user->update(['approved_on' => now()]);

            Mail::to($user)->send(new UserIsApproved($user));
        }

        return Inertia::render('User/Edit', [
            'user' => $user
        ]);
    }

    public function setAvatar(UpdateUserAvatarRequest $request, User $user)
    {
        if (auth()->user()->id === $user->id) {
            if ($request->hasFile('avatar')) {
                $user->addMediaFromRequest('avatar')->toMediaCollection('avatars');
            }
        }
    }

    public function delete(Request $request, User $user)
    {
        $user->delete();

        return Redirect::to(route('user.index'));
    }
}
