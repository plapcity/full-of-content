import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 
import { deliveryAccessToken, spaceId } from './config'
import {createClient} from 'contentful';

class Test extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null
    }
  }

  // CONNECTING TO CONTENTFUL
  componentWillMount(){
    const client = createClient({
      space: spaceId,
      accessToken: deliveryAccessToken
    })

    client
      .getEntry('2uNOpLMJioKeoMq8W44uYc')
      .then(response => {
        console.log(response.fields); 
      
        // this.setState({
        //   data: response.fields
        // })
      })
      .catch(console.error)
  }

  render() {
    if (!this.state.data) return null;
    return(
        <h1>{this.state.data.title}</h1>


    )
  }
}

export default Test;
