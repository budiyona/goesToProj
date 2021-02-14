import { Provider } from 'react-redux';
import './App.css';
import { Body, Footer, Nav } from './template';
import rootReducer from './redux';
import { createStore } from 'redux';
import { BrowserRouter as Router } from "react-router-dom";

const store = createStore(rootReducer, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())  
function App() {
  return (
    <Provider store={store}>
      <Router>
      <div class="container-fluid">
        <Nav></Nav>
        <Body></Body>
        <Footer></Footer>
      </div>
      </Router>
    </Provider>
  );
}

export default App;
