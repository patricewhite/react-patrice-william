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
    let content;
    if(this.state.method === "PUT" || this.state.method === "POST"){
      content= <Content className="contentType container" id="contentType" label="Content Type" onChange={v => this.setContentType(v)} onClick={target=> target.checked=true}/>
    }
    return (
      <main className="container">
        <h2 className="welcomeText">Hate writing fetch calls with headers?</h2>
        <h3 className="welcomeTextSmool">Yeah, me too... so just fill out this form and let us do it for you. :)</h3>
        <div className="container content">
          <form className="container column1">
            <TextInput className= "endpoint" id="endpoint" label="Endpoint" placeholder="https://example.com/api/validate/" onChange={v => this.setEndpoint(v)}/>
            <Dropdown className="method" id="method" label="Method" onChange={v => this.setMethod(v)}/>
            {content}
            <TextInput className="username" id="username" label="Username" placeholder="Your username" onChange={v => this.setUserName(v)}/>
            <TextInput className="password" id="password" label="Password" placeholder="Your password" onChange={v => this.setPassword(v)}/>
          </form>
          <div className="container column2">
            <Output className="output" userName={this.state.userName} password={this.state.password} method={this.state.method} endpoint={this.state.endpoint} contentType={this.state.contentType}/>
          </div>
        </div>
      </main>
    );
  }
}
