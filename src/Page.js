import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 
import { getCFClient } from './services/contentfulClient';
import Copy from './components/Copy'
import HeroImage from './components/HeroImage'
import Title from './components/Title'

class Page extends React.Component {
  state = {
    page: null,
  };

  componentWillMount(){
    getCFClient()
      .getEntry(this.props.pageId)
      .then(response => {
        console.log("page response", response);
        this.setState({
          page: response.fields
        })
      })
      .catch(console.error)
  }



  renderComponents(page) {
    const components = {
      title: Title,
      copy: Copy,
      heroImage: HeroImage
    }
    let output = []

    for (const prop in components ) {
      if (page[prop]){
        const PageComponent = components[prop];
        output.push(<PageComponent key={prop} data={page[prop]} />)
      }
    }

    return output;

  }

  render() {
    if (!this.state.page) return null;
    
    return (
      <div className="homepage">
        {this.renderComponents(this.state.page)}
      </div>
    )

  }
}

export default Page;
