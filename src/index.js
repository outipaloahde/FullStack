import React from 'react'
import ReactDOM from 'react-dom'


const Yhteensa = (props) => {
  let eka= props.osat[0].tehtavia
  let toka= props.osat[1].tehtavia
  let kolmas = props.osat[2].tehtavia
  return (
    <div>
      <p>Tehtavia yhteensa {eka+toka+kolmas}</p>
    </div>
  )
} 

const Osa = (props) => {
  return (
    <div>
      <p>{props.osat[0].nimi}, tehtavia: {props.osat[0].tehtavia}</p>
      <p>{props.osat[1].nimi}, tehtavia: {props.osat[1].tehtavia}</p>
      <p>{props.osat[2].nimi}, tehtavia: {props.osat[2].tehtavia}</p>
    </div>
  )
}
const Sisalto = (props) => {
  
  return (
    <div>
      <Osa osat={props.osat}/>
    </div>
  )

} 
const Otsikko = (props) => {
  
  return (
    <div>
      <p>{props.kurssi}</p>
    </div>
  )
}



const App = () => {
  const kurssi = 'Half Stack -sovelluskehitys'
  const osat = [
    {
        nimi: 'Reactin perusteet',
        tehtavia: 10
    }, 
    {
        nimi: 'Tiedonvälitys propseilla',
        tehtavia: 7
    },
    {
        nimi: 'Komponenttien tila',
        tehtavia: 14
    }
  ]
  return (
    <div>
      <Otsikko kurssi={kurssi}/>
      <Sisalto osat={osat}/>
      <Yhteensa osat={osat}/>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)