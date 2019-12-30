import React, { Component } from 'react';
import { Route } from "react-router-dom";
import style from "../../static/css/login.module.css";
import logo from "../../static/img/logo.png";
import { Form, Icon, Input, Button } from 'antd';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            titleLogo: logo,
            title: "杭州市萧山区第三人民医院",
            websiteName: "杭州领翼信息技术有限公司",
            websiteHerf: "http://www.leanintech.com",
        }
    }
    userLogin(values) {
        console.log(values)
        // this.props.history.push("/home");
    }
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                // console.log('通过校验: ', values);
                this.userLogin(values)
            }
        });
    };
    render() {
        const { titleLogo, title, websiteName, websiteHerf } = this.state;
        const { getFieldDecorator } = this.props.form;
        return (
            <div className={style.content}>
                <div className={style.img}>
                    <img src={titleLogo} alt="" />
                </div>
                <div className={style.title}>{title}</div>
                <Form onSubmit={this.handleSubmit} className="login-form" style={{ width: '400px' }}>
                    <Form.Item>
                        <div style={{ fontSize: '18px', color: '#63a8ea' }}>用户名</div>
                        {getFieldDecorator('username', {
                            rules: [{ required: true, message: '请输入正确的用户名!' }],
                        })(
                            <Input
                                style={{ height: '40px' }}
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="请输入账户"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        <div style={{ fontSize: '18px', color: '#63a8ea' }}>密码</div>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: '请输入正确的密码!' }],
                        })(
                            <Input
                                style={{ height: '40px' }}
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type="password"
                                placeholder="请输入密码"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item style={{ marginBottom: '0px' }}>
                        <Button type="primary"
                            htmlType="submit"
                            className="login-form-button"
                            style={{ width: '400px', height: '56px', fontSize: '24px' }}>
                            登录
                        </Button>
                    </Form.Item>
                </Form>
                <div className={style.website}>
                    {websiteName}
                    -
                    <a style={{ color: '#4a4a4a', textDecoration: 'underline' }} 
                    href={websiteHerf} target="_blank" rel="noopener noreferrer">{websiteHerf}</a>
                </div>
            </div>
        );
    }
}
const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(Login);
let LoginRouter = () => {
    return (
        <Route path="/login" component={WrappedNormalLoginForm} />
    )
}
export default LoginRouter;