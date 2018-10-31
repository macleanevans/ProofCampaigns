// Imports
import React from 'react'
import { Route, Switch } from 'react-router-dom'

// App Imports
import Layout from './components/layout'
import TweetListContainer from './components/dashboard/list-container'
import UserLogin from './components/user/login'
import About from './components/about'
import PageNotFound from './components/page-not-found'
import CampaignList from './components/dashboard/list';

const App = () => (
  <Layout>
    <Switch>
      <Route exact path="/" component={TweetListContainer}/>
      <Route path="/login" component={UserLogin}/>
      <Route path="/about" component={About}/>
      <Route component={PageNotFound}/>
    </Switch>
  </Layout>
)

export default App
