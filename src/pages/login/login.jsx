import React,{Component} from 'react'
import {
    Form,
    Icon,
    Input,
    Button
} from 'antd'


import './login.less'
import logo from './images/logo.png'   /*图片必须动态获取，不支持页面写路径*/

const Item =Form.Item   //简化写法 不能写在import前面

/*login 登录的路由组件*/
class Login extends Component{
    //提交
    handleSubmit = (event) => {
        //阻止事件的默认行为
        event.preventDefault()
        //对所有的表单字段进行校验
        this.props.form.validateFields((err,values)=>{
            //校验成功
            if(!err){
                console.log("success!!!",values)
            }else{
                console.log("filed!!!")
            }
        })

        //得到form对象
        // const form = this.props.form
        // //获取表单项的输入数据
        // const values=form.getFieldsValue()
        // console.log('values',values)
    }

    //密码自定义校验
    validatePwd=(rule,value,callback)=>{
        if(!value){
            callback('不能为空')
        }else if(value.length<4){
            callback('大于4位')
        }else if(value.length>12){
            callback('小于12为')
        }else if(!/^[a-zA-Z0-9_]+$/.test(value)){
            callback('英文字母数字下划线')
        }else {
            callback()       //验证成功
        }
        //callback()       //验证成功
        //callback('xxx')  //验证失败，并提示指定的文本信息
    }
    render() {
        //得到具强大功能的form对象
        const form=this.props.form
        const {getFieldDecorator}= form;  //高阶函数

        return(
            <div className="login">
                <header className="login-header">
                    <img src={logo} alt={logo}/>
                    <h1>react:后台管理系统</h1>
                </header>
                <section className="login-content">
                    <h2>用户登录</h2>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Item>
                            {
                                getFieldDecorator('username',{
                                    rules:[
                                        {required:true,whitespace:true,message:'please input your username  !'},
                                        {min:4,message:'min 4  !'},
                                        {max:12,message:'max 12  !'},
                                        {pattern:/^[a-zA-Z0-9_]+$/,message:'0-9 a-z A-Z _  !'}
                                    ],
                                })(
                                    <Input
                                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        placeholder="请输入用户名"
                                    />
                                )
                            }
                        </Item>
                        <Item>
                            {
                                getFieldDecorator('password',{
                                    rules:[
                                        {
                                            validator:this.validatePwd
                                        }
                                   ],
                                })(
                                    <Input
                                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        type="password"
                                        placeholder="请输入密码"
                                    />
                                )
                            }
                        </Item>
                        <Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                登录
                            </Button>
                        </Item>
                    </Form>
                </section>
            </div>
        )
    }
}
/*
* 1.高阶函数
*    1).一类特别的函数
*       a.接受函数类型的参数
*       b.返回值是函数
*   2）.常见
*       a.定时器：setTimeout()/setInterval()
*       b.Promise(()=>{}) then(value=>{},reason=>{})
*       c.数组遍历相关的方法：forEach()/filter()/map()/reduce/find()/findIndex()
*       d>函数对象的bind()
*       e.Form.create()()/getFieldDecorator()()
*   3).高阶函数更新动态，更加具有可扩展性
* 2.高阶组件
*   1）.本质就是一个函数
*   2).接受一个组件（被包装组件），返回一个新的组件（包装组件），包装组件回向被包装组建传入特定的属性
*   3）.作用：扩展组件的功能
*   4）.高阶组件也是一个高阶函数：接受一个组件函数，返回一个新的组件函数
*
* */
/*
* 包装From组件生成一个新的组件：From(Login)
* 新组件回向From组建传递一个强大的对象
* */
const WrapLogin=Form.create()(Login)
export default WrapLogin
/*
* 前台表单验证
* 收集表单输入的数据
* */
