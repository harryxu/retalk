import React, { Component } from 'react'
import { connect } from 'react-redux'
import Remarkable from 'remarkable'

import { loadTopic } from '../actions'
import CommentForm from '../components/CommentForm'

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

        const { fetching, topic, user } = this.props

        return (
            <div>
                <div className="well">
                    {fetching ? <h2>加载中...</h2> :
                        <div className="topic">
                            <div className="clearfix">
                                <h2 className="pull-left">{topic.title}</h2>
                                <span className="pull-right">{topic.username}</span>
                            </div>
                            <div className="body">
                                <div dangerouslySetInnerHTML={this.rawMarkup(topic.content)} />
                            </div>
                        </div>
                    }
                </div>

                { (!fetching && user.name) && <CommentForm tid={topic.id} /> }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        topic: state.topic.topic,
        fetching: state.topic.fetching,
        user: state.user
    }
}

export default connect(mapStateToProps)(Topic)
