<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateUserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return auth()->user()->can('users.edit');
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'string',
            'email' => [
                'email', 'sometimes', Rule::unique('users', 'email')->ignore($this->user->id)
            ],
            'is_approved' => ['boolean'],
            'payment_received' => ['boolean'],
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
            'is_admin' => ['boolean', 'nullable'],
            'team_choice_first' => ['integer', 'exists:teams,id'],
            'team_choice_second' => ['integer', 'exists:teams,id'],
            'team_choice_third' => ['integer', 'exists:teams,id']
        ];
    }
}
