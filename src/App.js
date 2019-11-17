import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import SignIn from './components/Signin';
import SignUp from './components/Signup';
import History from './components/History';
import Feedback from './components/Feedback';
import NewEvent from './components/NewEvent';


function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/signin' component={SignIn} />
        <Route path='/signup' component={SignUp} />
        <Route path='/history' component={History} />
        <Route path='/feedback' component={Feedback} />
        <Route path='/new-event' component={NewEvent} />
      </Switch>
    </Router>
  );
}

export default App;
