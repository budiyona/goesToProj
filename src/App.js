import './App.css';

import { Body, Footer, Nav } from './template';
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div class="container-main">
        <Nav></Nav>
        <Body></Body>
        <Footer></Footer>
      </div>
      </Router>
  );
}

export default App;
