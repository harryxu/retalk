<?php

use Dingo\Api\Routing\Router;

/**
 * @var Dingo\Api\Routing\Router
 */
$api = app(Router::class);

$api->version('v1', function(Router $api) {
    $api->resource('topic', \App\Http\Controllers\TopicController::class);

    $api->get('auth/user', 'AuthController@user');
    $api->post('auth/login', 'AuthController@login');
});

Route::get('{catchall}', 'HomeController@index')->where('catchall', '(.*)');
