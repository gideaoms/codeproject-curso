<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', function () {
    return view('app');
});

Route::post('oauth/access_token', function() {
    return Response::json(Authorizer::issueAccessToken());
});

Route::group(['middleware' => 'oauth'], function() {

    Route::resource('client', 'ClientController', ['except' => ['create', 'edit']]);
    Route::resource('project', 'ProjectController', ['except' => ['create', 'edit']]);

    Route::group(['prefix' => 'project'], function() {
        Route::get('/{id}/notes', 'ProjectNoteController@index');
        Route::get('{id}/notes/{noteId}', 'ProjectNoteController@show');
        Route::post('{id}/notes', 'ProjectNoteController@store');
        Route::put('{id}/notes/{noteId}', 'ProjectNoteController@update');
        Route::delete('{id}/notes/{noteId}', 'ProjectNoteController@destroy');
        Route::post('{id}/file', 'ProjectFileController@store');
    });

    Route::get('user/authenticated', 'UserController@authenticated');

});