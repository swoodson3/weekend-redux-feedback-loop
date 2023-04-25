import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Feeling from '../Form/Feeling.jsx';
import Understanding from '../Form/Understanding.jsx';
import Support from '../Form/Support.jsx';
import Comments from '../Form/Comments.jsx';
import Review from '../Form/Review.jsx';
import ThankYou from '../Form/ThankYou.jsx';


function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <Router>
        <Route exact path="/">
          {/* Feeling component */}
          <Feeling />
        </Route>
        <Route exact path="/understanding">
          {/* Understanding component */}
          <Understanding />
        </Route>
        <Route exact path="/support">
          {/* Support component */}
          <Support />
        </Route>
        <Route exact path="/comments">
          {/* Comments component */}
          <Comments />
        </Route>
        <Route exact path="/review">
          <Review />
        </Route>
        <Route exact path="/thank-you">
          <ThankYou />
        </Route>
      </Router>
    </div>
  );
}

export default App;
