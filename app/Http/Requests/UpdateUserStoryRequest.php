<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateUserStoryRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return auth()->user()->id === $this->user->id;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => ['string', 'max:255'],
            'email' => ['string', 'email', 'max:255', 'unique:users,email,' . auth()->user()->id],
            'arrives_on' => ['date', 'nullable'],
            'has_arranged_transportation' => ['boolean'],
            'chauffeur_name' => ['string', 'max:255', 'nullable'],
            'has_medical_training' => ['boolean'],
            'tent_size' => ['integer', 'nullable'],
            'other_tent_occupants' => ['nullable'],
            'dietary_preferences' => ['nullable'],
            'joins_party_bus' => ['boolean', 'nullable'],
            'joins_in_2023' => ['boolean', 'nullable'],
            'initial_sustenance' => ['string', 'nullable'],
            'departure_date' => ['date', 'nullable'],
            'team_choice_first' => ['nullable', 'integer', 'exists:teams,id'],
            'team_choice_second' => ['nullable', 'integer', 'exists:teams,id'],
            'team_choice_third' => ['nullable', 'integer', 'exists:teams,id'],
        ];
    }
}
