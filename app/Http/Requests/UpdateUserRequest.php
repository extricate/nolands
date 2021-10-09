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
            'email' => ['email', 'required', Rule::unique('users', 'email')->ignore($this->user->id)],
            'payment_received' => 'boolean',
            'arrives_on' => ['date', 'nullable'],
            'has_arranged_transportation' => ['boolean'],
            'chauffeur_name' => ['string', 'max:255', 'nullable'],
            'has_medical_training' => ['boolean'],
            'tent_size' => ['integer', 'nullable'],
            'other_tent_occupants' => ['nullable'],
            'dietary_preferences' => ['nullable'],
            'has_blankets' => ['boolean', 'nullable'],
            'initial_sustenance' => ['string', 'nullable'],
            'departure_date' => ['date', 'nullable'],
        ];
    }
}
