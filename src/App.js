import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      character: {}
    };
  }

  //runs as soon as page is loaded
  componentDidMount() {
    this.setState({
      loading: true
    });
    //where you want to get your data from
    fetch("https://swapi.co/api/people/1")
      //resolves promise, rx response, json converts to JS obj
      .then(response => response.json())
      .then(data => {
        this.setState({
          loading: false,
          character: data
        });
      });
  }

  render() {
    const text = this.state.loading ? "Loading..." : this.state.character.name;
    return <div>{text}</div>;
  }
}

export default App;
