import React, { Component } from 'react';
import { renderFields } from '../../helpers'
import Copy from '../fields/Copy';
import Title from '../fields/Title';
import Image from '../fields/Image';


class TextAndImageModule extends React.Component {

  render() {
  	return(
			<div className="module text-and-image-module">
				{renderFields("text and image module", this.props.data, this.props.fieldComponents)}
			</div>
  	)
  }
}

// TODO: confirm that this is how I should do this
TextAndImageModule.defaultProps = {
  	fieldComponents: {
    	title: Title,
    	copy: Copy,
    	image: Image
  	}
  }

export default TextAndImageModule 