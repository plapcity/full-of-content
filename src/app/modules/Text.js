import React, { Component } from 'react';
import { renderFields } from '../../helpers'
import Copy from '../fields/Copy';
import Title from '../fields/Title';
import Superheader from '../fields/Superheader';


class Text extends React.Component {
	  state = {
	  	fieldComponents: {
	  		superheader: Superheader,
      	title: Title,
      	copy: Copy
	  	}
  };


  render() {
  	return(
			<div className="module text-module">
				{renderFields(this.props.data, this.state.fieldComponents)}
			</div>
  	)
  }


}

export default Text 