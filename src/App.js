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

  }

 componentDidMount() {
  this.fetchIdea()
     
  }

  fetchIdea() {
  for (var i = 0; i < localStorage.length; i++){
    var retrieveObject = localStorage.getItem(localStorage.key(i));
    var parsedObject = JSON.parse(retrieveObject);
    console.log(parsedObject)}

}

addIdea(idea) {
  this.setState({ideas: [idea, ...this.state.ideas]})
}
  

  render() {
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
        <section>
          <ul >
           {
            this.state.ideas.map((idea, i) => {
              return <Card cardName={idea.cardName} cardBody={idea.cardBody} key={i}/>
            })
           }

          </ul>
        </section>

        
        {/*<section >
          
          
            
             

            
            <button id="button-save" class="input-fields" aria-labelledby="save idea">save</button>
          
        </section>
        <section class="search-container" role="search">
          <input type="search" class="input-fields" id="input-search" placeholder="Search" />
        </section>
        <ul class="ideas-container" role="main">
        </ul>*/}
    </div>
    );
  }
}

export default App;
