import React, { Component } from 'react'
import photo from '../assets/images/pp.jpg'
import homePhoto from '../assets/images/sliderPhoto.jpg'

class Home extends Component {
    render() {
        return (

            <div className="container my-5 bg-dark">
                <section className="dark-grey-text">

                    <h3 className="text-center font-weight-bold mb-4 pb-2">Ben Kimim ?</h3>
                    <p className="text-center text-muted w-responsive mx-auto mb-5">Merhaba Ben Ata Demirkıran. 23 Yaşında kendimi yazılım alanında geliştiren birisiym.</p>


                    <div className="row">

                        <div className="col-lg-5 mb-lg-0 mb-5">

                            <img src={homePhoto} className="img-fluid rounded z-depth-1" alt="Sample project image" />

                        </div>
                        <div className="col-lg-7">
                            <ul className="list-unstyled fa-ul mb-0">
                                <li className="d-flex justify-content-center pl-4">
                                    <span className="fa-li"><i className="fas fa-book fa-2x cyan-text"></i></span>
                                    <div>
                                        <h5 className="font-weight-bold mb-3">Eğitim</h5>
                                        <p className="text-muted">İstanbul Aydın Üniversitesi'nde Yazılım Mühendisliği (İngilizce) 4.sınıf öğrencisiyim.</p>
                                    </div>
                                </li>
                                <li className="d-flex justify-content-center pl-4">
                                    <span className="fa-li"><i className="fas fa-code fa-2x red-text"></i></span>
                                    <div>
                                        <h5 className="font-weight-bold mb-3">Teknolojiler</h5>
                                        <p className="text-muted">Aktif olarak kendimi React JS üzerinde geliştirmeye çalışıyorum .Şu an bakmış olduğunuz bu site ise REACT JS ile hazırlandı.
                                            PHP dilinde orta seviyede bilgim var. PHP Framewrok olarakta Laravel'e temel seviyede hakimim. Genel MVC yapısını biliyorum. HTML/CSS iyi seviyede bilgim bulunmaktadır
                                            Javascript'te orta seviyede bilgim var.
                                        </p>
                                    </div>
                                </li>
                                {/* <li className="d-flex justify-content-center pl-4">
                                    <span className="fa-li"><i className="fas fa-business-time fa-2x deep-purple-text"></i></span>
                                    <div>
                                        <h5 className="font-weight-bold mb-3">Staj/İş Tecrübeleri</h5>
                                        <p className="text-muted mb-0">lo</p>
                                    </div>
                                </li> */}
                                <a href='#' type='button' className='btn btn-warning'>CV İNDİR</a>
                            </ul>
                        </div>


                    </div>


                    <hr className="my-5" />

                </section>



            </div >
        )
    }
}
export default Home 