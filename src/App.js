import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import SignIn from './components/Signin-c'
import SignUp from './components/Signup'
import History from './components/History'
import Feedback from './components/Feedback'
import NewEvent from './components/NewEvent'
import Profile from './components/Profile'
import Users from './components/Users'

import { users as userList, events as eventList } from './datastore'


class App extends Component {
  constructor() {
    super()
    this.state = {
      signedUser: '',
      events: this.getEvents()
    }
  }

  getUsers() {
    return userList
  }
  getEvents() {
    return eventList
  }
  signin(user) {
    this.setState({ signedUser: {user}})
  }

  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route path='/' exact >
            <Home events={this.state.events} />
          </Route>
          <Route path='/signin'>
            <SignIn
              setUser={this.signin.bind(this)}
              getUSers={this.getUsers}
            />
          </Route>
          <Route path='/signup' component={SignUp} />
          <Route path='/history' >
            <History events={this.state.events} />
          </Route>
          <Route path='/feedback' component={Feedback} />
          <Route path='/new-event' component={NewEvent} />
          <Route path='/profile' component={Profile} /> 
          <Route path='/users' component={Users} /> 
        </Switch>
      </Router>
    )
  }
  
}

export default App;
