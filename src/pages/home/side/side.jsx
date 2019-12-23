import React from "react"
import { Menu, Icon } from "antd"

const { SubMenu } = Menu

class Sider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rootSubmenuKeys: this.props.menuList.map(item => String(item.id)),
            openKeys: ["1"]
        }
    }
    // 点击菜单选项
    handleClick = e => {
        this.props.onClickMenu(e)
    }
    // 打开新根子菜单 关闭旧的
    onOpenChange = items => {
        const latestOpenKey = items.find(key => this.state.openKeys.indexOf(key) === -1);
        if (this.state.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            this.setState({ openKeys: items });
        } else {
            this.setState({
                openKeys: latestOpenKey ? [latestOpenKey] : [],
            });
        }
    }
    componentWillReceiveProps (props) {
        this.setState({
            rootSubmenuKeys: props.menuList.map(item => String(item.id))
        })
    }
    render () {
        console.log(this.state.openKeys)
        let that = this;
        let { inlineCollapsed } = this.props;
        return (
            <Menu
                onClick={this.handleClick}
                style={inlineCollapsed ? { transition: "width 1s" } : { width: 256, transition: "width 1s" }}
                defaultSelectedKeys={["1"]}
                defaultOpenKeys={["sub1"]}
                mode="inline"
                inlineCollapsed={inlineCollapsed}
                openKeys={this.state.openKeys}
                onOpenChange={this.onOpenChange}
            >
                {
                    (that.props.menuList).map(item => {
                        if (item.children && item.children.length) {
                            return (
                                <SubMenu
                                    key={item.id}
                                    title={
                                        <span>
                                            <Icon type="appstore" />
                                            <span>{item.menuTitle}</span>
                                        </span>
                                    }
                                >
                                    {
                                        item.children.map(item1 => {
                                            return <Menu.Item key={item1.id}>
                                                <span>{item1.menuTitle}</span>
                                            </Menu.Item>
                                        })
                                    }
                                </SubMenu>
                            )
                        } else {
                            return (
                                <Menu.Item key={item.id}>
                                    <Icon type="mail" />
                                    <span>{item.menuTitle}</span>
                                </Menu.Item>)
                        }
                    })
                }
                {/* <SubMenu
                    key="sub2"
                    title={
                        <span>
                            <Icon type="appstore" />
                            <span>Navigation Two</span>
                        </span>
                    }
                >
                    <Menu.Item key="5">Option 5</Menu.Item>
                    <Menu.Item key="6">Option 6</Menu.Item>
                    <SubMenu key="sub3" title="Submenu">
                        <Menu.Item key="7">Option 7</Menu.Item>
                        <Menu.Item key="8">Option 8</Menu.Item>
                    </SubMenu>
                </SubMenu>
                <Menu.Item key="5">Option 5</Menu.Item> */}
            </Menu>
        )
    }
}

export default Sider
