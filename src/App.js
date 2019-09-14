import React from 'react';
import Header from'./components/Header'
import api from './services/api'
import './styles.css'
import Main from './pages/main'

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <main/>
    </div>
  );
}

export default App;
