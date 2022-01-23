import React, { Component } from 'react';
import Form from "./Form"
import './../styles/Index.css'

export class MainContent extends Component {
  render() {
    return (
        <div className='MainContentClass'>
            {/* <p>Greetings Human. I am SentiBot, the world's first robot with emotions.
                I was programmed by Cuny Tech Prep's greatest Data Scientists and
                Software Engineers to Tell you how you are feeling by simply giving me
                a sentence. Insert your sentence below.
            </p> */}
            <Form />
        </div>
    )
  }
}

export default MainContent;
