import './App.css'
import Home_component from './components/home_component'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NotFound404 from './components/NotFound404'
import React, { Suspense } from 'react'

function App() {
  const Component_1 = React.lazy(() => import('./components/component_1'))
  const Component_2 = React.lazy(() => import("./components/component_2"))
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path='/' element={<Home_component />} />
          <Route
            path='/component_1' element={
              <Suspense fallback={<div>Loading...</div>}>
                <Component_1 />
              </Suspense>
            }
          />
          <Route path='/component_2' element={
            <Suspense fallback={<div>Loading...</div>}>
              <Component_2 />
            </Suspense>
          } />
          <Route path='*' element={<NotFound404 />} />
        </Routes>
      </Router>
    </React.Fragment>
  )
}

export default App
