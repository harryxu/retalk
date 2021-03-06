import React, { Component } from 'react'
import { connect } from 'react-redux'
import Remarkable from 'remarkable'

import { fetchComments } from '../actions'

export class CommentList extends Component {

    componentDidMount() {
        this.props.dispatch(fetchComments(this.props.tid))
    }

    rawMarkup(str) {
        if (!this.md) {
            this.md = new Remarkable()
        }
        var rawMarkup = this.md.render(str);
        return { __html: rawMarkup };
    }

    render() {
        const {comments, tid} = this.props

        let commentList = comments[tid] ? comments[tid] : {fetching: true}

        return (
            <div className="clearfix">

                {commentList.fetching ? '评论加载中...' :
                    <div className="clearfix comment-list">
                        <h3>评论</h3>
                        {commentList.comments.map((comment, i) =>
                            <div key={i} className="panel panel-default">
                                <div className="panel-heading">{comment.username}@{comment.created_at}</div>
                                <div className="panel-body" dangerouslySetInnerHTML={this.rawMarkup(comment.content)} />
                            </div>
                        )}
                    </div>
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        comments: state.comments
    }
}

export default connect(mapStateToProps)(CommentList)
