import React from "react";
import ReactDOM from "react-dom";

const Button = props => {
  return (
    <div>
      <button onClick={props.func}>{props.text}</button>
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
      <td>Hyvä</td>
      <td>{props.arvostelut[0]}</td>
    </tr>
    <tr>
      <td>Neutraali</td>
      <td>{props.arvostelut[1]}</td>
    </tr>
    <tr>
      <td>Huono</td>
      <td>{props.arvostelut[2]}</td>
    </tr>
    <tr>
      <td>Yhteensä</td>
      <td>{props.arvostelut[3]}</td>
    </tr>
    <Average arvostelut={props.arvostelut} />
    <Percent arvostelut={props.arvostelut} />
  </tbody>
);

const Average = props => {
  let hyva = props.arvostelut[0];
  let huono = props.arvostelut[2];
  let yht = props.arvostelut[3];
  let ka = (hyva * 1 + huono * -1) / yht;
  return (
    <tr>
      <td>Keskiarvo</td>
      <td>{parseFloat(ka).toFixed(1)}</td>
    </tr>
  );
};
const Percent = props => {
  let hyva = props.arvostelut[0];
  let yht = props.arvostelut[3];
  let perc = (hyva / yht) * 100;
  return (
    <tr>
      <td>Positiivista</td>
      <td>{parseFloat(perc).toFixed(1)}%</td>
    </tr>
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
  lisaaArvostelu = arvo => {
    return () => {
      if (arvo.name === "hyvä") {
        this.setState({ hyva: arvo.value, yht: arvo.yht });
      } else if (arvo.name === "neutraali") {
        this.setState({ neutraali: arvo.value, yht: arvo.yht });
      } else if (arvo.name === "huono") {
        this.setState({ huono: arvo.value, yht: arvo.yht });
      }
    };
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
          <Button
            text="hyvä"
            func={this.lisaaArvostelu({
              name: "hyvä",
              value: this.state.hyva + 1,
              yht: this.state.yht + 1
            })}
          />
          <Button
            text="neutraali"
            func={this.lisaaArvostelu({
              name: "neutraali",
              value: this.state.neutraali + 1,
              yht: this.state.yht + 1
            })}
          />
          <Button
            text="huono"
            func={this.lisaaArvostelu({
              name: "huono",
              value: this.state.huono + 1,
              yht: this.state.yht + 1
            })}
          />
          <p>Palautetta ei ole vielä annettu</p>
        </div>
      );
    } else {
      return (
        <div>
          <h2>Anna Palautetta</h2>
          <Button
            text="hyvä"
            func={this.lisaaArvostelu({
              name: "hyvä",
              value: this.state.hyva + 1,
              yht: this.state.yht + 1
            })}
          />
          <Button
            text="neutraali"
            func={this.lisaaArvostelu({
              name: "neutraali",
              value: this.state.neutraali + 1,
              yht: this.state.yht + 1
            })}
          />
          <Button
            text="huono"
            func={this.lisaaArvostelu({
              name: "huono",
              value: this.state.huono + 1,
              yht: this.state.yht + 1
            })}
          />
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
