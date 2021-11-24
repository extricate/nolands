@component('mail::message')
# Hi {{ $user->name }},

Welcome to Nolands. We're happy that you want to join us.

To prevent a live reenactment of the movie classic Project X, we manually verify whether people are really supposed to
join our little get together. We've been informed of your request to join, and will manually approve your account soon.

Stay tuned!

Love,<br>
{{ config('app.name') }}
@endcomponent
