import React, { Component } from 'react'
import PropTypes from 'prop-types'
class Footer extends Component {
  render() {
      const {name,surname,city} = this.props;
    return (
      <div>
          <div className='container'>
            <div className='container'>

                <ul>
                    <li>adi: {name} </li>
                    <li>soyadi:{surname} </li>
                    <li>sehir: {city} </li>
                </ul>
            </div>
          </div>
      </div>
    )
  }
}

Footer.defaultProps ={
    name : 'name bilgisi yok ',
    surname :'surname bilgisi yok',
    city :'sehir bilgisi yok'
}

export default Footer;