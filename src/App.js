import React, { Suspense, lazy } from 'react'
import { hot } from 'react-hot-loader/root'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Layout from './components/Layout';

const Home = lazy(() => import('./pages/home'))

const Page = () => (
  <Router>
    <Layout>
      <Suspense fallback={<div></div>}>
        <Route path="/">
          <Home/>
        </Route>
      </Suspense>
    </Layout>
  </Router>
)

export default hot(props => <Page {...props}/>)
