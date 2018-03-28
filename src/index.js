import React from 'react'
import ReactDOM from 'react-dom'

const Yhteensa = (props) => {
  
  return (
    <div>
      <p>tehtavia {props.tehtavia} kpl</p>
    </div>
  )
}

const Osa = (props) => {
  return (
    <div>
      <p>{props.osa}</p>
      <Yhteensa tehtavia={props.tehtavia} />
    </div>
  )
}
const Sisalto = (props) => {
  
  return (
    <div>
      <Osa osa={props.osa1} tehtavia={props.tehtavia1} />
      <Osa osa={props.osa2} tehtavia={props.tehtavia2} />
      <Osa osa={props.osa3} tehtavia={props.tehtavia3} />
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
  const osa1 = 'Reactin perusteet'
  const tehtavia1 = 10
  const osa2 = 'Tiedonvälitys propseilla'
  const tehtavia2 = 7
  const osa3 = 'Komponenttien tila'
  const tehtavia3 = 14
  return (
    <div>
      <Otsikko kurssi={kurssi}/>
      <p>Osat: </p>
      <Sisalto osa1={osa1} tehtavia1={tehtavia1} osa2={osa2} tehtavia2={tehtavia2} osa3={osa3} tehtavia3={tehtavia3}/>
      <p>Tehtäviä yhteensä {tehtavia1 + tehtavia2 + tehtavia3} kpl</p>  
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)