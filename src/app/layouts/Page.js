import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 
import { getCFClient } from '../../services/contentfulClient';
import { renderFields } from '../../helpers'

// fields
import Copy from '../fields/Copy';
import HeroImage from '../fields/HeroImage';
import Title from '../fields/Title';
import Superheader from '../fields/Superheader';

// modules
import TextAndImage from '../modules/TextAndImage';
import Text from '../modules/Text';

class Page extends React.Component {
  state = {
    page: null,
    fields: null,
    modules: null,
    fieldComponents: {
      title: Title,
      copy: Copy,
      heroImage: HeroImage,
      superheader: Superheader,
    },
    moduleComponents: {
      textAndImageModule: TextAndImage,
      textModule: Text,
    }
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
    // grouping fields together and modules together
    let modules = response['modules']
    let fields = delete response['modules']
    fields = response

    this.setState({
      fields: fields,
      modules: modules
    })
  }


  renderModules(modules) {
    if (!modules) return;

    const renderedModules = modules.map((module) => {
      const PageModule = this.state.moduleComponents[module.sys.contentType.sys.id]
      return <PageModule key={module.sys.id} data= {module['fields']}/>
    })

    return renderedModules
  }


  render() {
    if (!this.state.page) return null;
    
    return (
      <div className="homepage">
        {renderFields(this.state.fields, this.state.fieldComponents)}
        {this.renderModules(this.state.modules)}
      </div>
    )
  }
}

export default Page;
