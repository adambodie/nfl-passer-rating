import React, {Component} from 'react';

export default class Header extends Component { 
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="header" style={{
                color: this.props.textColors, 
                backgroundColor: this.props.secondaryColors, 
                textShadow: '4px 4px 8px ' + this.props.primaryColors
                }}>
                <h1 className="headline">{this.props.names}</h1>
            </div>
              )
        }
  }