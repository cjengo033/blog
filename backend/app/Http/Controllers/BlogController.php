<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class BlogController extends Controller
{
    //Show All Blog Posts API
    public function index()
    {
        $get_all_blog = DB::table('blogs')->get();
        if ($get_all_blog) {
            return response()->json([
                "Response" => "Success",
                "Message" => "Working",
                "Data" =>  $get_all_blog
            ], 200);
        } else {
            return response()->json([
                "Response" => "Failed"
            ], 500);
        }
    }

    //Create Blog Post Function API
    public function create(Request $request)
    {
        // $subject = $request->subject;
        // $description = $request->description;

        $validated = Validator::make($request->all(), [
            'subject' => 'required',
            'description' => 'required',
        ]);

        if ($validated->fails()) {
            return response()->json([
                "Response" => "Failed",
                "Message" => "Fillout the required inputs"
            ]);
        } else {
            $data = DB::table('blogs')->insert([
                'subject' => $request->subject,
                'description' => $request->description
            ]);

            if ($data) {
                return response()->json([
                    "Response" => "Success",
                    "Message" => "Data has been successfully inserted",
                    "Data" => $data
                ]);
            } else {
                return response()->json([
                    "Response" => "Failed",
                    "Message" => "Data has not been successfully inserted"
                ]);
            }
        }
    }

    //Show singLe blog post API
    public function show(Request $request)
    {
        $id = $request->id;
        $check_id = DB::table('blogs')->where('id', '=', $id)->exists();
        if ($check_id) {
            $get_single_data = DB::table('blogs')
                ->where('id', '=', $id)
                ->get();

            if ($get_single_data) {
                return response()->json([
                    "Response" => "Success",
                    "Message" => "Working",
                    "Data" => $get_single_data
                ]);
            } else {
                return response()->json([
                    "Response" => "Failed",
                    "Message" => "Data is not availabled"
                ]);
            }
        } else {
            return response()->json([
                "Response" => "Failed",
                "Message" => "No record found in the database"
            ]);
        }
    }

    //Delete Blog Post Function API
    public function destroy(Request $request)
    {
        $id = $request->id;
        $check_id = DB::table('blogs')->where('id', '=', $id)->exists();
        if ($check_id) {
            $delete_blog = DB::table('blogs')->where('id', '=', $id)->delete();
            if ($delete_blog) {
                return response()->json([
                    "Response" => "Success",
                    "Message" => "Data has been successfully deleted",
                ]);
            } else {
                return response()->json([
                    "Response" => "Failed",
                    "Message" => "Data has not been successfully deleted"
                ]);
            }
        } else {
            return response()->json([
                "Response" => "Failed",
                "Message" => "No record found in the database"
            ]);
        }
    }

    public function edit(Request $request)
    {
        $id = $request->id;
        $subject = $request->subject;
        $description = $request->description;
        $update_data = DB::table('blogs')
            ->where('id', '=', $id)
            ->update([
                "subject" => $subject,
                "description" => $description

            ]);
        if ($update_data) {
            return response()->json([
                "Response" => "Success",
                "Message" => "Data has been successfully updated",
            ]);
        } else {
            return response()->json([
                "Response" => "Failed",
                "Message" => "Data has not been successfully updated"
            ]);
        }
    }

    public function user(Request $request)
    {
        $user_id = $request->id;
        $users = DB::table('users')
            // ->select(DB::raw('count(*) as user_count, status'))
            ->where('id', '=', $user_id)
            ->get();

        if ($users) {
            return response()->json([
                "Response" => "Success",
                "Message" => "Working",
                "Data" => $users
            ]);
        } else {
            return response()->json([
                "Response" => "Failed",
                "Message" => "Data is not availabled"
            ]);
        }
    }

    public function sent_request(Request $request)
    {
        $my_id = $request->my_id;
        $other_id = $request->other_id;
        $friend_answer = $request->answer; //0 = follow me, 1 == followed
        $data = DB::table('friendship')->insert([
            'request' =>  $friend_answer,
            'from_user' =>  $my_id,
            'to_user' =>  $other_id
        ]);

        if ($data) {
            return response()->json([
                "Response" => "Success",
                "Message" => "You've sent a friend quest",
                "Data" => $data
            ]);
        } else {
            return response()->json([
                "Response" => "Failed",
                "Message" => "Data is not availabled"
            ]);
        }
    }

    public function follow_status(Request $request)
    {
        $my_id = $request->my_id;
        $other_id = $request->other_id;
        $check_id = DB::table('friendship')
            ->where([
                ['from_user', '=', $my_id],
                ['to_user', '=', $other_id]
            ])
            ->exists();
        if ($check_id) {
            $get_single_data = DB::table('friendship')
                ->where([
                    ['from_user', '=', $my_id],
                    ['to_user', '=', $other_id]
                ])
                ->get();
            if ($get_single_data) {
                return response()->json([
                    "Response" => "Success",
                    "Message" => "Working",
                    "Data" => $get_single_data
                ]);
            } else {
                return response()->json([
                    "Response" => "Failed",
                    "Message" => "Data is not availabled"
                ]);
            }
        } else {
            return response()->json([
                "Response" => "Failed",
                "Message" => "No record found in the database"
            ]);
        }
    }

    public function unfollow(Request $request)
    {
        $id = $request->id;
        $other_id = $request->other_id;
        $check_id = DB::table('friendship')->where(
            [
                ['from_user', '=', $id],
                ['to_user', '=', $other_id]
            ]
        )->exists();
        if ($check_id) {
            $delete_blog = DB::table('friendship')->where(
                [
                    ['from_user', '=', $id],
                    ['to_user', '=', $other_id]
                ]
            )->delete();
            if ($delete_blog) {
                return response()->json([
                    "Response" => "Success",
                    "Message" => "Data has been successfully deleted",
                ]);
            } else {
                return response()->json([
                    "Response" => "Failed",
                    "Message" => "Data has not been successfully deleted"
                ]);
            }
        } else {
            return response()->json([
                "Response" => "Failed",
                "Message" => "No record found in the database"
            ]);
        }
    }
}
