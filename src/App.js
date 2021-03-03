import React from 'react';
import SearchForm from './Components/SearchForm';
import Nav from './Components/Nav';
import {BrowserRouter, Route, Switch} from 'react-router-dom';


import axios from 'axios';
import apiKey from "./config";
import PhotoContainer from './Components/PhotoContainer';

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            pics: [],
            loading: true
        }
    }

    apiKey = apiKey;

    componentDidMount() {
        this.performSearch();
    }

    performSearch = (query = 'cats') => {
        axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
            .then(response => {
                this.setState({
                    pics: response.data.photos.photo,
                    loading: false
                })
            })
            .catch(error => {
                console.log('Error fetching and parsing data', error);
            });
    }

    render() {
        console.log(this.performSearch);
        return (
            <BrowserRouter>
                <div className="container">
                    <SearchForm onSearch={this.performSearch}/>
                    <Switch>
                        <Nav/>
                        <Route exact path="/teachers">
                        </Route>
                        <Route path="/courses" component={Nav}/>
                    </Switch>
                    <PhotoContainer data={this.state.pics} />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;