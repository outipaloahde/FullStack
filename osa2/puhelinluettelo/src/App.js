import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        { name: 'Arto Hellas' }
      ],
      newName: 'Lisää nimi..'
    }
  }

  handleNameChange = (event) => {
    console.log(event.target.value)
    this.setState({newName: event.target.value})
  }

  addName = (event) => {
    event.preventDefault()
    console.log('nappia painettu')
    const person = { name: this.state.newName}
    const persons = this.state.persons.concat(person)
    this.setState({
      persons: persons,
      newName: ''
    })
  }

  render() {
    const nameList = this.state.persons.map(person => <li key={person.name}>{person.name}</li>)
    console.log(nameList)
    return (
      <div>
        <h2>Puhelinluettelo</h2>
        <form onSubmit={this.addName}>
          <div>
            nimi: <input onChange={this.handleNameChange}/>
          </div>
          <div>
            <button type="submit">lisää</button>
          </div>
        </form>
        <h2>Numerot</h2>
        {nameList}
      </div>
    )
  }
}

export default App
