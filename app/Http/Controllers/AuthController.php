<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;

class AuthController extends Controller
{

    public function user(Request $request)
    {
        return $request->session()->get('user', ['name' => null]);
    }

    public function login(Request $request)
    {
        if ($request->has('username')) {
            $request->session()->put('user', ['name' => $request->get('username')]);
            return $request->session()->get('user');
        }

        throw new BadRequestHttpException('登录信息无效');
    }
}
