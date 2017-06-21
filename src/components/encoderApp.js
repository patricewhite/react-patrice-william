import React from 'react';
import TextInput from './input';
import Output from './output';
import Dropdown from './dropDown';
import Content from './contentType';

export default class Encoder extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      endpoint: 'https://example.com/api/validate/',
      method:'POST',
      userName: 'MYUSERNAME',
      password: 'MYPASSWORD',
      contentType: " "
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
  setContentType(contentType){
    this.setState({
      contentType
    });
  }

  render(){
    if(this.state.method === "PUT" || this.state.method === "POST"){
    return (
      <form>
        <TextInput id="endpoint" label="endpoint" placeholder="https://example.com/api/validate/" onChange={v => this.setEndpoint(v)}/>
        <Dropdown id="method" label="method" onChange={v => this.setMethod(v)}/>
        <Content id="contentType" label="contentType" onChange={v => this.setContentType(v)}/>
        <TextInput id="username" label="username" placeholder="MYUSERNAME" onChange={v => this.setUserName(v)}/>
        <TextInput id="password" label="password" placeholder="MYPASSWORD" onChange={v => this.setPassword(v)}/>
        <Output userName={this.state.userName} password={this.state.password} method={this.state.method} endpoint={this.state.endpoint} contentType={this.state.contentType}/>
      </form>
    )
  }else {
    return(
    <form>
      <TextInput id="endpoint" label="endpoint" placeholder="https://example.com/api/validate/" onChange={v => this.setEndpoint(v)}/>
      <Dropdown id="method" label="method" onChange={v => this.setMethod(v)}/>
      <TextInput id="username" label="username" placeholder="MYUSERNAME" onChange={v => this.setUserName(v)}/>
      <TextInput id="password" label="password" placeholder="MYPASSWORD" onChange={v => this.setPassword(v)}/>
      <Output userName={this.state.userName} password={this.state.password} method={this.state.method} endpoint={this.state.endpoint} />
    </form>
    )
  }
  }
}
