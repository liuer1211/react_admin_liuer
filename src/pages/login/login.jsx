import React,{Component} from 'react'

import './login.less'
import logo from './images/logo.png'   /*图片必须动态获取，不支持页面写路径*/

/*login 登录的路由组件*/
export default class Login extends Component{
    render() {
        return(
            <div className="login">
                <header className="login-header">
                    <img src={logo} alt={logo}/>
                    <h1>react:后台管理系统</h1>
                </header>
                <section className="login-content">
                    <h2>用户登录</h2>
                    <div>123</div>
                </section>
            </div>
        )
    }
}
