import React from 'react';
import SearchForm from './Components/SearchForm';
import Nav from './Components/Nav';
import PageNotFound from "./Components/PageNotFound";
import {BrowserRouter, Route, Switch} from 'react-router-dom';


import axios from 'axios';
import apiKey from "./config";
import PhotoContainer from './Components/PhotoContainer';


class App extends React.Component {

    constructor() {
        super();
        this.state = {
            pics: [],
            cat: [],
            bat: [],
            hat: [],
            query: null,
            loading: true,
        }
    }

    apiKey = apiKey;

    componentDidMount() {
        this.performSearch();

        axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=cats&per_page=24&format=json&nojsoncallback=1`)
            .then(response => {
                this.setState({
                    cat: response.data.photos.photo,
                    loading: false,
                })
            })
            .catch(error => {
                console.log('Error fetching and parsing data', error);
            });
        axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=bats&per_page=24&format=json&nojsoncallback=1`)
            .then(response => {
                this.setState({
                    bat: response.data.photos.photo,
                    loading: false,
                })
            })
            .catch(error => {
                console.log('Error fetching and parsing data', error);
            });
        axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=hats&per_page=24&format=json&nojsoncallback=1`)
            .then(response => {
                this.setState({
                    hat: response.data.photos.photo,
                    loading: false,
                })
            })
            .catch(error => {
                console.log('Error fetching and parsing data', error);
            });


    }

    performSearch = (query = 'cats') => {
        this.setState({loading: true})
        axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
            .then(response => {
                this.setState({
                    pics: response.data.photos.photo,
                    loading: false,
                    query: query
                })
            })
            .catch(error => {
                console.log('Error fetching and parsing data', error);
            });
    }



    render() {
        return (
            <BrowserRouter>
                <div className="container">
                    <SearchForm onSearch={this.performSearch} />
                    <Nav />
                    <Switch>
                        <Route path="/" render={() => <PhotoContainer data={this.state.pics} onSearch={this.performSearch} /> } />
                        <Route exact path="/cat" render={ () => <PhotoContainer data={this.state.cat} onSearch={this.performSearch} /> } />
                        <Route exact path="/bat" render={ () => <PhotoContainer data={this.state.pics} onSearch={this.performSearch("bats")} /> } />
                        <Route exact path="/search/:query" render={() => <PhotoContainer data={this.state.pics} title={this.state.query} onSearch={this.performSearch(this.state.query)} /> } />
                        <Route component={PageNotFound} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;