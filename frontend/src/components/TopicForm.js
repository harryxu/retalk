import React, { Component } from 'react'
import { IndexLink } from 'react-router'
import { connect } from 'react-redux'

import { postTopic } from '../actions'
import { path } from '../common/helper'


export class TopicForm extends Component {
    constructor() {
        super()

        this.state = {
            busy: false
        }
    }

    handlePost() {
        this.setState({busy: true})

        this.props.dispatch(postTopic({
            title: this.refs.titleInput.value,
            content: this.refs.bodyInput.value
        }))
    }

    render() {
        return (
            <div className="well">
                <form className="form-horizontal">
                    <fieldset>
                        <legend>发布主题</legend>

                        <div className="form-group">
                            <label className="control-label col-md-2" htmlFor="titleInput">标题</label>
                            <div className="col-md-10">
                                <input ref="titleInput" autoFocus={true} type="text" className="form-control" id="titleInput" />
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="control-label col-md-2" htmlFor="bodyInput">内容</label>
                            <div className="col-md-10">
                                <textarea ref="bodyInput" rows="10" className="form-control" id="bodyInput" ></textarea>
                            </div>
                        </div>

                        <div className="form-group">
                            <div className="col-md-10 col-md-offset-2">
                                <IndexLink to={path()} className="btn btn-default">取消</IndexLink>
                                <button onClick={this.handlePost.bind(this)} disabled={this.state.busy} type="button" className="btn btn-primary">发布</button>
                            </div>
                        </div>
                    </fieldset>
                </form>
            </div>
        )
    }
}


export default connect()(TopicForm)
