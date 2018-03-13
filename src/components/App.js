import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { getCFClient } from '../services/contentfulClient';

import Page from './layouts/Page';


class App extends Component {

  state = {
    data: null,
  };

  componentWillMount(){
    getCFClient()
      .getEntries({
        content_type: 'navigation',
        'fields.title': 'Main', 
        // whats the best way to create navigation within contentful?
      })
      .then(response => {
        console.log("app", response)
        this.setState({
          data: response.items[0].fields.navLinks /* <-- is there a more dynamic way? */
        })
      })
      .catch(console.error)
  }

  renderNav(){
   return this.state.data.map((item) => (
      <div className="nav-item" key={item.sys.id}><Link to={`/${item.fields.slug}`}>{item.fields.title}</Link></div>
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
          <nav>
           {this.renderNav()}
          </nav>
          {this.renderRoutes()}
        </div>
      </Router>
    );
  }
}

export default App;
