import React, { Component } from 'react'
import { connect } from 'react-redux'
import Remarkable from 'remarkable'

import { loadTopic } from '../actions'

export class Topic extends Component {

    componentDidMount() {
        if (this.props.params.id) {
            this.props.dispatch(loadTopic(this.props.params.id))
        }
    }

    rawMarkup(str) {
        var md = new Remarkable()
        var rawMarkup = md.render(str);
        return { __html: rawMarkup };
    }

    render() {

        const { fetching, topic } = this.props

        return (
            <div className="well">
                {fetching ? <h2>加载中...</h2> :
                    <div className="topic">
                        <h2>{topic.title}</h2>
                        <div className="body">
                            <div dangerouslySetInnerHTML={this.rawMarkup(topic.content)} />
                        </div>
                    </div>
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state.topic
}

export default connect(mapStateToProps)(Topic)
