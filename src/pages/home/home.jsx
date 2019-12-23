import React from "react";

import Head from "./head/head.jsx";
import Side from "./side/side.jsx";

import "./home.css";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false, // 菜单栏的显示隐藏
            menuList: [
                {
                    id: 1,
                    menuTitle: "首页",
                    icon: ""
                },
                {
                    id: 2,
                    menuTitle: "我的工作台",
                    icon: "",
                    children: [
                        {
                            id: 21,
                            menuTitle: "订餐管理",
                            icon: ""
                        },
                        {
                            id: 22,
                            menuTitle: "标签答应",
                            icon: ""
                        },
                        {
                            id: 23,
                            menuTitle: "送餐单打印",
                            icon: ""
                        },
                        {
                            id: 24,
                            menuTitle: "送餐单打印",
                            icon: ""
                        },
                        {
                            id: 25,
                            menuTitle: "送餐单打印",
                            icon: ""
                        },
                        {
                            id: 26,
                            menuTitle: "送餐单打印",
                            icon: ""
                        },
                        {
                            id: 27,
                            menuTitle: "送餐单打印",
                            icon: ""
                        },
                        {
                            id: 28,
                            menuTitle: "送餐单打印",
                            icon: ""
                        },
                        {
                            id: 29,
                            menuTitle: "送餐单打印",
                            icon: ""
                        },
                        {
                            id: 30,
                            menuTitle: "送餐单打印",
                            icon: ""
                        }
                    ]
                },
                {
                    id: 3,
                    menuTitle: "菜品管理",
                    icon: "",
                    children: [
                        {
                            id: 31,
                            menuTitle: "菜品维护",
                            icon: ""
                        },
                        {
                            id: 32,
                            menuTitle: "菜品分类",
                            icon: ""
                        },
                        {
                            id: 33,
                            menuTitle: "餐次管理",
                            icon: ""
                        }
                    ]
                }
            ]
        }
        // setTimeout(() => {
        //     this.setState({
        //         menuList: []
        //     })
        // }, 2000)
    }
    // 点击菜单
    clickMenu (e) {
        console.log("home", e);
    }
    // 点击按钮
    toggleCollapsed (e) {
        this.setState({
            collapsed: !e
        })
    }
    render () {
        return (
            <div className="content">
                <div style={{ width: "100%", height: "60px" }}>
                    <Head collapsed={this.state.collapsed} toggleCollapsed={(e) => this.toggleCollapsed(e)}></Head>
                </div>
                <div style={{ width: '100%', flex: 1, display: 'flex', justifyContent: 'space-between' }}>
                    <div>
                        <Side menuList={this.state.menuList} inlineCollapsed={this.state.collapsed} onClickMenu={(e) => this.clickMenu(e)}></Side>
                    </div>
                    <div className="nav">
                        asd
                    </div>
                </div>
            </div>
        )
    }
}
export default Home;