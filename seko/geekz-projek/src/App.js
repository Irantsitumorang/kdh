import React from 'react';
import './App.css';
import Main from './components/Main.jsx';
import Header from './components/Header';
import Textfield from './components/Textfield';
import Datefield from './components/Datefield'
import Evenother from './components/Evenother'
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        <Textfield />
        <Datefield />
        <Evenother />
      </div>
    );
  }
}

export default App;
