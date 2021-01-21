import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [
        {
          name: "Frankenstein",
          id: "wqd",
        },
        {
          name: "Dracula",
          id: "dfs",
        },
        {
          name: "Zombie",
          id: "asd",
        },
      ],
    };
  }

  // mount is when reacts piuts the component on the page
  componentDidMount() {
    // fetch returns a promise
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => cpnthis.setState({ monsters: users }))
  }

  render() {
    return (
      <div className="App">
        {
          // takes a function
          this.state.monsters.map((monster) => (
            <h1 key={monster.id}>{monster.name}</h1>
          ))
        }
      </div>
    );
  }
}

export default App;
