/*
* 包含应用中所有的接口请求函数模块
* 每个函数的返回值都是promise
* */

import ajax from './ajax'

//登录
export const reqLogin=(username,password) => ajax('/login',{username,password},'POST')
//添加用户
export const reaAddUser=(user) => ajax('/manage/user/add',user,'POST')
