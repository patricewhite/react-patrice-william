import React from 'react';
import TextInput from './input';
import Output from './output';

export default class Encoder extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      endpoint: 'https://example.com/api/validate/',
      method:'POST',
      userName: 'MYUSERNAME',
      password: 'MYPASSWORD'
    }
  }

  setEndpoint(endpoint){
    this.setState({
      endpoint
    });
  }
  setMethod(method){
    this.setState({
      method
    });
  }
  setUserName(userName){
    this.setState({
      userName
    });
  }
  setPassword(password){
    this.setState({
      password
    });
  }

  render(){
    return (
      <div>
        <TextInput id="endpoint" label="endpoint" placeholder="endpoint" onChange={v => this.setEndpoint(v)}/>
        <TextInput id="method" label="method" placeholder="method" onChange={v => this.setMethod(v)}/>
        <TextInput id="username" label="username" placeholder="username" onChange={v => this.setUserName(v)}/>
        <TextInput id="password" label="password" placeholder="password" onChange={v => this.setPassword(v)}/>
        <Output userName={this.state.userName} password={this.state.password} method={this.state.method} endpoint={this.state.endpoint} />
      </div>
    )
  }
}
