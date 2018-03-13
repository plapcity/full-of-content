import React from 'react';
import { renderFields } from '../../helpers'
import Copy from '../fields/Copy';
import Headline from '../fields/Headline';
import Image from '../fields/Image';


class TextAndImageModule extends React.Component {

  render() {
    console.log(this.props.data)
  	return(
			<div className="module text-and-image-module">
				 {renderFields("text and image module", this.props.data, this.props.fieldComponents.headline)}
        <div className= {`text-and-image ${this.props.data.imagePosition ? 'image-left' : 'image-right'}`}>
          {renderFields("text and image module", this.props.data, this.props.fieldComponents.copyAndImage)}
        </div>
			</div>
  	)
  }
}

// TODO: confirm that this is how I should do this
TextAndImageModule.defaultProps = {
  	fieldComponents: {
      headline : {
        headline: Headline,
      },
      copyAndImage: {
        copy: Copy,
        image: Image
      }
      
    
  	}
  }

export default TextAndImageModule 