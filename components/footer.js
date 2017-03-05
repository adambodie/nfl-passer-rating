// Libs
import React from 'react';

class Footer extends React.Component {
  render() {
      return (<footer className = "footer" >
        <h3>Adam Bodie <span>©{new Date().getFullYear()}</span></h3>
        </footer>);
    }
}

export default Footer;
