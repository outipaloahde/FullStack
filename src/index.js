import React from 'react'
import ReactDOM from 'react-dom'


const Yhteensa = (props) => {
  let eka= props.kurssi.osat[0].tehtavia
  let toka= props.kurssi.osat[1].tehtavia
  let kolmas = props.kurssi.osat[2].tehtavia
  return (
    <div>
      <p>Tehtavia yhteensa {eka+toka+kolmas}</p>
    </div>
  )
} 

const Osa = (props) => {
  return (
    <div>
      <p>{props.nimi}, tehtavia: {props.tehtavia}</p>
    </div>
  )
}
const Sisalto = (props) => {
  
  return (
    <div>
      <Osa nimi={props.kurssi.osat[0].nimi} tehtavia={props.kurssi.osat[0].tehtavia}/>
      <Osa nimi={props.kurssi.osat[1].nimi} tehtavia={props.kurssi.osat[1].tehtavia}/>
      <Osa nimi={props.kurssi.osat[2].nimi} tehtavia={props.kurssi.osat[2].tehtavia}/>
    </div>
  )

} 
const Otsikko = (props) => {
  
  return (
    <div>
      <p>{props.kurssi.nimi}</p>
    </div>
  )
}



const App = () => {
  const kurssi = {
      nimi: 'Half Stack -sovelluskehitys',
      osat: [
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
        }

  return (
    <div>
      <Otsikko kurssi={kurssi}/>
      <Sisalto kurssi={kurssi}/>
      <Yhteensa kurssi={kurssi}/>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)