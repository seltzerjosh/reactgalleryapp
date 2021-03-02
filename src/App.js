import React, {Component} from 'react';
import SearchForm from './Components/SearchForm';
import Nav from './Components/Nav';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

const App = () => (
    <BrowserRouter>
        <div className="container">
            <SearchForm />
            <Switch>
                <Route exact path="/" component={Nav}/>
                <Route path="/about" render={() => <Nav title='About'/>}/>
                <Route exact path="/teachers">
                    <Nav />
                </Route>
                <Route path="/courses" component={Nav}/>
            </Switch>
        </div>
    </BrowserRouter>
);

export default App;