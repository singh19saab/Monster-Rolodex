import React, { Component } from 'react'
//import logo from './logo.svg';
import { CardList } from './components/card-list/card-list-component'
import SearchBox from './components/search-box/search-box-component'


import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: '',
    }
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))
  }

  handleChange = e => {                               //arrow funtion automatically bind the "this" keyword to its required context in this case it is App Component we dont need to explicitly bind this in our constructor
    this.setState({ searchField: e.target.value })
  }

  render() {
    const { monsters, searchField } = this.state;
    const filterMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className="App">
        <h1> Monster Rolodex</h1>
        <SearchBox 
        placeholder = 'search monster'
        handleChange= {this.handleChange} />
        <CardList monsters={filterMonsters} />
      </div>
    )
  }
}


export default App;
