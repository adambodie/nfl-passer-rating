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
      primaryColor: '#013A73',
      textColor: '#FFFFFF',
      secondaryColor: '#DB1B26',
    };
    this.handleValueChange = this.handleValueChange.bind(this);
    this.handletextColorChange = this.handletextColorChange.bind(this);
    this.handleSecondaryColorChange = this.handleSecondaryColorChange.bind(this);
    this.handleprimaryColorChange = this.handleprimaryColorChange.bind(this);
  }

  handleValueChange(value){
    this.setState({value: value});
  }
  handletextColorChange(textColor){
    this.setState({textColor: textColor});
  }
  handleSecondaryColorChange(secondaryColor){
    this.setState({secondaryColor: secondaryColor});
  }
  handleprimaryColorChange(primaryColor){
    this.setState({primaryColor: primaryColor});
  }
  render() {
    const colorStyle = {
      color: this.state.textColor,
      backgroundColor: this.state.primaryColor,
    };
    const secondaryColorStyle = {
      color: this.state.textColor,
      backgroundColor: this.state.secondaryColor,
    };

    const value = this.state.value;
    return (
      <div style={colorStyle}>
          <header className="header" style={secondaryColorStyle}>
            <h1 className="headline">NFL Passer Rating</h1>
          </header>
          <div className="row">
            <div className="column medium-3 teams">
              <img className="thumbnail" src={'img/' + value + '.gif'}/>
              <Team
                  onValueChange={this.handleValueChange}
                  ontextColorChange={this.handletextColorChange}
                  onSecondaryColorChange={this.handleSecondaryColorChange}
                  onBackgroundChange={this.handleprimaryColorChange}
                  />
            </div>
            <div className="column medium-9 stats">
              <Rating />
            </div>
          </div>
          <footer className = "footer" style={secondaryColorStyle} >
            <h3>Adam Bodie <span>©{new Date().getFullYear()}</span></h3>
            </footer>
      </div>
    );
  }
}

export default Application;
