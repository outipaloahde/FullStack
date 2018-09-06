import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        { name: 'Arto Hellas' },
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
    const newPerson = { name: this.state.newName}
    const double = this.state.persons.find(person => person.name === newPerson.name)
    const persons = this.state.persons.includes(double) ?
      this.state.persons : 
      this.state.persons.concat(newPerson)

      this.setState({
        persons
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
