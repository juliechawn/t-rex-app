import React from 'react';
import './App.css';

import Header from './components/Header';

import Text from './components/Text';

class App extends React.Component {

  render() {
    return (
      <div className="app" id="app">     
          <Header />
          <Text />
      </div>    
    );
  }
}

export default App;

