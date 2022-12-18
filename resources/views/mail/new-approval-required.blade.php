@component('mail::message')
# Hi admin,

A new Nolander registered with the name {{ $user->name }} and email {{ $user->email }}, referred by {{ $user->reference }}

@component('mail::button', ['url' => 'https://nolands.live/users'])
Approve this Nolander?
@endcomponent

Love,<br>
{{ config('app.name') }}
@endcomponent
