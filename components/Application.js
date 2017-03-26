// Libs
import React from 'react';
import ReactDOM from 'react-dom';
import Team from './Team';
import Rating from './Rating';

class Application extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'nfl',
      backgroundColor: '#074E68',
      color: 'black'
    };
    this.handleValueChange = this.handleValueChange.bind(this);
    this.handleColorChange = this.handleColorChange.bind(this);
    this.handleBackgroundColorChange = this.handleBackgroundColorChange.bind(this);
  }

  handleValueChange(value){
    this.setState({value: value});
  }
  handleColorChange(color){
    this.setState({color: color});
  }
  handleBackgroundColorChange(backgroundColor){
    this.setState({backgroundColor: backgroundColor});
  }
  render() {
    const colorStyle = {
      color: this.state.color,
      backgroundColor: this.state.backgroundColor,
    };
    const value = this.state.value;
    return (
      <div style={colorStyle}>
          <header className="header">
            <h1 className="headline">NFL Passer Rating</h1>
          </header>
          <div className="row">
            <div className="column medium-3 teams">
              <img className="thumbnail" src={'img/' + value + '.gif'}/>
              <Team onValueChange={this.handleValueChange} onColorChange={this.handleColorChange} onBackgroundChange={this.handleBackgroundColorChange}/>
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
