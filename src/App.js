import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';

import { SearchBox } from './components/search-box/search-box.component'



class App extends Component{
  constructor(){
    super();

    this.state= {
      Monsters:[],
      searchField: ""
    };
   // this.handleChange=this.handleChange.bind(this);
  }
  handleChange= (e)=>{
    this.setState({searchField:e.target.value})
  }
  componentDidMount(){
    
    const url = ""; 
    fetch("https://jsonplaceholder.typicode.com/users",{'mode': 'no-cors'})
    .then(response=>response.json())
    .then(users=>this.setState({Monsters:users}))
    .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
   
  }
  render(){
    const { Monsters,searchField }=this.state;
    const filteredMonsters=Monsters.filter(filMonster=>
     //  console.log(searchField))
      filMonster.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
          <div className="App">
            <h1>Monsters</h1>
            <SearchBox placeholder="Search monster" 
           handleChange={ this.handleChange}></SearchBox>
          
            <CardList Monsters={filteredMonsters}></CardList>
          </div>
        );
  }
}
 
export default App;
