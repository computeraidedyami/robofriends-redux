import { CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from './constants.js'

//HERE WE ARE RETURNING AN OBJECT
export const setSearchField = (text) =>({
    //you use parenthesis after arrow function to avoid implicit return statement
    //setSearchField takes text that is what user inputs and return object
    type:'CHANGE_SEARCH_FIELD',//here is the ACTION in that is being taken and it's going to send??
    //CONSTANTS are usually capitalized 
    payload: text //PAYLOAD sends whatever data is needed to REDUCER (whateva the user enters)
})

//We have a - right away, when we call this action, a dispatch that REQUEST_ROBOTS_PENDING and then we

//fetch the users, we receive the users, and then we either have a success with the payload of the users
//HERE WE ARE NOT RETURNING AN OBJECT, WE ARE NOT RETURNING ANYTHING
//or an error with the payload of error.
export const requestRobots = () =>(dispatch) =>{ //dispatch comes from  App const mapDispatchProps
    dispatch({ type:REQUEST_ROBOTS_PENDING });
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload:data})) //data is what we received from the API
    .catch( error => dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error}))   //.then and .catch is used in case there is an error
}




