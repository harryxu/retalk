import fetch from 'isomorphic-fetch'

import { apiUrl } from '../common/helper'

export const LIST_TOPICS = 'LIST_TOPICS'



export function fetchTopics() {
    return (dispatch, getState) => {
        dispatch({
            type: LIST_TOPICS,
            fetching: true
        })

        return fetch(apiUrl('/topic'))
            .then(response => response.json())
            .then(json => dispatch(receiveTopics(json)))
    }
}

export function receiveTopics(data) {
    return {
        type: LIST_TOPICS,
        data: data
    }
}
