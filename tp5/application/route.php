<?php
// +----------------------------------------------------------------------
// | ThinkPHP [ WE CAN DO IT JUST THINK ]
// +----------------------------------------------------------------------
// | Copyright (c) 2006~2016 http://thinkphp.cn All rights reserved.
// +----------------------------------------------------------------------
// | Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
// +----------------------------------------------------------------------
// | Author: liu21st <liu21st@gmail.com>
// +----------------------------------------------------------------------

return [
    '__pattern__' => [
        'name' => '\w+',
    ],
    '[hello]'     => [
        ':id'   => ['index/hello', ['method' => 'get'], ['id' => '\d+']],
        ':name' => ['index/hello', ['method' => 'post']],
    ],



//首页
    'index'=>'index/index/index',
//    u计划的路由
    'uplan'=>'index/uplan/uplan',
//    优选计划的路由
    'premium'=>'index/premium/premium',
//    新计划的路由
    'autoinvest'=>'index/autoinvest/autoinvest',
//    登录注册路由
    'login'=>'index/login/login',
    'yz'=>'index/login/yz',
//    判断登录
    'is_login_cookie'=>'index/login/is_login_cookie',
//    注册验证码
    'code'=>'index/login/code',
//    验证
    'code_yz'=>'index/login/code_yz',
//    验证唯一
    'sel'=>'index/login/sel',
//    忘记密码
    'password'=>'index/password/password',
//    填写账户名
    'password_add'=>'index/password/password_add',
//    验证身份
    'idcard'=>'index/password/idcard',
//    身份唯一性
    'idcard_add'=>'index/password/idcard_add',
//    设置新密码
    'newpwd'=>'index/password/newpwd',
];
