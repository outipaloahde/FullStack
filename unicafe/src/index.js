import React from 'react';
import ReactDOM from 'react-dom';


const Stats = (props) =>{
    const hyvaKpl = this.state.hyva 
    const neutKpl = this.state.neutraali 
    const huonoKpl = this.state.huono
    
    const keskiarvo = () => {
        let ka = ((hyvaKpl *1)+(huonoKpl * (-1))+(neutKpl*0)) / (hyvaKpl+huonoKpl+neutKpl)
            

    }
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

    render() {
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

                <p> {this.state.yht}</p>
                <p> ka {this.state.ka} </p>
                
            </div>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('root'));
