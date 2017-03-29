// Libs
import React from 'react';
import ReactDOM from 'react-dom';
import 'script!jquery'
import 'script!what-input'
import 'script!foundation-sites'

// Components
import Application from './components/Application';


// CSS
import './node_modules/foundation-sites/dist/css/foundation.min.css';
import './css/style.scss';

ReactDOM.render(<Application />, document.getElementById('container'));
