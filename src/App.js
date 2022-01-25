import React from "react";
import './styles/Index.css'
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./components/pages/Home";
import Report from "./components/pages/Report";
import Header from "./components/Header";


const App = () => {
  return (
    <Router>
      <Header title="SentiBot"/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="report" element={<Report/>} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </Router>
  )
}

export default App;
