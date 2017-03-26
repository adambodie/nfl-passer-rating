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
      backgroundColor: '#013A73',
      primaryColor: '#FFFFFF',
      secondaryColor: '#DB1B26',
    };
    this.handleValueChange = this.handleValueChange.bind(this);
    this.handlePrimaryColorChange = this.handlePrimaryColorChange.bind(this);
    this.handleSecondaryColorChange = this.handleSecondaryColorChange.bind(this);
    this.handleBackgroundColorChange = this.handleBackgroundColorChange.bind(this);
  }

  handleValueChange(value){
    this.setState({value: value});
  }
  handlePrimaryColorChange(primaryColor){
    this.setState({primaryColor: primaryColor});
  }
  handleSecondaryColorChange(secondaryColor){
    this.setState({secondaryColor: secondaryColor});
  }
  handleBackgroundColorChange(backgroundColor){
    this.setState({backgroundColor: backgroundColor});
  }
  render() {
    const colorStyle = {
      color: this.state.primaryColor,
      backgroundColor: this.state.backgroundColor,
    };
    const secondaryColorStyle = {
      color: this.state.primaryColor,
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
                  onPrimaryColorChange={this.handlePrimaryColorChange}
                  onSecondaryColorChange={this.handleSecondaryColorChange}
                  onBackgroundChange={this.handleBackgroundColorChange}
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
