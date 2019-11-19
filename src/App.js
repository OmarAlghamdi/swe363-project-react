import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import SignIn from './components/Signin-c'
import SignUp from './components/Signup-c'
import History from './components/History'
import Feedbacks from './components/Feedbacks'
import Feedback from './components/Feedback-c'
import NewEvent from './components/NewEvent-c'
import Profile from './components/Profile'
import Users from './components/Users'
import Forgot from './components/Forgot'
import Accept from './components/Accept'
import Reports from './components/Reports'

import { users as userList, events as eventList } from './datastore'


class App extends Component {
  constructor() {
    super()
    this.state = {
      signedUser: 'omar@kfupm.com',
      events: this.getEvents(),
      users: this.getUsers()
    }
  }

  getEvents() {
    return eventList
  }
  getUsers() {
    return userList
  }

  render() {
    return (
      <Router>
        <Header signed='no'/>
        <Switch>
          <Route path='/swe363-project-react' exact >
            <Home events={this.state.events} />
          </Route>
          <Route path='/swe363-project-react/signin' exact>
            <SignIn/>
          </Route>
          <Route path='/swe363-project-react/signup' exact component={SignUp} />
          <Route path='/swe363-project-react/history' exact >
            <History
              events={this.state.events}
              user={this.state.signedUser}
            />
          </Route>
          <Route path='/swe363-project-react/events' exact >
            <History
              events={this.state.events}
              admin={true}
            />
          </Route>
          <Route path='/swe363-project-react/accept' exact >
            <Accept event={
              this.state.events.filter(event => (
                event.creator === this.state.signedUser
              ))
            } users={this.state.users}/>
          </Route>
          <Route path='/swe363-project-react/feedbacks' exact >
            <Feedbacks events={
              this.state.events.filter(event => (
                event.creator === this.state.signedUser
              ))
            } users={this.state.users} />
          </Route>
          <Route path='/swe363-project-react/feedback' exact component={Feedback} />
          <Route path='/swe363-project-react/reply' exact >
            <Feedback mode='reply' />
          </Route>
          <Route path='/swe363-project-react/new-event' exact component={NewEvent} />
          <Route path='/swe363-project-react/edit-event' exact>
            <NewEvent mode='edit' />
          </Route>
          <Route path='/swe363-project-react/profile' exact component={Profile} /> 
          <Route path='/swe363-project-react/users' exact component={Users} /> 
          <Route path='/swe363-project-react/reset-password' exact component={Forgot} /> 
          <Route path='/swe363-project-react/reports' exact>
            <Reports
              events={this.state.events}
              users={this.state.users}
            />
          </Route>
        </Switch>
      </Router>
    )
  }
  
}

export default App;
