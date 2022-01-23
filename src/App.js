import React from "react";
import './styles/Index.css'
import { BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
import Home from "./components/pages/Home";
import Report from "./components/pages/Report";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Routes>

          <Route path="/" element={<Home/>} />

          <Route path="*" element={<div>404 Not Found</div>} />

        </Routes>
      </Router>
    )
  }
}

export default App;
