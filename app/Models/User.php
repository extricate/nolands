<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\Permission\Traits\HasPermissions;
use Spatie\Permission\Traits\HasRoles;

class User extends Authenticatable implements HasMedia
{
    use HasApiTokens, HasFactory, Notifiable, HasRoles, HasPermissions, InteractsWithMedia;

    /**
     * The attributes that are mass assignable.
     *
     * @var string[]
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'payment_received',
        'arrives_on',
        'has_arranged_transportation',
        'chauffeur_name',
        'has_medical_training',
        'tent_size',
        'other_tent_occupants',
        'dietary_preferences',
        'initial_sustenance',
        'departure_date',
        'is_approved',
        'team_choice_first',
        'team_choice_second',
        'team_choice_third',
        'joins_in_2023',
        'joins_party_bus',
        'reference',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $appends = [
        'is_admin',
        'avatar'
    ];

    public function getAvatarAttribute()
    {
        return $this->getFirstMediaUrl('avatars');
    }

    public function registerMediaCollections(): void
    {
        $this
            ->addMediaCollection('avatars')
            ->useFallbackUrl('/images/default-avatar.webp')
            ->useFallbackPath(public_path('/images/default-avatar.webpg'))
            ->acceptsMimeTypes(['image/jpg', 'image/jpeg', 'image/png', 'image/gif'])
            ->singleFile();
    }

    /**
     * The attributes that should be cast.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'approved_on' => 'datetime:Y-m-d',
        'arrives_on' => 'datetime:Y-m-d',
        'departure_date' => 'datetime:Y-m-d',
        'payment_received' => 'boolean',
        'is_approved' => 'boolean',
        'joins_party_bus' => 'boolean',
        'has_arranged_transportation' => 'boolean',
        'has_medical_training' => 'boolean',
        'joins_in_2023' => 'boolean',
    ];

    public function getIsAdminAttribute()
    {
        return $this->hasRole('admin');
    }
}
