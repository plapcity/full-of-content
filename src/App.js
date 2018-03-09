import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { getCFClient } from './services/contentfulClient';
import logo from './logo.svg';
import './App.css';

import Page from './Page';


class App extends Component {

  state = {
    data: null,
  };

  componentWillMount(){
    getCFClient()
      .getEntries({
        content_type: 'page',
        select: 'sys.id,fields.title,fields.slug'
      })
      .then(response => {
        console.log(response)
        this.setState({
          data: response.items
        })
      })
      .catch(console.error)
  }

  renderNav(){
    console.log(this.state.data);
   return this.state.data.map((item) => (
      <li key={item.sys.id}><Link to={`/${item.fields.slug}`}>{item.fields.title}</Link></li>
    ))
  }

  renderRoutes(){
     return this.state.data.map((item) => (
      <Route 
        key={item.sys.id} 
        path={`/${item.fields.slug}`} 
        render={() => <Page pageId={item.sys.id} />} 
      />
    ))
  }

  render() {
    if (!this.state.data) return null;
    return ( 
      <Router>
        <div>
        <ul>
         {this.renderNav()}
        </ul>
        {this.renderRoutes()}

        </div>
      </Router>
    );
  }
}

export default App;
