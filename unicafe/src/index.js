import React from "react";
import ReactDOM from "react-dom";

const Button = props => {
  return (
    <div>
      <button onClick={props.funktio}>{props.text}</button>
    </div>
  );
};

const Statistics = props => {
  return (
    <div>
      <h3>Statistiikka</h3>
      <table>
        <Statistic arvostelut={props.arvostelut} />
      </table>
    </div>
  );
};

const Statistic = props => (
  <tbody>
    <tr>
      <td>hyvä</td>
      <td />
      <td>{props.arvostelut[0]}</td>
    </tr>
    <tr>
      <td>neutraali</td>
      <td />
      <td>{props.arvostelut[1]}</td>
    </tr>
    <tr>
      <td>huono</td>
      <td />
      <td>{props.arvostelut[2]}</td>
    </tr>
    <tr>
      <Average arvostelut={props.arvostelut} />
      <Percent arvostelut={props.arvostelut} />
    </tr>
  </tbody>
);

const Average = props => {
  let hyva = props.arvostelut[0];
  let huono = props.arvostelut[2];
  let yht = props.arvostelut[3];
  let ka = (hyva * 1 + huono * -1) / yht;
  return (
    <div>
      <p>Keskiarvo {parseFloat(ka).toFixed(1)}</p>
    </div>
  );
};
const Percent = props => {
  let hyva = props.arvostelut[0];
  let yht = props.arvostelut[3];
  let perc = (hyva / yht) * 100;
  return (
    <div>
      <p>Positiivista {parseFloat(perc).toFixed(0)}%</p>
    </div>
  );
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hyva: 0,
      neutraali: 0,
      huono: 0,
      yht: 0
    };
  }

  klikHyva = () => {
    this.setState({
      hyva: this.state.hyva + 1,
      yht: this.state.yht + 1
    });
  };
  klikNeutraali = () => {
    this.setState({
      neutraali: this.state.neutraali + 1,
      yht: this.state.yht + 1
    });
  };
  klikHuono = () => {
    this.setState({
      huono: this.state.huono + 1,
      yht: this.state.yht + 1
    });
  };
  render() {
    if (
      this.state.hyva === 0 &&
      this.state.huono === 0 &&
      this.state.neutraali === 0
    ) {
      return (
        <div>
          <h2>Anna Palautetta</h2>
          <Button text="hyvä" funktio={this.klikHyva} />
          <Button text="neutraali" funktio={this.klikNeutraali} />
          <Button text="huono" funktio={this.klikHuono} />
          <p>Palautetta ei ole vielä annettu</p>
        </div>
      );
    } else {
      return (
        <div>
          <h2>Anna Palautetta</h2>
          <Button text="hyvä" funktio={this.klikHyva} />
          <Button text="neutraali" funktio={this.klikNeutraali} />
          <Button text="huono" funktio={this.klikHuono} />
          <Statistics
            arvostelut={[
              this.state.hyva,
              this.state.neutraali,
              this.state.huono,
              this.state.yht
            ]}
          />
        </div>
      );
    }
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
