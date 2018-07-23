import React from 'react';
import ReactDOM from 'react-dom';


const Stats = (props) =>{
    const hyvaKpl = props.hyva 
    const neutKpl = props.neutraali 
    const huonoKpl = props.huono
    const yht = hyvaKpl + neutKpl + huonoKpl
    
    const ka = hyvaKpl 
        return (
            <div>
                <p>ka={ka}</p>
            </div>
        )
}

class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            hyva:0,
            neutraali:0,
            huono:0,
            kaikki: [],
            yht:0,
        }
    }



    klikHyva = () => {
        this.setState({
            hyva: this.state.hyva + 1,
            kaikki: this.state.kaikki.concat('hy'),
            yht: this.state.yht + 1
        })
    }
    klikNeutraali = () => {
        this.setState({
            neutraali: this.state.neutraali + 1,
            kaikki: this.state.kaikki.concat('ne'),
            yht: this.state.yht + 1
        })
    }
    klikHuono = () => {
        this.setState({
            huono: this.state.huono + 1,
            kaikki: this.state.kaikki.concat('hu'),
            yht: this.state.yht + 1
        })
    }

    countStats = () => {
        let hyva = this.state.hyva
        let huono = this.state.huono
        let neutraali = this.state.neutraali
        let yht = this.state.yht
        let ka = ((hyva * 1)+(huono*(-1))) / yht
        return ka
    }
    countPercent = () => {
        let hyva = this.state.hyva
        let yht = this.state.yht
        let perc = hyva / yht * 100
        return perc
    }

    render() {
        let keskiarvo = this.countStats();
        let percentage = this.countPercent();
        
        return (
            <div>
                <h2>Anna Palautetta</h2>
                <button onClick={this.klikHyva}>Hyvä</button>
                <button onClick={this.klikNeutraali}>Neutraali</button>
                <button onClick={this.klikHuono}>Huono</button>
                <h3>Statistiikka</h3>
                <p>Hyvä {this.state.hyva} kpl<br />
                Neutraali {this.state.neutraali} kpl<br />
                Huono {this.state.huono} kpl</p>
                <p>Palautteita yhteensä {this.state.yht}</p>
                <p>Keskiarvo {parseFloat(keskiarvo).toFixed(1)} Positiivista {parseFloat(percentage).toFixed(1)}%</p>

            </div>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('root'));
