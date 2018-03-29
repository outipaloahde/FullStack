import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            hyva:0,
            neutraali:0,
            huono:0
        }
    }

    klikHyva = () => {
        this.setState({
            hyva: this.state.hyva + 1
        })
    }
    klikNeutraali = () => {
        this.setState({
            neutraali: this.state.neutraali + 1
        })
    }
    klikHuono = () => {
        this.setState({
            huono: this.state.huono + 1
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
            </div>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('root'));
