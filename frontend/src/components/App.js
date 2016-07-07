import React, { Component } from 'react'
import { Link, IndexLink } from 'react-router'

import { path } from '../common/helper'


export default class App extends Component {

    render() {
        const { children } = this.props

        return (
            <div className="container">
                <div className="header clearfix">
                    <h3 className="text-muted">
                        <IndexLink to={path()}>Retalk system</IndexLink>
                    </h3>
                </div>

                <div className="row">
                    {children}
                </div>
            </div>
        )
    }

}
