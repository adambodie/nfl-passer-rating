// Libs
import React, { Component } from 'react';
import Team from './Team';
import Rating from './Rating';
import Header from './Header';
import Footer from './Footer';

export default class Application extends Component {
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
    const textColor = this.state.textColor;
    const secondaryColor = this.state.secondaryColor;
    const primaryColor = this.state.primaryColor;
    const value = this.state.value;
    const name = this.state.name;

    return (
      <div style={{color: textColor, backgroundColor: primaryColor}}>
          <Header 
          names={name}
          textColors={textColor} 
          secondaryColors={secondaryColor} 
          primaryColors={primaryColor} 
          />
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
              <Rating 
                  textColors={textColor} 
                  secondaryColors={secondaryColor} 
                  primaryColors={primaryColor}              
              />
            </div>
          </div>
          <Footer 
              textColors={textColor} 
              secondaryColors={secondaryColor} 
              primaryColors={primaryColor}
          />
      </div>
    );
  }
}

