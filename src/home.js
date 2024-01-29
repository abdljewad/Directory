import logo from './logo.svg';
import './App.css';

import React from 'react';
import './home.css';
const Home = () => {
 return (
    <div className="Home">
      <header className="App-header">
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/directory">Directory</a></li>
          </ul>
        </nav>
        <h1>Welcome to Our Directory</h1>
      </header>
      <main>
        <section className="directory-list">
          <h2>Browse Our Directories</h2>
          <ul>
            <li><a href="/directory/business">Business</a></li>
            <li><a href="/directory/education">Education</a></li>
            <li><a href="/directory/healthcare">Healthcare</a></li>
            <li><a href="/App">Sports</a></li>
          </ul>
        </section>
      </main>
    </div>
 );
} 

export default Home;