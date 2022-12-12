import React, { Suspense, lazy } from 'react'
import { hot } from 'react-hot-loader/root'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Layout from './components/Layout';

const Home = lazy(() => import('./pages/home'))

const Page = () => (
  <Router>
    <Layout>
      <Suspense fallback={<div></div>}>
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
      </Suspense>
    </Layout>
  </Router>
)

export default hot(props => <Page {...props}/>)
