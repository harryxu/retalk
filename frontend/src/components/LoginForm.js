import React, { Component } from 'react'
import { connect } from 'react-redux'

import { signUserIn } from '../actions'

export class LoginForm extends Component {

    handleLogin() {
        var username = this.refs.usernameInput.value;
        if (username.length > 0) {
            this.props.dispatch(signUserIn(username))
        }
    }

    render() {
        return (
            <form className="col-lg-6">
                <h2>登录</h2>
                <div className="form-group">
                    <label for="usernameInput">用户名</label>
                    <input ref="usernameInput" type="text" className="form-control" id="usernameInput" placeholder="请输入用户名" />
                </div>
                <button onClick={this.handleLogin.bind(this)} type="button" className="btn btn-primary">登录</button>
            </form>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(LoginForm)

