import React from "react";

import { Button, Icon } from "antd";

class Head extends React.Component {
    constructor(props) {
        super(props)
    }
    toggleCollapsed () {
        this.props.toggleCollapsed(this.props.collapsed)
    }
    render () {
        return (
            <div style={{ height: "100%", display: "flex" }}>
                <div style={{ color: "red" }}>时空</div>
                <div style={{ width: "50px", height: "50px", background: "#fff" }}>
                    <Button type="primary" onClick={this.toggleCollapsed.bind(this)} style={{ marginBottom: 16 }}>
                        <Icon type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'} />
                    </Button>
                </div>
            </div>
        )
    }
}
export default Head;