import "./App.css";
import { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
    };
  }

  // mount is when reacts piuts the component on the page
  componentDidMount() {
    // fetch returns a promise
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  render() {
    return (
      <div className="App">
        <CardList name="j">
          {
            // takes a function
            this.state.monsters.map((monster) => (
              <h1 key={monster.id}>{monster.name}</h1>
            ))
          }
        </CardList>
      </div>
    );
  }
}

export default App;
