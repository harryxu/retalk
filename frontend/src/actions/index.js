import { push } from 'react-router-redux'

import { path, apiUrl } from '../common/helper'

export const SIGN_USER_IN = 'SIGN_USER_IN'
export const LOAD_USER = 'LOAD_USER'

export const LIST_TOPICS = 'LIST_TOPICS'
export const LOAD_TOPIC = 'LOAD_TOPIC'

export const LIST_COMMENTS = 'LIST_COMMENTS'

export function signUserIn(username) {
    return (dispatch, getState) => {
        return $.ajax(apiUrl('auth/login'), {
            method: 'POST',
            dataType: 'json',
            data: {username}
        }).done(json =>  {
                dispatch(receiveUser(json))
                dispatch(push(path()))
            })
    }
}

export function loadUser() {
    return (dispatch, getStatus) => {
        return $.getJSON(apiUrl('auth/user'))
            .done(json => dispatch(receiveUser(json)))
    }
}

export function receiveUser(data) {
    return {
        type: LOAD_USER,
        fetching: false,
        data
    }
}


/**
 * 加载帖子列表
 * @returns {function()}
 */
export function fetchTopics() {
    return (dispatch, getState) => {
        dispatch({
            type: LIST_TOPICS,
            fetching: true
        })

        return $.getJSON(apiUrl('topic'))
            .done(json => dispatch(receiveTopics(json)))
    }
}

export function receiveTopics(data) {
    return {
        type: LIST_TOPICS,
        fetching: false,
        data
    }
}

/**
 * 加载单一帖子
 * @param id
 * @returns {function()}
 */
export function loadTopic(id) {
    return (dispatch, getState) => {
        dispatch({
            type: LOAD_TOPIC,
            fetching: true
        })

        return $.getJSON(apiUrl(`topic/${id}`))
            .then(json => dispatch(receiveTopic(json)))
    }
}

export function receiveTopic(data) {
    return {
        type: LOAD_TOPIC,
        fetching: false,
        data
    }
}

/**
 * 发布新帖
 * @param data
 * @returns {function()}
 */
export function postTopic(data) {
    return (dispatch, getState) => {
        return $.ajax(apiUrl('topic'), {
            method: 'POST',
            dataType: 'json',
            data: data
        })
            .done(response => dispatch(push(path(`t/${response.topic.id}`))))
    }
}

/**
 * 加载评论
 * @param topicId
 * @returns {function()}
 */
export function fetchComments(topicId) {
    return (dispatch, getstate) => {
        dispatch({
            type: LIST_COMMENTS,
            fetching: true
        })
        return $.getJSON(apiUrl(`comment?tid=${topicId}`))
            .done(data => dispatch(receiveComments(topicId, data)))
    }
}

export function receiveComments(topicId, data) {
    return {
        type: LIST_COMMENTS,
        fetching: false,
        topicId,
        data
    }
}

/**
 * 发评论
 * @param topicId
 * @param comment
 * @returns {function()}
 */
export function postComment(topicId, comment) {
    return (dispatch, getstate) => {
        return $.ajax(apiUrl('comment'), {
                method: 'post',
                dataType: 'json',
                data: {tid: topicId, comment}
            })
            .done(response => dispatch(fetchComments(topicId)))
    }
}
