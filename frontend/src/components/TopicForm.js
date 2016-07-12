import React, { Component } from 'react'
import { IndexLink } from 'react-router'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'

import { postTopic } from '../actions'
import { path } from '../common/helper'


export class TopicForm extends Component {
    constructor() {
        super()

        this.state = {
            busy: false
        }
    }

    handlePost(event) {
        event.preventDefault()

        if (this.refs.titleInput.value.length > 0) {
            this.setState({busy: true})

            this.props.dispatch(postTopic({
                title: this.refs.titleInput.value,
                content: this.refs.bodyInput.value
            }))
        }
    }

    componentWillMount() {
        if (!this.props.user.fetching && !this.props.user.name) {
            this.props.dispatch(push(path('auth/login')))
        }
    }

    componentWillReceiveProps(nextProps) {
        if (!nextProps.user.fetching && !nextProps.user.name) {
            this.props.dispatch(push(path('auth/login')))
        }
    }

    render() {
        return (
            <div className="well">
                <form className="form-horizontal" onSubmit={this.handlePost.bind(this)} >
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
                                <button disabled={this.state.busy} type="submit" className="btn btn-primary">发布</button>
                            </div>
                        </div>
                    </fieldset>
                </form>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(TopicForm)
