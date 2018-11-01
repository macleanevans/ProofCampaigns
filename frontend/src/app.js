// Imports
import React from 'react'
import { Route, Switch } from 'react-router-dom'

// App Imports
import Layout from './components/layout'
import CampaignListContainer from './components/dashboard/list-container'
import UserLogin from './components/user/login'
import About from './components/about'
import PageNotFound from './components/page-not-found'

const App = () => (
  <Layout>
    <Switch>
      <Route exact path="/" component={CampaignListContainer}/>
      <Route path="/login" component={UserLogin}/>
      <Route path="/about" component={About}/>
      <Route component={PageNotFound}/>
    </Switch>
  </Layout>
)

export default App
