import React, { Component } from 'react'
import { BrowserRouter as Router ,Link ,Routes,NavLink ,Route } from 'react-router-dom';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Header from './components/Header';
import './App.scss'

class App extends Component {
  

 render() {
    
    return (
      <Router>
      <div className="container-fluid">
            <div className="row min-vh-100 flex-column flex-md-row" style={{backgroundColor:'#111'}}>
              
              <Header/>

                <main className="col px-0 flex-grow-1 mt-3">
                    <div className="container">
                           <Routes>
                              <Route path='/' element={<Home/>} />
                              <Route path='/projects' element={<Projects/>} />
                              <Route path='/contact' element={<Contact/>} />
                            </Routes>     
                    </div>
                </main>
            </div>
      </div>
      </Router>


    )
  }
}
export default App;