// Libs
import React from 'react';
import ReactDOM from 'react-dom';
import Team from './Team';
import Rating from './Rating';

class Application extends React.Component {
  render() {
    return (
      <div >
          <header className="header">
            <h1 className="headline">NFL Passer Rating</h1>
          </header>
          <div className="row">
            <div className="column medium-3 teams">
              <Team />
            </div>
            <div className="column medium-9 stats">
              <Rating />
            </div>
          </div>
          <footer className = "footer" >
            <h3>Adam Bodie <span>©{new Date().getFullYear()}</span></h3>
            </footer>
      </div>
    );
  }
}

export default Application;
