import './App.css';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import Dashboard from './components/Dashboard';
import ProductList from './components/ProductList'
import NavComp from './components/NavComp';
import Login from './components/Login';

function App() {
  return (
    <>
      <Router>
          {/* <NavComp/> */}
          <Dashboard/>

          
      </Router>
    </>
  );
}

export default App;
