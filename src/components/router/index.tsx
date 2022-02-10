import React from 'react'
import { Home } from '../../pages/Home'
import { Portfolio } from '../../pages/Portfolio'
import { MainLayout } from '../layout'
import { Blog } from '../../pages/Blog'
import { Contact } from '../../pages/Contact'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

export const RouterApp = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' exact={true}>
          <MainLayout>
            <Home />
          </MainLayout>

        </Route>
        <Route path='/portfolio' exact>
          <MainLayout>
            <Portfolio />
          </MainLayout>

        </Route>

        <Route path='/blog' exact>
          <MainLayout>
            <Blog />
          </MainLayout>
        </Route>

        <Route path='/contact' exact>
          <MainLayout>
            <Contact />
          </MainLayout>
        </Route>
      </Switch>
    </Router>
  )
} 

export default RouterApp