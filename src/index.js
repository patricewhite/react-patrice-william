import React from 'react';
import ReactDOM from 'react-dom';
import Encoder from './components/encoderApp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Encoder />, document.getElementById('root'));
registerServiceWorker();
