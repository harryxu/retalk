import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import { fetchTopics } from '../actions'
import { path } from '../common/helper'

export class TopicList extends Component {

    componentDidMount() {
        this.props.dispatch(fetchTopics())
    }

    render() {
        const { fetching, topics, user } = this.props

        var postUrl = user.name ? path('t/post') : path('auth/login')

        return (
            <div>
                <Link to={postUrl} className="btn btn-raised btn-primary">发帖</Link>

                <div className="well">
                    {fetching ? '正在加载...' :
                        <ul>
                            {topics.map((topic, i) =>
                                <li key={i}>
                                    <Link to={path(`t/${topic.id}`)}>{topic.title}</Link>
                                    <span className="pull-right">{topic.username}@{topic.created_at}</span>
                                </li>
                            )}
                        </ul>

                    }
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        topics: state.topicList.topics,
        user: state.user
    }
}

export default connect(mapStateToProps)(TopicList)
