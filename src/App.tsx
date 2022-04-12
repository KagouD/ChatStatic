import React from 'react'
import { Root, Routes, addPrefetchExcludes } from 'react-static'
import { Router } from '@reach/router'
/*import ReactDOM from 'react'*/
import FancyDiv from 'components/FancyDiv'
import Dynamic from 'containers/Dynamic'

import './app.css'
import logo from './logo.png'
import './bulle.png'
// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['dynamic'])


function App() {
  return (
    <Root>
      <nav>
        <h1> <img src={logo} className="App-logo" alt="logo" />Jérome Bernard ▾ </h1>
      </nav>
      <div className="content">
        <div className="speechdroite bubble">Salut Jérôme, comment vas-tu ?</div><br/>
        <div className="speechgauche bubble">Je vais bien</div><br/>
        <div className="speechdroite2 bubble">Oui c'est vrai que c'est top!</div><br/>
        <div className="speechdroite3 bubble">Tu viens demain au fait?</div><br/>
        <div className="boxmessage bubble">Ecrire un message...</div><br/>
        <div className="button">⇧</div><br/>
        <p className='heure'>08:38 ✓✓</p> <br/>
        <p className='heure2'>10:25</p> <br/>
        <p className='heure3'>14:53 ✓</p>
        <FancyDiv>
          <React.Suspense fallback={<em>Loading...</em>}>
            <Router>
              <Dynamic path="dynamic" />
              <Routes path="*" />
            </Router>
          </React.Suspense>
        </FancyDiv>
      </div>
    </Root>
  )
}

export default App
