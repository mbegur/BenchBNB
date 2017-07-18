import React from 'react';
import { Link } from 'react-router-dom';

const sessionLinks = () => (
  <nav>
    <Link to="/signup">Sign Up</Link>
    <Link to="/login">Log In</Link>
  </nav>
);

const personalGreeting = (currentUser, logout) => (
  <hgroup>
    <h2>Hi, {currentUser.username}</h2>
    <button onClick={logout}>Log Out</button>
  </hgroup>
);

const Greeting = ({ currentUser, logout }) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
);

export default Greeting;
