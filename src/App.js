import "./App.css";
import { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };

    // define our function && bound function
    // this.handleChange = this.handleChange.bind(this)
  }

  // mount is when reacts piuts the component on the page
  componentDidMount() {
    // fetch returns a promise
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  };

  // handleChange(e) {
  //   this.setState({ searchField: e.target.value })
  // };
  
  // no need to define and bind w/ big arrow functions
  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
  };


  render() {
    // we don't modify original state - so we destructure and set state to new consts
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox
          placeholder="search monsters"
          // handleChange={(e) => this.setState({ searchField: e.target.value })}
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
