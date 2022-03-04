import React, { Component } from 'react'

class Clothes extends Component {

    constructor(props){
        super(props);

        this.state={
            marka : 'zara',
            cinsiyet :'erkek',
            fiyat : '1000',
            renk :'kırmızı',
            gorunurluk : false
        };
    }
    
    renkDegistir = () => {
        this.setState({
            renk :'mavi'
        });
    }
    goster = () =>{
        this.setState ({
            gorunurluk:true
        })
    }
    gizle = () =>{
        this.setState ({
            gorunurluk:false
        })
    }

  render() {
      const {marka,cinsiyet,fiyat,renk,gorunurluk}=this.state;
    return (
      <div>
          <div className='container'>
                <div className='card'>
                        <div className='card-header'>
                            <h4>Marka {marka} </h4>
                            <button type='button' onClick={this.goster} className='btn btn-warning'>
                                Göster
                            </button>
                            <button type='button' onClick={this.gizle} className='btn btn-danger ml-3'>
                                Gizle
                            </button>
                        </div>
                        {
                            gorunurluk ? 
                            <div className='card-body'>
                            <ul>
                                <li className='list-item'>cinsiyet {cinsiyet} </li>
                                <li className='list-item'>fiyat {fiyat} </li>
                                <li className='list-item'>renk {renk} </li>
                            </ul>
                            <button
                                className='btn btn-secondary'
                                type="button"
                                onClick={this.renkDegistir}>
                                Renk Değiştir
                            </button>
                        </div>
                            :null
                        }
                </div>
          </div>

      </div>
    )
  }
}
export default Clothes;