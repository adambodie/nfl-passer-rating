import React, {Component} from 'react';

export default class Footer extends Component { 
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="footer" style={{
                        color: this.props.textColors, 
                        backgroundColor: this.props.secondaryColors, 
                        textShadow: '4px 4px 8px ' + this.props.primaryColors
                }} >
                <h3>Adam Bodie <span>©{new Date().getFullYear()}</span></h3>
                </div>
              )
        }
  }