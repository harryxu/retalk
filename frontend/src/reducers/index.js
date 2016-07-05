import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'


function topicList(state = {}, action)
{
    
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
    topic_list: topicList,
    topic,
    comments: comment,
    routing
})

export default rootReducer
