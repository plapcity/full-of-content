import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 
import { getCFClient } from '../../services/contentfulClient';
import Copy from '../atoms/Copy';
import HeroImage from '../atoms/HeroImage';
import Title from '../atoms/Title';
import TextAndImage from '../modules/TextAndImage';

class Page extends React.Component {
  state = {
    page: null,
  };

  componentWillMount(){
    getCFClient()
      .getEntries({
        'sys.id': this.props.pageId,
        })
      .then(response => {
        console.log(response.items[0].fields['modules'])
        this.setState({
          page: response.items[0].fields
        })
      })
      .catch(console.error)
  }



  renderComponents(page) {
    console.log("render page", page)
    const components = {
      title: Title,
      copy: Copy,
      heroImage: HeroImage,
      modules: {
        textAndImageModule: TextAndImage
      }
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
