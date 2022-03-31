import React, { useState } from 'react'
import Project from './Project'
import saat from '../assets/images/saat.jpg'
import proje2 from '../assets/images/proje2.jpg'
import proje3 from '../assets/images/proje3.jpg'
import proje4 from '../assets/images/valorant.jpg'

const Projects = () => {

    const data = [
        { id: 1, projectName: 'Valorant App', projectDetay: 'React JS ile hazırlanan bu sitede Valorant API kullanıldı . SCSS ile düzenlemeleri yapıldı', projectIMG: proje4, isLive: true, siteLink: 'https://valorantapp.herokuapp.com/' },
        { id: 2, projectName: 'Blog Sitesi', projectDetay: 'PHP ile yaptığım bu sitede de aynı zamanda CMS Admin Paneli bulunmaktadır.', projectIMG: proje2, isLive: false, },
        { id: 3, projectName: 'Urun Tanıtım Sitesi', projectDetay: 'HTML/CSS/BOOTSTRAP ile yapılan bir ürün tanıtım sitesidir.', projectIMG: saat, isLive: false, },
        { id: 4, projectName: 'Futbolcu Keşif Sitesi', projectDetay: 'PHP ile yaptığımız bu sitenin ana amacanın altyapılarda keşfedilmeyi bekleyen futbolcuların öne çıkmasını sağlayan bir sitedir.', projectIMG: proje3, isLive: false },

    ]
    const [projects, setProjcets] = useState(data)

    return (
        <div className='container my-5  '>
            <section className='text-center  projcets'>
                <h3 className='font-weight-bold mb-4 pb-2'>Projelerim</h3>
                <div className='row'>
                    {
                        projects.map(project => {
                            return (
                                <Project key={project.id} project={project} />
                            )
                        })
                    }
                </div>
            </section>
        </div>
    )
}

export default Projects