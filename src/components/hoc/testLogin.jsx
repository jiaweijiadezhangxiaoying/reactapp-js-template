import React, { Component } from 'react';

export default (Com) => {
    return class Testlogin extends Component {
        constructor(props) {
            super(props);
            this.state = {
                Com: null
            }
        }
        componentDidMount() {
            if (sessionStorage.getItem("userId")) {
                this.setState({
                    Com
                })
            } else {
                this.setState({
                    Com: null
                })
                sessionStorage.setItem("caUrl", this.props.location.pathname)
                this.props.history.replace("/login")
            }
        }
        render() {
            return (
                <div>
                    {
                        this.state.Com && <Com {...this.props} />
                    }
                </div>
            );
        }
    }
}