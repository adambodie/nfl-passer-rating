// Libs
import React from 'react';
import ReactDOM from 'react-dom';
import Team from './Team';
import Rating from './Rating';

class Application extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'NFL Passer Rating',
      value: 'nfl',
      primaryColor: '#013A73',
      textColor: '#FFFFFF',
      secondaryColor: '#DB1B26',
    };
    this.handleValueChange = this.handleValueChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handletextColorChange = this.handletextColorChange.bind(this);
    this.handleSecondaryColorChange = this.handleSecondaryColorChange.bind(this);
    this.handleprimaryColorChange = this.handleprimaryColorChange.bind(this);
  }

  handleValueChange(value){
    this.setState({value: value});
  }
  handleNameChange(name){
    this.setState({name: name});
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
      textShadow: '4px 4px 8px ' + this.state.primaryColor,
    };

    const value = this.state.value;
    const name = this.state.name;
    return (
      <div style={colorStyle}>
          <header className="header" style={secondaryColorStyle}>
            <h1 className="headline">{name}</h1>
          </header>
          <div className="row">
            <div className="small-12 large-3 columns teams">
              <img className="thumbnail" src={'img/' + value + '.gif'}/>
              <Team
                  onValueChange={this.handleValueChange}
                  ontextColorChange={this.handletextColorChange}
                  onSecondaryColorChange={this.handleSecondaryColorChange}
                  onBackgroundChange={this.handleprimaryColorChange}
                  onNameChange={this.handleNameChange}
                  />
            </div>
            <div className="small-12 large-9 columns stats">
              <Rating/>
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
