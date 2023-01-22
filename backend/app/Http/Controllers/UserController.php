<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\ValidationException;

class UserController extends Controller
{
    //
    public function login(Request $request)
    {

        $validateUser = Validator::make(
            $request->all(),
            [
                'email' => 'required|email',
                'password' => 'required'
            ]
        );

        if ($validateUser->fails()) {
            return response()->json([
                'status' => false,
                'message' => 'validation error',
                'errors' => $validateUser->errors()
            ], 401);
        }

        if (!Auth::attempt($request->only(['email', 'password']))) {
            return response()->json([
                'status' => false,
                'message' => 'Email & Password does not match with our record.',
            ], 401);
        }

        $user = User::where('email', $request->email)->first();
        $user_id = DB::table('users')->where('email', '=' , $request->email)->value('id');
        $token = $user->createToken("API TOKEN")->plainTextToken;
        return response()->json([
            'status' => 200,
            'message' => 'User Logged In Successfully',
            'id' => $user_id,
            'token' => $token
        ]);
    }

    public function register(Request $request)
    {
        $name = $request->name;
        $email = $request->email;
        $password = $request->password;

        DB::table('users')->insert([
            'name' => $name,
            'email' =>   $email,
            'password' => Hash::make($password)
        ]);

        return response()->json([
            'status' => 200,
            'message' => 'Account Registered',
        ]);
    }

    public function logout(Request $request)
    {
        $request->user()->currentAccessToken()->delete();

        return [
            'message' => 'Logged out'
        ];
    }

    public function testToken()
    {
        return "Working api token";
    }
}
