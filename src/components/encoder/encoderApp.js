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
      <main container>
        <h2 className="welcomeText">Hate writing fetch calls with headers?</h2>
        <h3 className="welcomeTextSmool">me too... so just fill out this form and let react do it for you. :)</h3>
        <div className="container content">
          <form className="container column1">
            <TextInput className= "endpoint" id="endpoint" label="endpoint" placeholder="https://example.com/api/validate/" onChange={v => this.setEndpoint(v)}/>
            <Dropdown className="method" id="method" label="method" onChange={v => this.setMethod(v)}/>
            <Content className="contentType" id="contentType" label="contentType" onChange={v => this.setContentType(v)}/>
            <TextInput className="username" id="username" label="username" placeholder="MYUSERNAME" onChange={v => this.setUserName(v)}/>
            <TextInput className="password" id="password" label="password" placeholder="MYPASSWORD" onChange={v => this.setPassword(v)}/>
          </form>
          <div className="container column2">
            <Output className="output" userName={this.state.userName} password={this.state.password} method={this.state.method} endpoint={this.state.endpoint} contentType={this.state.contentType}/>
          </div>
        </div>
      </main>
    )
  }else {
    return(
    <main>
      <h2 className="welcomeText">Hate writing fetch calls with headers?</h2>
        <h3 className="welcomeTextSmool">me too... so just fill out this form and let react do it for you. :)</h3>
      <form>
        <TextInput className="endpoint" id="endpoint" label="endpoint" placeholder="https://example.com/api/validate/" onChange={v => this.setEndpoint(v)}/>
        <Dropdown className="method" id="method" label="method" onChange={v => this.setMethod(v)}/>
        <TextInput className="username" id="username" label="username" placeholder="MYUSERNAME" onChange={v => this.setUserName(v)}/>
        <TextInput className="password" id="password" label="password" placeholder="MYPASSWORD" onChange={v => this.setPassword(v)}/>
      </form>
      <Output className="output" userName={this.state.userName} password={this.state.password} method={this.state.method} endpoint={this.state.endpoint} />
    </main>
    )
  }
  }
}
