import React from "react";
import Header from './components/Header'
import './styles/Index.css'
import Form from "./components/Form";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header title="SentiBot"/>
        <Form />
      </div>
    )
  }
}

export default App;
