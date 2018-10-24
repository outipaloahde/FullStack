import React from 'react';
import AddPerson from './components/AddPerson';
import FilterNames from './components/FilterNames';

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
  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
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

  render() {
    let filteredList = this.state.persons.filter(
      (person) => {
        return person.name.indexOf(this.state.filter) !== -1;
      }
    )
    return (
      <div>
        <h2>Puhelinluettelo</h2>
        <div onChange={this.handleChange}>
          <FilterNames filter={this.state.filter}/>
          <AddPerson newName={this.state.newName} newNum={this.state.newNum} addPerson={this.addPerson}/> 
        </div>
              
        <h2>Numerot</h2>
        {filteredList.map(person => <li key={person.name}>{person.name}, {person.num}</li>)}
      </div>
    )
  }
}

export default App
