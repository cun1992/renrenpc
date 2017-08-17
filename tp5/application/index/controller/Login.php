<?php
namespace app\index\controller;
use think\Controller;
use think\Db;
use think\Request;
use think\Cookie;
class Login extends Controller
{
    public function login()
    {
//        echo 111;
        return view('index_login');
    }
//    登录验证
    public function yz(){
        $data=input();
        $password=md5($data['password']);
        print_r($data);
        $msg=Db::name('userinfo')->where('telephone',$data['tel'])->find();
//        print_r($msg);die;
        if($msg){
            //手机号正确===》验证密码
            $password=Db::name('userinfo')->where('password',$password)->find();
            if($password){
                //密码正确
                echo 3;
                //成功存session
                $id=$msg['id'];
                Cookie::set('username',$msg['username']);
                Cookie::set('user_id',$id);
            }else{
                //密码错误
                echo 2;
            }
        }else{
            //手机号错误
            echo 1;
        }
    }



//    判断用户是否登录
    public function is_login_cookie(){
        if(cookie::get('name','think_')){
            $arr = ['code'=>'1','missign'=>cookie::get('name','think_')];
            echo json_encode($arr);
        }else{
            $arr = ['code'=>'0','missign'=>'用户未登录'];
            echo json_encode($arr);
        }
    }



//    获取验证码
    public function code(){
        $tel=$_POST['tel'];
        $code = rand(1000,9999);
        $url="http://api.k780.com/?app=sms.send&tempid=51112&param=usernm%3Dadmin%26code%3D".$code."&phone=".$tel."&appkey=27419&sign=655350fbbab33a2ad7a46b31d47bf88b";
//        print_r($url);die;
        file_get_contents($url);
        return  json_decode($code,true);
     }
    //验证手机唯一性
       public function sel(){
        $data=input();
        $msg=Db::name('userinfo')->where('telephone',$data['telephone'])->select();
        if($msg){
            //成功返回注册
            echo 0;
        }else{
            //失败返回可以使用
            echo 1;
        }
    }
//    注册
        public function code_yz(){
            $data=input();
            //用户名
            $data['username']="WX".rand(10000,99999);
            $data['password']=md5($data['password']);
            //注册成功的时间
            $data['regtime']=time();
            $msg=Db::name('userinfo')->where('telephone',$data['telephone'])->select();
            if($msg){
                //手机号已被注册返回 0
                echo 0;
            }else{
                if($data['code_one']==$data['code_two']){
                    unset ($data['code_one']);
                    unset ($data['code_two']);
                    $res=Db::name('userinfo')->insert($data);
                    if($res){
                        //成功返回
                        echo 1;
                        //存 Session
                        $msg=Db::name('userinfo')->where('telephone',$data['telephone'])->find();
                        $id=$msg['id'];
                        Cookie::set('username',$msg['username']);
                        Cookie::set('user_id',$id);
                    }
                }else{
                    //手机验证码错误
                    echo 2;
                }
            }
   }
}
