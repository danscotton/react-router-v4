import React from 'react';
import { Link, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader';

const Mid = () =>
    <strong>Mid</strong>

const One = ({ match }) =>
    <p>One <Route path={ `${match.url}/mid` } component={ Mid } /></p>

const Two = () =>
    <p>Two</p>

const App = () =>
    <div className="app">
        <nav>
            <Link to="/one">One</Link>
            <Link to="/one/mid">One Mid</Link>
            <Link to="/two">Two</Link>
        </nav>
        <Route path="/one" component={ One } />
        <Route path="/two" component={ Two } />
    </div>

export default hot(module)(App);
