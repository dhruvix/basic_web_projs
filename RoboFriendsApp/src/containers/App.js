import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import Searchbox from '../components/Searchbox';
import Scroll from '../components/Scroll';
import './App.css';

function App() 
{
    const [robots, setRobots] = useState([]);
    const [searchfield, setSearch] = useState('');

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => setRobots(users));
    });

    const onsearchchange = (event) =>{
        console.log(event.target.value);
        setSearch(event.target.value);   
    }

    const filteredrobots = robots.filter(robot=>{return robot.name.toLowerCase().includes(searchfield.toLowerCase())});
    
    return(
        <div>
            
            <h1>Robo-Friends</h1>
            <h3>The only friends you'll need!</h3>
            <Searchbox onsearchchange = {onsearchchange} />
            <Scroll>
            <CardList robots = {filteredrobots}/>
            </Scroll>          
        </div>
    )
}

export default App;