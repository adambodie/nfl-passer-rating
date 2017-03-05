// Libs
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Team from './Team';
import Footer from './Footer';
import Rating from './Rating';

class Application extends React.Component {
  render() {
    return (
      <div>
        <Header name="NFL Passer Rating" />
          <div className="row">
            <div className="column medium-3 teams">
              <Team onChange={this.handleColorChange}/>
            </div>
            <div className="column medium-9 stats">
              <Rating />
            </div>
          </div>
          <Footer/>
      </div>
    );
  }
}

export default Application;
