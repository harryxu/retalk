<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Session\SessionInterface;

class AuthController extends Controller
{

    public function user(SessionInterface $session)
    {
        return $session->get('user', null);
    }

    public function login(Request $request, SessionInterface $session)
    {
        if ($request->has('username')) {
            $session->set('user', ['username' => $request->get('username')]);
            return true;
        }

        return false;
    }
}