import React from 'react';
import TextInput from './input.js';

export default class Encoder extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div>
        <TextInput id="endpoint" label="endpoint" placeholder="endpoint"/>
        <TextInput id="method" label="method" placeholder="method"/>
        <TextInput id="username" label="username" placeholder="username"/>
        <TextInput id="password" label="password" placeholder="password"/>
      </div>
    )
  }
}
