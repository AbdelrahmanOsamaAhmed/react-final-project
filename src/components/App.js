import React, { Component } from "react";
import "./App.css";
import News from "./News/News";
import SidePanel from "./side panel/sidePanel";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news1: {
        type: "top-headlines",
        query: "sources=techcrunch",
      },
      news2: {
        type: "everything",
        query: "domains=techcrunch.com&language=en",
      },
      news3: {
        type: "top-headlines",
        query: "sources=bbc-news",
      },
    };
  }

  render() {
    return (
      <div className="App">
        <SidePanel />
        <div className="container-fluid">
          <div className="row d-flex justify-content-center">
            <News news={this.state.news1} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
