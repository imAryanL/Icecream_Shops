import React from 'react';
import './App.css';  // Ensures the CSS is properly loaded
import List from './components/List';
import iceCreamImage from './assets/icecreamImage.png';

const App = () => {
  return (
    <div className="App">
      <div className="banner">
        <img src={iceCreamImage} alt="Delicious Ice Cream" className="banner-image" />
        <h1>Ice Cream Shops in Miami 🍦</h1>
        <p className="author-info">Aryan Lakhani &nbsp;&nbsp;|&nbsp;&nbsp; Z number- Z23724811</p>
      </div>
      <List />
    </div>
  );
};
export default App;
