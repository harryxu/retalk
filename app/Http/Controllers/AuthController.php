<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Session\Store as Session;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;

class AuthController extends Controller
{

    public function user(Session $session)
    {
        return $session->get('user', ['name' => null]);
    }

    public function login(Request $request, Session $session)
    {
        if ($request->has('username')) {
            $session->set('user', ['name' => $request->get('username')]);
            return $session->get('user');
        }

        throw new BadRequestHttpException('登录信息无效');
    }
}
