import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'
import * as actions from '../actions';


function topicList(state = { topics: [], fetching: true }, action) {
    if (action.type != actions.LIST_TOPICS) {
        return state
    }

    if (action.fetching) {
        return Object.assign({}, state, {
            topics: [],
            fetching: true
        })
    }
    else {
        action.data.fetching = false;
        return Object.assign({}, state, action.data)
    }
}

function topic(state = {topic: null, fetching: true}, action)
{
    if (action.type == actions.LOAD_TOPIC) {
        return {
            fetching: action.fetching,
            topic: action.fetching ? null : action.data.topic
        }
    }

    return state;
}

function commentData(state = {}, action)
{
    if (action.type == actions.LIST_COMMENTS) {
        if (action.fetching) {
            return Object.assign({}, state, {
                [action.topicId]: {
                    fetching: true,
                    comments: []
                }
            })
        }
        else {
            return Object.assign({}, state, {
                [action.topicId]: {
                    fetching: false,
                    comments: Array.isArray(action.data) ? [] : action.data.replies
                }
            })
        }
    }
    return state;
}

function user(state = {name:null}, action)
{
    if (action.type == actions.LOAD_USER) {
        return Object.assign({}, state, action.data, {
            fetching: false
        })
    }
    return state;
}

const rootReducer = combineReducers({
    user,
    topicList,
    topic,
    comments: commentData,
    routing
})

export default rootReducer
