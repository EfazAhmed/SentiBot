import React, { Component } from 'react';
import Form from "./Form"
import './../styles/Index.css'

export class MainContent extends Component {
  render() {
    return (
        <div className='MainContentClass'>
            <p>SentiBot is a robot that was programmed by Cuny Tech Prep's greatest Data 
                Scientists and Software Engineers to depict emotion from text. 
                Insert your sentence below.
            </p>
            <Form />
        </div>
    )
  }
}

export default MainContent;
