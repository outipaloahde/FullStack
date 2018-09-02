import React from 'react'
import ReactDOM from 'react-dom'

const Kurssi = (props) => { 
    console.log(props.kurssi.nimi, 'nimi')
    console.log(props.kurssi.osat, 'osat')

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
      console.log('yhteensä ', sum, osa)
      return sum + osa.tehtavia
    }, 0)
    return (
        <div>
            <ul>
            {osat.map(osa => <Osa key={osa.id} osa={osa} />)}
            <li>{yht}</li>
            </ul>
        </div>
    )
}

const Osa = ({osa}) => <li>{osa.nimi}, tehtavia {osa.tehtavia}</li>

const App = () => {
    const kurssi = {
      nimi: 'Half Stack -sovelluskehitys',
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
    }
  
    return (
      <div>
        <Kurssi kurssi={kurssi} />
      </div>
    )
  }
ReactDOM.render(
  <App />,
  document.getElementById('root')
)