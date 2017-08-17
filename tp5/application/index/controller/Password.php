<?php
namespace app\index\controller;
use think\Controller;
use think\Db;
use think\Request;
use think\Cookie;
class Password extends Controller
{
    public function password()
    {
        return view('password');
    }
//    后台验证填写账户名
    public function password_add(){
        $data=input();
        $phone=$data['phone'];
        if(!preg_match("/^1[34578]\d{9}$/", $phone) || empty($phone)) {
            echo 2;
        }else{
            if(!captcha_check($data['rands'])){
                echo 1;
            }else{
                echo 0;
            }
        }
    }
//    验证身份页面
     public function idcard(){

         return view('idcard');
     }
//   验证唯一性
     public function idcard_add(){
         $data=input();
         $msg=Db::name('userinfo')->where('telephone',$data['tel'])->select();
         if($msg){
             //成功返回注册
             echo 1;
         }else{
             //失败返回可以使用
             echo 0;
         }
     }
//    修改密码页面
     public function newpwd(){
         return view('newpwd');
     }
}