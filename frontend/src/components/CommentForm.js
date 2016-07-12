import React, { Component } from 'react'
import { connect } from 'react-redux'

import { postComment } from '../actions'

export class CommentForm extends Component {

    constructor() {
        super()

        this.state = {
            busy: false
        }
    }

    handlePost() {
        var content = this.refs.commentInput.value
        if (content.length > 0) {
            this.setState({busy: true})
            this.props.dispatch(postComment(this.props.tid, content))
        }
    }

    render() {
        return (
            <div className="well">
                <form className="form-horizontal">
                    <fieldset>
                        <legend>评论</legend>
                    </fieldset>

                    <div className="form-group">
                        <div className="col-md-12">
                            <textarea ref="commentInput" rows="3" className="form-control" id="commentInput" ></textarea>
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="col-md-10">
                            <button onClick={this.handlePost.bind(this)} disabled={this.state.busy} type="button" className="btn btn-primary">发布</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default connect()(CommentForm)
