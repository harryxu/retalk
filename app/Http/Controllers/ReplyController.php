<?php

namespace App\Http\Controllers;

use App\Reply;
use App\Topic;
use Carbon\Carbon;
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
        $topic = Topic::findOrFail($request->get('tid'));

        $user = $request->session()->get('user');
        $reply = new Reply(['content' => $request->get('comment')]);
        $reply->topic_id = $topic->id;
        $reply->username = $user['name'];
        $reply->save();

        $topic->last_reply_at = Carbon::now();
        $topic->save();

        return $reply;
    }

}
