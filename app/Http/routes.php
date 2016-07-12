<?php

use Dingo\Api\Routing\Router;

/**
 * @var Dingo\Api\Routing\Router
 */
$api = app(Router::class);
$api->version('v1', ['middleware' => ['web']], function(Router $api) {
    $api->resource('topic', \App\Http\Controllers\TopicController::class);

    $api->get('auth/user', 'App\Http\Controllers\AuthController@user');
    $api->post('auth/login', 'App\Http\Controllers\AuthController@login');
});

Route::get('auth/logout', function() {
    Session::flush();
    return Redirect::to('/');
});

Route::get('{catchall}', 'HomeController@index')->where('catchall', '(.*)');
