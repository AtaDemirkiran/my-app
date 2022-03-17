import React, { Component } from 'react'
import { BrowserRouter as Router ,Link ,Routes,NavLink ,Route } from 'react-router-dom';
import photo from './assets/images/pp.jpg'
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';

class App extends Component {
  
  constructor(props){
    super(props);

    this.state ={
      color : 'white',
    }

  }

 render() {
   const {color}=this.state
    return (
      <Router>
      <div className="container-fluid bg-dark">
            <div className="row min-vh-100 flex-column flex-md-row">
                <aside className="col-12 col-md-3 col-xl-2 p-0 bg-success ">
                    <nav className="navbar navbar-expand-md navbar-dark bd-dark flex-md-column flex-row align-items-center py-2 text-center sticky-top "
                        id="sidebar">
                        <div className="text-center p-3">
                            <img src={photo} alt="profile picture"
                                className="img-fluid rounded-circle my-4 p-1 d-none d-md-block shadow" />
                            <span className="navbar-brand mx-0 font-weight-bold  text-nowrap">ATA DEMİRKIRAN</span>
                        </div>
                        <button type="button" className="navbar-toggler border-0 order-1" data-toggle="collapse"
                            data-target="#nav" aria-controls="nav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse order-last" id="nav">
                            <ul className="navbar-nav flex-column w-100 justify-content-center">
                                <li className="nav-item">
                                    <NavLink to={'/'} style={{color}} >Ana Sayfa</NavLink>
                                </li>
                                <li className="nav-item mt-2">
                                    <NavLink to={'/projects'} style={{color}}>Projeler</NavLink>
                                </li>
                                <li className="nav-item mt-2">
                                    <NavLink to={'/contact'} style={{color}}>İletişim</NavLink>
                                </li>
                                {/* <li className="nav-item">
                                    <a href="#" className="nav-link"> Users Info </a>
                                </li> */}
                                <li className="nav-item mt-2">
                                  <a href='#'><i className="fa fa-instagram" style={{fontSize:'24px',color:'black'}}></i></a>
                                  <a href='#' className='ml-2'><i className="fa fa-github" style={{fontSize:'24px',color:'black'}}></i></a>
                                </li>
                                <li className="nav-item mt-2">
                                  <i className="fa fa-home" style={{color:'white'}}> İstanbul/Beyoğlu</i>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </aside>
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