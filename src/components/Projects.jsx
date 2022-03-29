import React, { useState } from 'react'
import Project from './Project'
import saat from '../assets/images/saat.PNG'
import proje2 from '../assets/images/proje2.PNG'
import proje3 from '../assets/images/proje3.PNG'

const Projects = () => {

    const data = [
        { id: 1, projectName: 'Urun Tanıtım Sitesi', projectDetay: 'HTML/CSS/BOOTSTRAP ile yapılan bir ürün tanıtım sitesidir.', projectIMG: saat },
        { id: 2, projectName: 'Blog Sitesi', projectDetay: 'PHP ile yaptığım bu sitede de aynı zamanda CMS Admin Paneli bulunmaktadır.', projectIMG: proje2 },
        { id: 3, projectName: 'Futbolcu Keşif Sitesi', projectDetay: 'PHP ile yaptığımız bu sitenin ana amacanın altyapılarda keşfedilmeyi bekleyen futbolcuların öne çıkmasını sağlayan bir sitedir.', projectIMG: proje3 }
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