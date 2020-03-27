import React from 'react';
import CardList from '../component/CardList';
import SearchBox from '../component/SearchBox';
import Scrolle from '../component/Scrolle';
import ErrorBoundry from '../component/ErrorBoundry'
class App extends React.Component {
constructor(){
    super()
    this.state ={
        robots: [],
        searchField: ''
    }
}
componentDidMount(){
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(response=> response.json())
    .then(users=> this.setState({robots: users}))
}
onSearchChange = (event)=>{
this.setState({searchField: event.target.value})   
    
}
    render(){
        const filterRobots = this.state.robots.filter(robot=>{
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
        } )
    return(
        <div>
            <h1 className="tc">Hello Freinds</h1>
            <SearchBox searchChange={this.onSearchChange}/>
            <Scrolle>
                <ErrorBoundry>
                <CardList robots={filterRobots} />

                </ErrorBoundry>
            </Scrolle>
        </div>
    )
}
}
export default App