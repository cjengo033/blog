<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BlogController;
use App\Http\Controllers\UserController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//Common routes naming
//Index - show all data students
//show  -  show a single data per student
//create - show a create form to add a new student
//store - store a data
//edit - show a form to edit a data
//destroy - delete a data

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::prefix('blog')->group(function () {
    Route::get('/test', [BlogController::class, 'test']);
    Route::get('/allBlog', [BlogController::class, 'index']);
    Route::get('/show/{id}', [BlogController::class, 'show']);
    Route::post('/create', [BlogController::class, 'create']);
    Route::delete('/destroy/{id}', [BlogController::class, 'destroy']);
    Route::post('/edit/{id}', [BlogController::class, 'edit']);
});

Route::prefix('profile')->group(function () {
    Route::get('/user/{id}', [BlogController::class, 'user']);
    Route::post('/sent/{id}', [BlogController::class, 'sent_request']);
});

Route::prefix('authentication/')->group(function () {
    Route::post('login', [UserController::class, 'login']);
    Route::post('register', [UserController::class, 'register']);
});

Route::prefix('credential/')->middleware('auth:sanctum')->group(function () {
    route::get('testToken', [UserController::class, 'testToken']);
    route::get('logout', [UserController::class, 'logout']);
});

Route::post('/cart/add', 'CartController@addItem');
Route::put('/cart/update/{id}', 'CartController@updateItem');
Route::delete('/cart/remove/{id}', 'CartController@removeItem');
