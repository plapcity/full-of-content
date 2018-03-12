import React, { Component } from 'react';
import { renderFields } from '../../helpers'
import Copy from '../fields/Copy';
import Title from '../fields/Title';
import Image from '../fields/Image';


class TextAndImage extends React.Component {
	state = {
  	fieldComponents: {
    	title: Title,
    	copy: Copy,
    	image: Image
  	}
  }

  render() {
  	return(
			<div className="module text-and-image-module">
				{renderFields(this.props.data, this.state.fieldComponents)}
			</div>
  	)
  }


}

export default TextAndImage 