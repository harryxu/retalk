<?php

use Dingo\Api\Routing\Router;

Route::get('/', function () {
    return view('welcome');
});

/**
 * @var Dingo\Api\Routing\Router
 */
$api = app(Router::class);

$api->version('v1', function(Router $api) {
    $api->resource('topic', \App\Http\Controllers\TopicController::class);
});
