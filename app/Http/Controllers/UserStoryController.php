<?php

namespace App\Http\Controllers;

use App\Http\Requests\UpdateUserStoryRequest;
use App\Models\Team;
use App\Models\User;
use Inertia\Inertia;

class UserStoryController extends Controller
{
    public function edit()
    {
        return Inertia::render('User/Story', [
            'user'  => auth()->user(),
            'teams' => Team::all(),
        ]);
    }

    public function update(UpdateUserStoryRequest $request, User $user)
    {
        $user->update($request->validated());

        return redirect(route('story.edit'));
    }
}
