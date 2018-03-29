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
  const osa1 = {
      nimi: 'Reactin perusteet',
      tehtavia: 10
  } 
  const osa2 = {
      nimi: 'Tiedonvälitys propseilla',
      tehtavia: 7
  }

  const osa3 = {
      nimi: 'Komponenttien tila',
      tehtavia: 14
  }
  return (
    <div>
      <Otsikko kurssi={kurssi}/>
      <p>Osat: </p>
      <Sisalto osa1={osa1.nimi} tehtavia1={osa1.tehtavia} osa2={osa2.nimi} tehtavia2={osa2.tehtavia} osa3={osa3.nimi} tehtavia3={osa3.tehtavia}/>
      <p>Tehtäviä yhteensä {osa1.tehtavia + osa2.tehtavia + osa3.tehtavia} kpl</p>  
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)