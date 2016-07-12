import React, { Component } from 'react'
import { Link, IndexLink } from 'react-router'
import { connect } from 'react-redux'

import { path } from '../common/helper'
import { loadUser } from '../actions'


export class App extends Component {

    componentDidMount() {
        this.props.dispatch(loadUser())
    }

    render() {
        const { children, user } = this.props

        return (
            <div className="container">
                <div className="header clearfix">
                    <nav className="navbar navbar-info">
                        <div className="container-fluid">
                            <div class="navbar-header">
                                <IndexLink className="navbar-brand" to={path()}>Retalk system</IndexLink>
                            </div>
                            <div className="collapse navbar-collapse">
                                <p className="navbar-text navbar-right">
                                    {user.fetching ? <span>...</span>
                                        : user.name
                                            ? <span>{user.name} | <a href={path('auth/logout')} className="navbar-link">退出</a></span>
                                            : <Link className="navbar-link" to={path('auth/login')}>登录</Link>
                                }
                                </p>
                            </div>
                        </div>
                    </nav>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        {children}
                    </div>
                </div>

                <footer className="footer">
                    <div className="container">
                        <p className="text-muted">Retalk System. React Redux Demo.
                            <a href="https://github.com/harryxu/retalk" target="_blank">Code on github</a>
                        </p>
                    </div>
                </footer>
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
