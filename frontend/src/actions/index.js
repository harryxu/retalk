import fetch from 'isomorphic-fetch'

import { apiUrl } from '../common/helper'

export const LIST_TOPICS = 'LIST_TOPICS'
export const LOAD_TOPIC = 'LOAD_TOPIC'

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

        return fetch(apiUrl('topic'))
            .then(response => response.json())
            .then(json => dispatch(receiveTopics(json)))
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

        return fetch(apiUrl(`topic/${id}`))
            .then(response => response.json())
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

