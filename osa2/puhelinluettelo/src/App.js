import React from 'react';
import AddPerson from './components/AddPerson';
import FilterNames from './components/FilterNames';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [],
      newName: 'newName',
      newNum: 'newNum',
      filter: ''
      
    };
   
  }
  componentDidMount(){
    console.log('did mount')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log(response)
        this.setState({ persons: response.data })
      })
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
        {filteredList.map(person => <li key={person.name}>{person.name}, {person.number}</li>)}
      </div>
    )
  }
}

export default App
