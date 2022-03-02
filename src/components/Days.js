import React, { Component } from 'react'

class Days extends Component {

  constructor(props){
    super(props);

    this.state={
      marka : 'zara',
      kategori :'ceket',
      renk: 'kırmız',
      cinsiyet: 'kadın'
    };
  }
  renkDegistir = () => {
    this.setState({renk: "Mavi"});
  }
    
  render() {

    const {marka,kategori,renk,cinsiyet} = this.state;

    return (
        <div>
            <h1>Marka: {marka} </h1>

            <div className='container'>
                <ul>
                  <li>Kategori: {kategori} </li>
                  <li>Renk: {renk} </li>
                  <li>Cinsyite:{cinsiyet} </li>
                </ul>

              <button onClick={this.renkDegistir}>
                Button
              </button>
            </div>

        </div>
    )
  }
}
export default Days;