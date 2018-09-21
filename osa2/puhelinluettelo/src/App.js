import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        {
          name: 'Arto Hellas',
          num: '2340'
        },
        {
          name: 'Matti',
          num: '1244444'
        },
      ],
      newName: 'newName',
      newNum: 'newNum'
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleNumChange = this.handleNumChange.bind(this);
  }

  handleNameChange = (event) => {
    this.setState({
      newName: event.target.value
    }); console.log(this.state.newNum, 'newNum', this.state.newName, 'name')
  }

  handleNumChange = (event) => {
    this.setState({
      newNum: event.target.value
    }); console.log(this.state.newNum, 'newNum', this.state.newName, 'name')
  }

  addPerson = (event) => {
    event.preventDefault()
    const newPerson = { name: this.state.newName, num: this.state.newNum}
    console.log(newPerson, 'newPerson')
    const double = this.state.persons.find(person => person.name === newPerson.name)
    const persons = this.state.persons.includes(double) ?
      this.state.persons : 
      this.state.persons.concat(newPerson)

      this.setState({
        persons
      })
  }

  render() {
    const nameList = this.state.persons.map(person => <li key={person.name}>{person.name},     {person.num}</li>)
    return (
      <div>
        <h2>Puhelinluettelo</h2>
        <form onSubmit={this.addPerson}>
          <div>
            nimi: <input onChange={this.handleNameChange}/>
          </div>
          <div>
            numero: <input onChange={this.handleNumChange}/>
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
