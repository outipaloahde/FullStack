import React from 'react'


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


    export default Kurssi