import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchTopics } from '../actions'

export class TopicList extends Component {

    componentDidMount() {
        this.props.dispatch(fetchTopics())
    }

    render() {
        const { fetching, topics } = this.props
        return (
            <div>
                {fetching ? '正在加载...' :
                    <ul>
                        {topics.map((topic, i) =>
                            <li key={i}>{topic.title}</li>
                        )}
                    </ul>

                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state.topicList;
}

export default connect(mapStateToProps)(TopicList)
