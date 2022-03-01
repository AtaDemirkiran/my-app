import React, { Component } from 'react'
import PropTypes from 'prop-types'
class User extends Component {
  render() {
      const {name,salary,department}=this.props;
    return (
      <div className='col-md-8 mb-4'>
          <div className='card'>

            <div className='card-header d-flex justfiy-content-between'>
                <h4 className='d-inline '>{name}</h4>
            </div>

            <div className='card-body '>
                <p className='card-text'>Maaş : {salary} </p>
                <p className='card-text'>Department {department} </p>
            </div>
          </div>

      </div>
    )
  }
}

User.defaultProps={
    name :'name bilgisi yok',
    salary: 'salary bilgisi yok',
    department:'departman bilgisi yok'
}
export default User;