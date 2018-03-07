import React, { Component } from 'react';
// import React from 'react'

import './App.css';
import logo from './logo.svg';
import './App.css';

import AddIdeaCard from './AddIdeaCard.js'
import Card from './Card.js'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      ideas: []
    }
  this.fetchIdea = this.fetchIdea.bind(this);
  this.addIdea = this.addIdea.bind(this);
  this.removeIdea = this.removeIdea.bind(this);
  this.updateQuality = this.updateQuality.bind(this);

  }

 componentDidMount() {
  this.fetchIdea()
     
  }

  fetchIdea() {
    const oldIdeas = []
    for (var i = 0; i < localStorage.length; i++){
    var retrieveObject = localStorage.getItem(localStorage.key(i));
    var parsedObject = JSON.parse(retrieveObject);
    oldIdeas.push(parsedObject)
  } 
  this.setState({ideas: oldIdeas})  
}

addIdea(idea) {
  this.setState({ideas: [idea, ...this.state.ideas]})
  // this.setState((state) => {ideas: [state.ideas.idea]})
}

removeIdea(uniqueID) {
  const filteredIeas = this.state.ideas.filter((idea) => {
    return idea.uniqueID !== uniqueID
  })
  this.setState({ideas: filteredIeas})
}

updateQuality(id) {
  console.log('button clicked')
}
  
  render() {
    if (!localStorage.ideas) {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, enter an idea in the title field. <code>src/App.js</code> 
        </p>
        <section >
          <h1><span className="h1-span">idea</span>box</h1>
          <form >
            <AddIdeaCard addIdea={this.addIdea} />
            
          </form>
        </section>
        <section className="search-container" role="search">
          <input type="search" className="input-fields" id="input-search" placeholder="Search" />
        </section>
        <section>
          <ul className="list">
           {
            this.state.ideas.map((idea, i) => {
              return <Card updateQuality={this.updateQuality} removeIdea={this.removeIdea} uniqueID={idea.uniqueID} cardName={idea.cardName} cardBody={idea.cardBody} key={i}/>
            })
           }
          </ul>
        </section>      
    </div>
    );
  }
  }
}

export default App;
