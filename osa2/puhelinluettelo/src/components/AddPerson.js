import React, { Component } from 'react';

class AddPerson extends Component {
  constructor(props){
    super(props);
    console.log(props)

  
  }
    render() {
    return(
        <form onSubmit={this.props.addPerson}>
          <div>
            <h3>Lisää uusi henkilö</h3>
            nimi: <input name='newName'/>
          </div>
          <div>
            numero: <input name='newNum'/>
          </div>
          <div>
            <button type="submit">lisää</button>
          </div>
        </form>
    )
    }
}
export default AddPerson

