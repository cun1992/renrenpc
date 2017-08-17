<?php
namespace app\index\controller;
use app\index\model\Productinfo;
use think\Controller;
use think\Model;
use think\Db;
class Uplan extends Controller
{
    public function uplan()
    {
        return view('uplan');
    }
    public function mist()
    {
        $user = new Productinfo();
        $arr = $user->where('id','1')->find()->toArray();
    }
    public function uplanlist()
    {
        $arr = Db::table('productinfo')->select();
        //当前页
        $page = empty(input('page')) ?1:input('page');
        $num = 10;
        $limit = ($page-1)*$num;
        $pagecount = count($arr);
        $pagenum = ceil($pagecount/$num);
        $next   = $page +1 >$pagenum ?$pagenum :$page+1;
        $up     = $page -1 <1 ?1 :$page-1;
        $sta_arr = array_slice($arr,$limit,$num);
        $request = ['code'=>200,'missign'=>$sta_arr,'next'=>$next,'up'=>$up,'pagecount'=>$pagenum,'page'=>$page];
        echo json_encode($request);
    }
    public function getuplan()
    {
        $arr = Db::table('productinfo')->where('deadline','in','1,3,6,12,24')->order('investTime','desc')->limit(0,5)->select();
        echo json_encode(['code'=>200,'missign'=>$arr]);
    }
    public function viewdetails()
    {
        $id = empty(input('id'))?'':input('id');
        $ar =Db::table('productinfo')->where('id',$id)->select();
        $ar[0]['productAmount']=number_format($ar[0]['productAmount']);
        $ar[0]['investLimit']=number_format($ar[0]['investLimit']);
        $ar[0]['startTime']=date('m月d日 H:i:s',$ar[0]['startTime']);
        $ar[0]['expireTime']=date("Y年m月d日",strtotime("+".$ar[0]['deadline']."months",$ar[0]['endTime']));
        $ar[0]['endTime']=date('m月d日 H:i:s',$ar[0]['endTime']);
        $ar[0]['productResid']  =number_format($ar[0]['productResid']);
        return view('details',$ar[0]);
    }
}
