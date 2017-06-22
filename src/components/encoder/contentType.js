import React from 'react';

export default class Content extends React.Component{

  render(){
    return(
      <div className="container input radios">
        <label className="contentTypeLabel" htmlFor={this.props.id}> {this.props.label}</label>
        <div className={this.props.className} id={this.props.id}>
          <input onClick={e => this.props.onChange(e.target.value)} type="radio" name="contentType" value="application/x-www-form-urlencoded" id="x-www"/><label className="selectCard container" htmlFor="x-www"><p className="select">x-www-form-urlencoded</p></label>
          <input onClick={e => this.props.onChange(e.target.value)} type="radio" name="contentType" value="application/xml" id="xml"/><label className="selectCard container" htmlFor="xml"><p className="select">xml</p></label>
          <input onClick={e => this.props.onChange(e.target.value)} type="radio" name="contentType" value="application/json" id="json"/><label className="selectCard container" htmlFor="json"><p className="select">json</p></label>
          <input onClick={e => this.props.onChange(e.target.value)} type="radio" name="contentType" value="application/javascript" id="js"/><label className="selectCard container" htmlFor="js"><p className="select">javascript</p></label>
        </div>
      </div>
    )
  }
}
