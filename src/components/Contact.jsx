import React from 'react'
// import '../App.scss'

const Contact = () => {
    return (
        <section className="mb-4 mt-5 contactPage">
            <h2 className="h1-responsive font-weight-bold text-center my-4">Benimle İletişime Geçin  </h2>
            <div className="row d-flex justify-content-center">
                <div className="col-md-9 mb-md-0 mb-5">
                    <form id="contact-form" name="contact-form" action="mailto:atademirkiran@gmail.com.com" method="POST">
                        <div className="row">
                            <div className="col-md-6 mt-4">
                                <div className="md-form mb-0">
                                    <input type="text" id="name" name="name" placeholder='Adınız' className="form-control" required />
                                </div>
                            </div>
                            <div className="col-md-6 mt-4">
                                <div className="md-form mb-0">
                                    <input type="text" id="email" name="email" placeholder='Mail adresiniz' className="form-control" required />
                                </div>
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-md-12">
                                <div className="md-form">
                                    <textarea type="text" id="message" name="message" rows="3" className="form-control md-textarea" placeholder='Mesajınızı Giriniz' required></textarea>
                                </div>

                            </div>
                        </div>

                        <div className="text-center text-md-left mt-3">
                            <input type='submit' className='btn btn-dark mb-3' />
                        </div>

                    </form>

                    {/* <div className="status"></div> */}
                </div>
            </div>
            <div className='container '>
                <div className='row contactIcons'>
                    <div className='col-md-3 p-2'>
                        <i className="fa fa-phone"></i> (532) 228 18 22
                    </div>
                    <div className='col-md-3 p-2'>
                        <i className="fa fa-home"> </i> Beyoğlu / İstanbul
                    </div>
                    <div className='col-md-3 p-2'>
                        <i className="fa fa-envelope"></i> atademirkiran@gmail.com
                    </div>
                </div>
            </div>
            <div className='container mt-4 '>
                <iframe className='col-md-12' src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d17016.488880616784!2d28.887324603874628!3d41.06639860168685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1str!2str!4v1648472134052!5m2!1str!2str" style={{ border: 0, height: '300px' }} referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </section>
    )
}

export default Contact