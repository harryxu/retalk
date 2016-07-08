import React, { Component } from 'react'
import { Link, IndexLink } from 'react-router'
import { connect } from 'react-redux'

import { path } from '../common/helper'


export class App extends Component {

    render() {
        const { children, user } = this.props

        return (
            <div className="container">
                <div className="header clearfix">
                    <nav className="navbar navbar-default">
                        <div className="container-fluid">
                            <div class="navbar-header">
                                <IndexLink className="navbar-brand" to={path()}>Retalk system</IndexLink>
                            </div>
                            <div className="collapse navbar-collapse">
                                {user.name
                                    ? <p className="navbar-text navbar-right">{user.name} |
                                        <Link to={path('auth/logout')}>退出</Link></p>
                                    : <div className="pull-right">
                                        <Link to={path('auth/login')} className="btn btn-primary navbar-btn">登录</Link>
                                    </div>
                                }
                            </div>
                        </div>
                    </nav>
                </div>

                <div className="row">
                    {children}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(App)
