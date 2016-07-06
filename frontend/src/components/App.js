import React from 'react'

import { Component } from 'react'

export default class App extends Component {

    render() {
        const { children } = this.props

        return (
            <div>
                <h1>Retalk system.</h1>

                {children}
            </div>
        )
    }

}
