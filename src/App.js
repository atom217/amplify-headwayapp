import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

const HW_config = {
  selector: ".App-header", // CSS selector where to inject the badge
  account:  "xGR4zy",
  callbacks: {
    onWidgetReady: function(widget) {
      console.log("Widget is here!");
      console.log("unseen entries count: " + widget.getUnseenCount());
    },
    onShowWidget: function(){
      console.log("Someone opened the widget!");
    },
    onShowDetails: function(changelog){
      console.log(changelog.position); // position in the widget
      console.log(changelog.id); // unique id
      console.log(changelog.title); // title
      console.log(changelog.category); // category, lowercased
    },
    onReadMore: function(changelog){
      console.log(changelog); // same changelog object as in onShowDetails callback
    },
    onHideWidget: function(){
      console.log("Who turned off the light?");
    }
  }
}

function App() {

  useEffect(() => {
    window.Headway.init(HW_config);
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
