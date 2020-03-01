import React from 'react';
import CardList from '../components/CardList';
import Searchbox from '../components/Searchbox';
import Scroll from '../components/Scroll';
import './App.css';

class App extends React.Component
{
    constructor(){
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({robots: users}));
    }

    onsearchchange = (event) =>{
        console.log(event.target.value);
        this.setState({searchfield:event.target.value })
    }

    render(){
        const filteredrobots = this.state.robots.filter(robots=>{return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())})
    return(
        <div>
            
            <h1>Robo-Friends</h1>
            <h3>The only friends you'll need!</h3>
            <Searchbox onsearchchange = {this.onsearchchange} />
            <Scroll>
            <CardList robots = {filteredrobots}/>
            </Scroll>          
        </div>
    )
    }
}

export default App;