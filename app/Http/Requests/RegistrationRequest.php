<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RegistrationRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'required|max:50',
            'nid' => 'required|unique:users,nid|max:20',
            'email' => 'required|email|unique:users,email',
            'vaccine_center_id' => 'required|exists:vaccine_centers,id',
            'phone_number' => 'required|regex:/^01[3-9]\d{8}$/',
        ];
    }

    public function messages()
    {
        return [
            "vaccine_center_id.required" => 'The vaccine center field is required.',
            "vaccine_center_id.exists" => 'The selected vaccine center is invalid.'
        ];
    }
}
