
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
}               from "react-router-dom";
import HomePage from './pages/homepage/homepage.component';
import Shop     from './pages/shop/shop.component.jsx';
import Header   from './component/header/header.component';

function App() {
  return (
    <Router>
      <Header/>
      <switch>
        <Route exact path='/'     component={HomePage}/>
        <Route exact path='/shop' component={Shop}/>
      </switch>  
    </Router>
  );
}

export default App;
