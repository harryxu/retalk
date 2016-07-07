import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'
import * as actions from '../actions';


function topicList(state = {
    fetching: false,
    topics: []
}, action) {
    switch (action.type) {
        case actions.LIST_TOPICS:
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
        default:
            return state
    }
}

function topic(state = {}, action)
{
    return state;
}

function comment(state = {}, action)
{
    return state;
}

const rootReducer = combineReducers({
    topicList,
    topic,
    comments: comment,
    routing
})

export default rootReducer
