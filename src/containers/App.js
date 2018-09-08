import React, { Component } from 'react';
import {connect} from 'react-redux'; //connect has to also be applied in export: export default connect()(App); ADD BRACKETS TO APP
//connect is a HIGHER ORDER FUNCTION: A function that returns another function
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll'
import './App.css';
import {setSearchField,requestRobots} from '../actions' //The ACTIONS(setSearchField) that we have are imported 

const mapStateToProps = state =>{
    return {
        searchField: state.searchRobots.searchField, //the searchRobots was deleted but later added bc 
        //searchField is going to be used by App comes from state.searchRobots.searchField that comer from the 
        //...reducer in index.js (store with search robos reducer)
        robots: state.requestRobots.robots,//this is the state from the reducer
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}

const mapDispatchToProps=(dispatch) =>{//dispatch is what triggers the action(an ACTION is an object)
//dispatch will be needed into the reducer.dispatch will be used to send actions 
 return {onSearchChange:(event) => dispatch(setSearchField(event.target.value)) ,       //onSearchChange is an input box where users type
// setSearchField "() listens to" text in actions.js
onRequestRobots:() =>dispatch(requestRobots())// we need the requestrobost action and requestrobots action needs a dispatch
// method to dispatch this actions.   =>requestRobots(dispatch)  is the same as  =>dispatch(requestRobots())

 }
}
class App extends Component {
    // constructor() {
    //     super()
    //     this.state = {
    //         robots: [],
    //     }
    // }

    componentDidMount(){ 
        this.props.onRequestRobots();

        // fetch('https://jsonplaceholder.typicode.com/users')
        // .then(response => response.json())
        // .then(users => this.setState({robots:users}));
 }

    // onSearchChange = (event) => {
    //     this.setState({ searchfield: event.target.value })
    // }
    render() {
        //this.state.robots  and this.state.searchfield  is destructured to:
        // const { robots} = this.state;
        const {searchField,onSearchChange, robots, isPending} = this.props;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
        })
    // All if else statement can be turned to  a ternary : return !robots.lengtht ? <h1>..</h1> : (<div className= 'tc'>)...
        // !robots.length could be used instead 
return isPending?

        // if (robots.lenght === 0){
             <h1>Loading</h1>:
         (
                <div className='tc'>
                    <h1 className='f1'>Robofriends</h1>
                    <SearchBox searchChange={onSearchChange} />
                    <Scroll>
                    <CardList robots={filteredRobots} />
                    </Scroll>
                </div>
            );
        }
    }

export default connect(mapStateToProps, mapDispatchToProps) (App);
//connect accepts two parameters, this names are Redux Standard
//Using connect lets us subscribe to any state changes in the REDUX STORE
// App now knows there is a STORE REDUX that if it has changes it might be interested in.
//We tell it what to be interested in That is what state (mapStateToProps)should I listen to,
// what dispatch(mapDispatchToProps) or what action should I listen to.