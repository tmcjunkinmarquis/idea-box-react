import React, { Component } from 'react';
// import React from 'react'

import './App.css';

import AddIdeaCard from './AddIdeaCard.js'
import Card from './Card.js'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ideas: []
    }
    this.fetchIdea = this.fetchIdea.bind(this);
    this.addIdea = this.addIdea.bind(this);
    this.removeIdea = this.removeIdea.bind(this);
    this.updateQuality = this.updateQuality.bind(this);
  }

  componentWillMount() {
    this.fetchIdea()
  }

  fetchIdea() {
    const oldIdeas = []
    for (var i = 0; i < localStorage.length; i++) {
      var retrieveObject = localStorage.getItem(localStorage.key(i));
      var parsedObject = JSON.parse(retrieveObject);
      oldIdeas.push(parsedObject)
    }
    this.setState({ ideas: oldIdeas })
  }

  addIdea(idea) {
    this.setState({ ideas: [idea, ...this.state.ideas] })
  }

  removeIdea(uniqueID) {
    const filteredIeas = this.state.ideas.filter((idea) => {
      return idea.uniqueID !== uniqueID
    })
    this.setState({ ideas: filteredIeas })
  }

  updateQuality(uniqueID, quality) {
    console.log('button clicked')
  }

  render() {

    return (
      <div className="App">
        <section >
          <h1><span className="h1-span">idea</span>box</h1>
          <form >
            <AddIdeaCard addIdea={this.addIdea} />

          </form>
        </section>
        <section className="search-container" role="search">
          <input 
            type="search" 
            className="input-fields" 
            id="input-search" 
            placeholder="Search" />
        </section>
        <section>
          <ul className="list">
            {
              this.state.ideas.map((idea, i) => {
                return <Card
                  removeIdea={this.removeIdea}
                  updateQuality={this.updateQuality}
                  uniqueID={idea.uniqueID}
                  cardName={idea.name}
                  cardBody={idea.body}
                  quality={idea.quality}
                  key={i} />
              })
            }
          </ul>
        </section>
      </div>
    );

  }
}

export default App;
