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
          name: 'Mauno',
          num: '2340'
        },
        {
          name: 'Mikko',
          num: '2340'
        },
        {
          name: 'Matti',
          num: '2340'
        },
        {
          name: 'Arto',
          num: '1244444'
        },
      ],
      newName: 'newName',
      newNum: 'newNum',
      filter: ''
      
    };
   
  }
  handleFilterChange = (event) => {
    this.setState({
      filter: event.target.value
    }); 
    console.log(this.state.filter)
  }

  handleNameChange = (event) => {
    this.setState({
      newName: event.target.value
    }); 
  }

  handleNumChange = (event) => {
    this.setState({
      newNum: event.target.value
    }); 
  }

  addPerson = (event) => {
    event.preventDefault()
    const newPerson = { name: this.state.newName, num: this.state.newNum}
    const double = this.state.persons.find(person => person.name === newPerson.name)
    const persons = this.state.persons.includes(double) ?
      this.state.persons : 
      this.state.persons.concat(newPerson)
      this.setState({
        persons
      })
  }

  showNames = (event) => {
    event.preventDefault()

  }

  render() {
    let filteredList = this.state.persons.filter(
      (person) => {
        return person.name.indexOf(this.state.filter) !== -1;
      }
    )
    return (
      <div>
        <h2>Puhelinluettelo</h2>
        <div>
          Rajaa näytettäviä: <input type='text' onChange={this.handleFilterChange}/>
        </div>
        
        <form onSubmit={this.addPerson}>
          <div>
            <h3>Lisää uusi henkilö</h3>
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
        {filteredList.map(person => <li key={person.name}>{person.name}, {person.num}</li>)}
      </div>
    )
  }
}

export default App
