<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Arr;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class RefreshRolesAndPermissions extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'permission:refresh';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Based on the config roles-and-permissions drop and recreate all permissions.';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     * @throws \Exception
     */
    public function handle()
    {
        $rolesAndPermissions = config('roles-and-permissions.roles-and-permissions');

        // we can safely delete all permissions and reprovision them. Roles not so much.
        Permission::all()->each(function ($permission) {
            $permission->delete();
        });

        $this->info('Deleted all existing permissions');
        $this->line('');

        foreach (Arr::flatten($rolesAndPermissions) as $i => $permission) {
            Permission::findOrCreate($permission);
        }

        foreach ($rolesAndPermissions as $role => $permissions) {
            $newRole = Role::findOrCreate($role);
            $this->info('Provisioning ' . $role);
            $newRole->givePermissionTo($permissions);
        }

        $this->line('');
        $this->info('Roles and permissions have been provisioned.');

        return 0;
    }
}
