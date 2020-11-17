import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Home, Register, Navbar } from 'components/index'

function App () {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/register' component={Register} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
