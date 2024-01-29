import React from 'react';
import Footer from './Components/Footer';
import ReactDOM from 'react-dom/client';
import Addbusiness from './Components/Addbusiness';
// import './index.css';
  import Home from './home';
  import Header from './Header';
// import './home.css'
import contacts from './contacts';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Contacts from './contacts';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <Addbusiness/>
    <Footer/>
    
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
