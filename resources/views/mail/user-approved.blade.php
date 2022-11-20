@component('mail::message')
# Hi {{ $user->name }},

You are now a confirmed Nolander.

We have confirmed that you are indeed awesome and we'd love nothing more than to have you join our Nolands 2023 adventure.

Please add the details of your Nolands adventure on your profile, so that we can take appropriate measures to
make your Nolands 2023 story a legendary one.

Additionally, please do not forget to fulfill your financial obligation before 2nd of January, 2023.

@component('mail::button', ['url' => 'https://nolands.live/story'])
Add my information
@endcomponent

Love,<br>
{{ config('app.name') }}
@endcomponent
