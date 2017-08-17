<?php

/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/8/14
 * Time: 9:49
 */
namespace app\index\model;
use think\Model;

class Productinfo extends Model
{
    protected $pk = 'id';
    public function getAll()
    {
        return $this->all();
    }
}