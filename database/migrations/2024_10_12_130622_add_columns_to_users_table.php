<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->string('nid')
                ->index()
                ->after('email');

            $table->foreignId('vaccine_center_id')
                ->after('nid')
                ->nullable()
                ->default(null)
                ->constrained('vaccine_centers')
                ->nullOnDelete();

            $table->string('password')->nullable()->change();

            $table->date('scheduled_date')->after('vaccine_center_id')->nullable()->index();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropForeign(['vaccine_center_id']);
            $table->dropColumn(['nid', 'vaccine_center_id', 'scheduled_date']);
        });
    }
};
