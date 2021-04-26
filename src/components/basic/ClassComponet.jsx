import React, { Component } from 'react'

import dom from './../../assests/images/1200px-DOM-model.svg.png';

import "./componentStyle.css"
export default class ClassComponet extends Component {
  render() {
    return (
      <div>
        <p>I am DOM</p>
        <div className="img-container">
          <img className="dom" src={dom} alt="DOM"/>
        </div>
      </div>
    )
  }
}

