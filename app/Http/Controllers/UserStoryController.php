<?php

namespace App\Http\Controllers;

use App\Http\Requests\UpdateUserStoryRequest;
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

        return redirect()->to(route('story.edit'));
    }
}
