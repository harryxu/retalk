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
        const { fetching, topics } = this.props
        return (
            <div>

                <Link to={path('t/post')} className="btn btn-raised btn-primary">发帖</Link>


                <div className="well">
                {fetching ? '正在加载...' :
                    <ul>
                        {topics.map((topic, i) =>
                            <li key={i}><Link to={path(`t/${topic.id}`)}>{topic.title}</Link></li>
                        )}
                    </ul>

                }
            </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state.topicList;
}

export default connect(mapStateToProps)(TopicList)
