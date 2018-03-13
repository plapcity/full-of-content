import React, { Component } from 'react';
import { renderFields } from '../../helpers'
import Copy from '../fields/Copy';
import Headline from '../fields/Headline';
import Superheader from '../fields/Superheader';


class TextModule extends React.Component {
  render() {
  	return(
			<div className="module text-module">
				{renderFields("text module", this.props.data, this.props.fieldComponents)}
			</div>
  	)
  }
}

// TODO: confirm that this is how I should do this
TextModule.defaultProps = {
  	fieldComponents: {
	  	superheader: Superheader,
      headline: Headline,
      copy: Copy
  	}
  }

export default TextModule 