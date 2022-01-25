import React from 'react';
import Form from './Form'
import './../styles/Index.css'

const MainContent = () => {
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

export default MainContent;
