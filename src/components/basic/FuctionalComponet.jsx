import React from 'react'

import vdom from './../../assests/images/vDOM.jpeg';

import "./componentStyle.css"
export default function FuctionalComponet() {
  return (
    <div>
      <p>I am VDOM (I am also affected by CORONA)</p>
      <div className="img-container">
        <img className="vdom" src={vdom} alt="VDOM"/>
      </div>
    </div>
  )
}
