import React from 'react';
import SearchForm from './Components/SearchForm';
import Nav from './Components/Nav';
import PageNotFound from "./Components/PageNotFound";
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';


import axios from 'axios';
import apiKey from "./config";
import PhotoContainer from './Components/PhotoContainer';


class App extends React.Component {

    constructor() {
        super();
        this.state = {
            //sets up array for pictures from axios get methods for preloads and query
            pics: [],
            cat: [],
            bat: [],
            hat: [],
            loading: true,
        }
    }

    //Loads in API key
    apiKey = apiKey;

    componentDidMount() {

        this.performSearch();

        //a few axios fetches to get the three sets of data for preload of site
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

    //query function utilized with form queries
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
                    {/*paths wrapped in loading logic*/}
                    {
                        this.state.loading ? <h1> Loading... </h1> :
                            <Switch>
                                <Redirect exact path="/" to="/cat" />
                                <Route exact path="/cat" render={ () => <PhotoContainer data={this.state.cat} onSearch={this.performSearch} /> } />
                                <Route exact path="/bat" render={ () => <PhotoContainer data={this.state.bat} onSearch={this.performSearch} /> } />
                                <Route exact path="/hat" render={ () => <PhotoContainer data={this.state.hat} onSearch={this.performSearch} /> } />
                                <Route exact path="/search/:query" render={() => <PhotoContainer data={this.state.pics} title={this.state.query} onSearch={this.performSearch} /> } />
                                <Route component={PageNotFound} />
                            </Switch>
                    }

                </div>
            </BrowserRouter>
        );
    }
}

export default App;