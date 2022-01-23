import React, { Component } from 'react';
import Header from '../Header';
import MainContent from '../MainContent';
import './../../styles/Index.css'

class Home extends Component {
  render() {
    return (
        <div>
          <Header title="SentiBot"/>
          <MainContent />
        </div>
    )
  }
}

export default Home;
