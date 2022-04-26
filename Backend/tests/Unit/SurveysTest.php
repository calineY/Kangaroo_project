<?php

namespace Tests\Unit;

use File;
use Tests\TestCase;


class SurveysTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function test_surveys()
    {
        
        $path = storage_path('app/json_data');
        if (File::exists($path)) {
            $this->assertTrue(true);
        }
    }
}
