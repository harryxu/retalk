import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'

function topic(state = [], action)
{
    return state;
}

function comment(state = {}, action)
{
    return state;
}

const rootReducer = combineReducers({
    topics: topic,
    comments: comment,
    routing
})

export default rootReducer
