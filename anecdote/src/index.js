import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 0,
      anecdotes: [
        {
          anecdote: "If it hurts, do it more often",
          votes: 0
        },
        {
          anecdote:
            "Adding manpower to a late software project makes it later!",
          votes: 0
        },
        {
          anecdote:
            "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
          votes: 0
        },
        {
          anecdote:
            "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
          votes: 0
        },
        {
          anecdote: "Premature optimization is the root of all evil.",
          votes: 0
        },
        {
          anecdote:
            "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
          votes: 0
        }
      ]
    };
  }

  vote = (props) => {
    console.log(props.vote)
    return () => {
        this.setState((prevState, props) => ({ votes: prevState.anecdotes[props.num].votes + props.vote}))
    };
  };

  showVotes = () => {
    if (this.state.selected === 0) {
      return this.state.anecdotes[0].votes;
    } else if (this.state.selected === 1) {
      return this.state.anecdotes[1].votes;
    } else if (this.state.selected === 2) {
      return this.state.anecdotes[2].votes;
    } else if (this.state.selected === 3) {
      return this.state.anecdotes[3].votes;
    } else if (this.state.selected === 4) {
      return this.state.anecdotes[4].votes;
    } else if (this.state.selected === 5) {
      return this.state.anecdotes[5].votes;
    }
  };

  showMostVotes = () => {};

  randomNum = () => {
    let random = Math.floor(Math.random() * this.state.anecdotes.length);
    this.setState({ selected: random });
  };

  render() {
    console.log(this.state.anecdotes);
    return (
      <div>
        <p>{this.state.anecdotes[this.state.selected].anecdote}</p>
        <p>votes: {this.showVotes()}</p>
        <button onClick={this.randomNum}>new anecdote</button>
        <button onClick={this.vote({ anecdote: this.state.anecdotes, num: this.state.selected, vote: 1})}>vote</button>
        <p>Anecdote with most votes: </p>
      </div>
    );
  }
}

ReactDOM.render(<App  />, document.getElementById("root"));
