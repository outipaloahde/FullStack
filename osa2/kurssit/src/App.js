import React from 'react'
import Kurssi from './components/Kurssi'


const App = ({kurssit}) => {

    return (
        <div>
          <Kurssit kurssit={kurssit} />
        </div>
      )
    }

const Kurssit = (props) => {
    const kurssit = props.kurssit
    return (
      <div>
        <h1>Opetusohjelma</h1>
        <ul>
          {kurssit.map(kurssi => <Kurssi key={kurssi.id} kurssi={kurssi} />)}
        </ul>
      </div>
    )
  }

  export default App