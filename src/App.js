import React from "react";
import Header from './components/Header'
import './styles/Index.css'
import MainContent from "./components/MainContent";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header title="SentiBot"/>
        <MainContent />
      </div>
    )
  }
}

export default App;
