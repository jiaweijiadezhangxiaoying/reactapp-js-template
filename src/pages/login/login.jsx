import React from "react";
import { Form, Icon, Input, Button, message } from 'antd';
import { apiUserLogin } from "../../api/login.js";
import style from "./login.less"
// console.log(style)

class LoginFrom extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props);
        this.state = {
            name: 1
        }
    }
    userLogin (values) {
        let data = {
            username: values.username,
            password: values.password
        }
        setTimeout(() => {
            this.props.history.push("/home");
        }, 2000)
        apiUserLogin(data).then(res => {
            message.success("登录成功", 2);
            setTimeout(() => {
                this.props.history.push("/home");
            }, 2000)
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                // this.userLogin(values)
                this.setState({
                    name: 123
                })
            }
        });
    }
    render () {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className={style.content}>
                <div className={style.pop}>
                    <div className={style["pop-title"]}>杭州市第一人民医院</div>
                    <Form className={style["login-form"]} onSubmit={this.handleSubmit}>
                        <Form.Item>
                            <div>用户名</div>
                            {
                                getFieldDecorator('username', {
                                    rules: [{ required: true, message: '请您输入用户名' }],
                                })(<Input className={style["pop-input"]}
                                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="请输入您的用户名"
                                />)
                            }
                        </Form.Item>
                        <Form.Item>
                            <div>密码</div>
                            {
                                getFieldDecorator('password', {
                                    rules: [{ required: true, message: '请您输入用密码' }],
                                })(<Input
                                    className="pop-input"
                                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    type="password"
                                    placeholder="请输入您的密码"
                                />)
                            }
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button pop-input">
                                登录
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        )
    }
}

const Login = Form.create({ name: 'normal_login' })(LoginFrom);

export default Login;