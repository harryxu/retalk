import React, { Component } from 'react'
import { connect } from 'react-redux'
import { IndexLink } from 'react-router'

import { path } from '../common/helper'
import { signUserIn } from '../actions'

export class LoginForm extends Component {

    handleLogin(event) {
        event.preventDefault()

        var username = this.refs.usernameInput.value;
        if (username.length > 0) {
            this.props.dispatch(signUserIn(username))
        }
    }

    render() {
        return (
            <div className="well">
                <form className="form-horizontal" onSubmit={this.handleLogin.bind(this)}>
                    <fieldset>
                        <legend>登录</legend>
                        <div className="form-group">
                            <label className="control-label col-md-2" htmlFor="usernameInput">用户名</label>
                            <div className="col-md-10">
                                <input ref="usernameInput" autoFocus={true} type="text" className="form-control" id="usernameInput" placeholder="请输入用户名" />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-md-10 col-md-offset-2">
                                <IndexLink to={path()} className="btn btn-default">取消</IndexLink>
                                <button type="submit" className="btn btn-primary">登录</button>
                            </div>
                        </div>
                    </fieldset>
                </form>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(LoginForm)

