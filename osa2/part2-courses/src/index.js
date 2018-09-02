import React from 'react'
import ReactDOM from 'react-dom'

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

const Kurssi = (props) => { 
return (
    <div>
        <Otsikko otsikko={props.kurssi.nimi}/>
        <Sisalto osat={props.kurssi.osat}/>
    </div>
    )
}

const Otsikko = (props) => <h1>{props.otsikko}</h1>

const Sisalto = (props) => {
    const osat = props.osat

    let yht = osat.reduce(function(sum, osa) {
      return sum + osa.tehtavia
    }, 0)
    return (
        <div>
            <ul>
            {osat.map(osa => <Osa key={osa.id} osa={osa} />)}
            <li>Yhteensä {yht} tehtävää</li>
            </ul>
        </div>
    )
}

const Osa = ({osa}) => <li>{osa.nimi}, tehtavia {osa.tehtavia}</li>

const App = () => {
  const kurssit = [
    {
      nimi: 'Half Stack -sovelluskehitys',
      id: 1,
      osat: [
        {
          nimi: 'Reactin perusteet',
          tehtavia: 10,
          id: 1
        },
        {
          nimi: 'Tiedonvälitys propseilla',
          tehtavia: 7,
          id: 2
        },
        {
          nimi: 'Komponenttien tila',
          tehtavia: 14,
          id: 3
        }
      ]
    },
    {
      nimi: 'Node.js',
      id: 2,
      osat: [
        {
          nimi: 'Routing',
          tehtavia: 3,
          id: 1
        },
        {
          nimi: 'Middlewaret',
          tehtavia: 7,
          id: 2
        }
      ]
    }
  ]
  
    return (
      <div>
        <Kurssit kurssit={kurssit} />
      </div>
    )
  }
ReactDOM.render(
  <App />,
  document.getElementById('root')
)