import React, { Component } from 'react'
import photo from '../assets/images/photo.jpg'
// import homePhoto from '../assets/images/sliderPhoto.jpg'
import cv from '../assets/AtaDemirkıran.pdf'

class Home extends Component {
    render() {
        return (

            <div className="container my-5">
                <section className="dark-grey-text">

                    <h3 className="text-center font-weight-bold mb-4 pb-2">Ben Kimim ?</h3>
                    <p className="text-center text w-responsive mx-auto mb-5">Merhaba Ben Ata Demirkıran. 23 Yaşında kendimi yazılım alanında geliştiren birisiym.</p>


                    <div className="row">

                        <div className="col-lg-5 mb-lg-0 mb-5">

                            <img src={photo} className="img-fluid rounded z-depth-1 homePhoto" alt="Sample project" style={{ objectFit: 'cover', transition: '.3s' }} />

                        </div>
                        <div className="col-lg-7">
                            <ul className="list-unstyled fa-ul mb-0">
                                <li className="d-flex justify-content-center pl-4 mt-2">
                                    <span className="fa-li"><i className="fas fa-book fa-2x cyan-text"></i></span>
                                    <div>
                                        <h5 className="font-weight-bold mb-3">Eğitim</h5>
                                        <p className="text">İstanbul Aydın Üniversitesi'nde Yazılım Mühendisliği (İngilizce) 4.sınıf öğrencisiyim.</p>
                                    </div>
                                </li>
                                <li className="d-flex justify-content-center pl-4 mt-5">
                                    <span className="fa-li"><i className="fas fa-code fa-2x red-text"></i></span>
                                    <div>
                                        <h5 className="font-weight-bold mb-3">Teknolojiler</h5>
                                        <p className="text">Aktif olarak kendimi React JS üzerinde geliştirmeye çalışıyorum. Şu an bakmış olduğunuz bu sitede REACT JS ile hazırlandı.
                                            PHP dilinde orta seviyede bilgim var. PHP Framewrok olarakta Laravel'e temel seviyede hakimim. Genel MVC yapısını biliyorum. HTML/CSS iyi seviyede bilgim bulunmaktadır
                                            Javascript'te orta seviyede bilgim var.
                                        </p>
                                    </div>
                                </li>

                                <a href={cv} download>
                                    <button className='btn btn-light' id='homeButton'>CV İNDİR</button>
                                </a>
                            </ul>
                            {/* skilss */}


                        </div>

                    </div>

                    <hr className="my-5" />

                </section>




            </div >
        )
    }
}
export default Home 