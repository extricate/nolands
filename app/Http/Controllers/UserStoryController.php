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
            'user' => auth()->user(),
        ]);
    }

    public function update(UpdateUserStoryRequest $request, User $user)
    {
        $user->update($request->validated());

        if ($user->team_choice_first) {
            return redirect()->back()->with(['message' => 'Saved!']);
        }

        return redirect()->to(route('teams.index'));
    }
}
