import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from './constants.js'


const initialStateSearch = { //Recreating the state in App.js
    searchField: ''
}

// creation of reducer
//We create a reducer for each specific case

// its called searchRobots bc that is what it does using the searchfield it takes a STATE that is the STATE of the app, 
//and the ACTION that just happened
//state= initialState is used to give DEFAULT PARAMETERS
export const searchRobots = (state = initialStateSearch, action = {}) => {//ACTIONS are OBJECTS
    switch (action.type) {//type is part of actions.js 
        case CHANGE_SEARCH_FIELD://If we receive CSF the return  a new STATE  with action.payload whatever user has entered in searchfield
            return Object.assign({}, state, { searchField: action.payload });// You have to pass third parameter as an OBJECT{}
        //state is the initialState we are receiving,next parameter is whatever we want to change in that object
        //You can also use object destructurin as: return{...state,searchField:action.payload} instead of Object.assign
        default:
            return state
    }

}

const initialStateRobots = {
    isPending: false,
    robots: [],
    error:''

}

export const requestRobots = (state = initialStateRobots, action = {}) => {
    switch (action.type) {
        case REQUEST_ROBOTS_PENDING:
            return Object.assign({}, state, { isPending: true })
        case REQUEST_ROBOTS_SUCCESS:
            return Object.assign({}, state, { robots: action.payload, isPending:false})
        case REQUEST_ROBOTS_FAILED:
            return Object.assign({}, state, {error: action.payload, isPending:false})
        default:
        return state;
    }
}