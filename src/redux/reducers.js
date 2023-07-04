import { combineReducers } from 'redux'

const user = (state = "", action) => { 
    switch(action.type) {
        case 'USER_INFO':
            return [action.value]
        default:
            return state
    }
}

const listing = (state = [], action) => {
    switch(action.type) {
        case 'ADD_LISTING':
            console.log(state, action)
            return [ ...state, action.value ]
        case 'REMOVE_LISTING':
            const business = [ ...state ]
            business.splice(action.value, 1)
            return business
        default:
            return state
    }
}











export default combineReducers({user, listing})