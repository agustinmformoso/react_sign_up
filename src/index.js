import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './Resources/Libraries/normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Canales from './Containers/Canales';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Canales />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
