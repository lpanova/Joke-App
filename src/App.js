import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navigation from './components/Navigation.js';
import AppRouter from './AppRouter';

function App() {
  return (
    <div className="app">
      <Navigation />
      <AppRouter />
    </div>
  );
}

export default App;
