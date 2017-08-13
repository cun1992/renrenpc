<?php
namespace app\index\controller;
use think\Controller;

class Login extends Controller
{
    public function login()
    {
//        echo 111;
        return view('index_login');
    }
}
