// Libs
import React from 'react';
import ReactDOM from 'react-dom';
import Team from './Team';
import Rating from './Rating';

class Application extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: '#074E68',
      color: 'black'
    };
  }
  render() {
    const colorStyle = {
      color: this.state.color,
      backgroundColor: this.state.backgroundColor,
    };
    return (
      <div >
          <header className="header" style={colorStyle}>
            <h1 className="headline">NFL Passer Rating</h1>
          </header>
          <div className="row">
            <div className="column medium-3 teams">
              <Team/>
            </div>
            <div className="column medium-9 stats">
              <Rating />
            </div>
          </div>
          <footer className = "footer" style={colorStyle} >
            <h3>Adam Bodie <span>©{new Date().getFullYear()}</span></h3>
            </footer>
      </div>
    );
  }
}

export default Application;
