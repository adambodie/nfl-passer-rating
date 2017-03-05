// Libs
import React from 'react';

class Header extends React.Component {

  render() {
    return (<header className="header">
              <h1 className="headline">{this.props.name}</h1>
            </header>
            );
  }
}

Header.propTypes = {
  name: React.PropTypes.string.isRequired,
}

export default Header;
