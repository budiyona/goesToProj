import './App.css';
import rootReducer from "./redux";
import { Body, Footer, Nav } from './template';
import { BrowserRouter as Router } from "react-router-dom";
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const store = createStore(rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div class="container-main">
          <Nav></Nav>
          <Body></Body>
          <Footer></Footer>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
