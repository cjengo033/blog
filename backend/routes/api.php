<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BlogController;




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


Route::prefix('blog')->group(function(){
    Route::get('/', function() {
        return 'API is working!';
    });
    Route::get('/allBlog', [BlogController::class, 'index']);
    Route::get('/show/{id}', [BlogController::class, 'show']);
    Route::post('/create', [BlogController::class, 'create']);
    Route::delete('/destroy/{id}', [BlogController::class, 'destroy']);
    Route::post('/edit/{id}', [BlogController::class, 'edit']);
});
