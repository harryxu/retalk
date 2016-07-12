<?php

namespace App\Http\Controllers;

use App\Reply;
use Illuminate\Http\Request;

class ReplyController extends Controller
{

    public function index(Request $request)
    {
        $comments = Reply::where('topic_id', $request->get('tid'))
            ->orderBy('created_at', 'asc')
            ->get();

        return $comments;
    }

    public function store(Request $request)
    {
        $user = $request->session()->get('user');
        $reply = new Reply(['content' => $request->get('comment')]);
        $reply->topic_id = $request->get('tid');
        $reply->username = $user['name'];
        $reply->save();

        return $reply;
    }

}
