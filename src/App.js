import React, { Component } from 'react';
import axios from 'axios';

import Header from "./components/Header";
import Gallery from "./components/Gallery";
import apiKey from "./config";

const per_page = 16;

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      images: [],
      loading: true
    };
  }

  componentDidMount() {
    this.performSearch()
  }

  performSearch = (query = 'sunsets') => {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&in_gallery=&per_page=${per_page}&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          images: response.data.photos.photo,
          loading: false
        })
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }

  render() {

    return (
        <div className="container">
          <Header onSearch={this.performSearch} />
          {
            (this.state.loading)
            ? <div className="photo-container">
                <h2>
                  <img src={ require('./img/loader.gif' )} alt={'loader'} />
                </h2>
              </div>
            :
            <Gallery data={this.state} />
          }
        </div>
    );
  }
}