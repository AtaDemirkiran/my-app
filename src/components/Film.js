import React, { Component } from 'react'
// import PropTypes from 'prop-types'
class Film extends Component {
  render() {
      
    return (
      <div className='container'>
        <div className='row'>
      {
        this.props.movies.map((movie)=>(
          <div className="card col-lg-4 mt-3" key={movie.id}>

            <img className="card-img-top" src={movie.imageURL} alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">{movie.name} </h5>
                <p className="card-text">{movie.overview} </p>
                <button type='button' className='btn btn-danger' onClick={(event)=>this.props.deleteMovieProp(movie)}>Delete</button>
              </div>
          
          </div>
        ))
      }
        </div>

      </div>
    )
  }
}

export default Film;