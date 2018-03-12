import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 
import { getCFClient } from '../../services/contentfulClient';

// atoms
import Copy from '../atoms/Copy';
import HeroImage from '../atoms/HeroImage';
import Title from '../atoms/Title';
import Superheader from '../atoms/Superheader';

// modules
import TextAndImage from '../modules/TextAndImage';
import Text from '../modules/Text';

class Page extends React.Component {
  state = {
    page: null,
    fields: null,
    modules: null
  };

  componentWillMount(){
    getCFClient()
      .getEntries({
        'sys.id': this.props.pageId,
        })
      .then(response => {
        this.setState({
          page: response.items[0]
        }, this.handleResponse(response.items[0].fields))
      })
      .catch(console.error)
  }

  handleResponse(response){
    let modules = response['modules']
    let fields = delete response['modules']
    fields = response

    this.setState({
      fields: fields,
      modules: modules
    })
  }


  renderComponents(fields) {
    if (!fields) return;
    const components = {
      title: Title,
      copy: Copy,
      heroImage: HeroImage,
      superheader: Superheader
    }
    let output = []

    for (const prop in components ) {
      if (fields[prop]){
        const PageField = components[prop];
        output.push(<PageField key={prop} data={fields[prop]} />)
      }
    }

    return output;

  }

  renderModules(modules) {
    if (!modules) return;
    const components = {
      textAndImageModule: TextAndImage,
      textModule: Text
    }

    const renderedModules = modules.map((module) => {
      const PageModule = components[module.sys.contentType.sys.id]
      return <PageModule key={module.sys.id} data= {module['fields']}/>
    })

    return renderedModules
  }


  render() {
    if (!this.state.page) return null;
    
    return (
      <div className="homepage">
        {this.renderComponents(this.state.fields)}
        {this.renderModules(this.state.modules)}
      </div>
    )

  }
}

export default Page;
