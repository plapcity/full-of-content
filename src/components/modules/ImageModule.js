import React from 'react';
import { renderFields } from '../../helpers'
import Image from '../fields/Image';


class ImageModule extends React.Component {

  render() {
  	return(
			<div className={`module image-module ${this.props.data.image.length}-up`}>
				{renderFields("image modules", this.props.data, this.props.fieldComponents)}
			</div>
  	)
  }
}

// TODO: confirm that this is how I should do this
ImageModule.defaultProps = {
  	fieldComponents: {
    	image: Image
  	}
  }

export default ImageModule 