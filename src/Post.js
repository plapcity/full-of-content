import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 
import {createClient} from 'contentful';

class Post extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null
    }
  }

  // CONNECTING TO CONTENTFUL
  componentWillMount(){
    const client = createClient({
      space: '7lmxfbgwho1z',
      accessToken: 'c56b83d0745aafb9bc9090686b15958ddff0f65479943cf5804a710b21bb3bc2'
    })

    client
      .getEntry(this.props.match.params.id)
      .then(response => {
        this.setState({
          data: response.fields
        })
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

export default Post;
