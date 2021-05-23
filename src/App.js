
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
}               from "react-router-dom";
import HomePage from './pages/homepage/homepage.component';
import Shop     from './pages/shop/shop.component';
import Header   from './component/header/header.component';
import SignInPage   from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'

function App() {
  return (
    <Router>
      <Header/>
      <switch>
        <Route exact path='/'     component={HomePage}/>
        <Route exact path='/shop' component={Shop}/>
        <Route exact path='/sign-in' component={SignInPage}/>
      </switch>  
    </Router>
  );
}

export default App;
