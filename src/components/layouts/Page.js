import React from 'react';
import { getCFClient } from '../../services/contentfulClient';
import { renderFields } from '../../helpers'

// fields
import Copy from '../fields/Copy';
import HeroImage from '../fields/HeroImage';
import Headline from '../fields/Headline';
import Superheader from '../fields/Superheader';

// modules
import TextAndImageModule from '../modules/TextAndImageModule';
import TextModule from '../modules/TextModule';
import ImageModule from '../modules/ImageModule';

class Page extends React.Component {
  state = {
    page: null,
    fields: null,
    modules: null,
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

    // define dynamic react component 
    const renderedModules = modules.map((module) => {
      const PageModule = this.props.moduleComponents[module.sys.contentType.sys.id]
      return <PageModule key={module.sys.id} data= {module['fields']}/>
    })

    return renderedModules
  }


  render() {
    if (!this.state.page) return null;
    
    return (
      <div className="page">
        {renderFields("page.js", this.state.fields, this.props.fieldComponents)}
        {this.renderModules(this.state.modules)}
      </div>
    )
  }
}

// TODO: confirm that this is how I should do this
Page.defaultProps = {
    fieldComponents: {
      headline: Headline,
      copy: Copy,
      heroImage: HeroImage,
      superheader: Superheader,
    },
    moduleComponents: {
      textAndImageModule: TextAndImageModule,
      textModule: TextModule,
      imageModule: ImageModule,
    }
  }


export default Page;
