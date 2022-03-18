import React, { Component } from 'react'

class Contact extends Component {
    render() {
        return (

            <section className="mb-4 mt-5 ">
                <h2 className="h1-responsive font-weight-bold text-center my-4">Benimle İletişime Geçin  </h2>
                <div className="row d-flex justify-content-center">
                    <div className="col-md-9 mb-md-0 mb-5">
                        <form id="contact-form" name="contact-form" action="#" method="POST">
                            <div className="row">
                                <div className="col-md-6 mt-2">
                                    <div className="md-form mb-0">
                                        <input type="text" id="name" name="name" placeholder='Adınız' className="form-control" required />
                                    </div>
                                </div>
                                <div className="col-md-6 mt-2">
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


                        </form>

                        <div className="text-center text-md-left mt-3">
                            <a className="btn btn-primary mb-3">Gönder</a>
                        </div>
                        {/* <div className="status"></div> */}
                    </div>
                </div>
            </section>
        )
    }
}

export default Contact