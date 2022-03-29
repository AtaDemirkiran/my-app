import React, { useState } from 'react'

const Project = ({ project }) => {

    const [visible, setVisible] = useState(false)

    const toogleVisible = () => {

        setVisible(!visible)
    }

    return (
        <div className="col-md-6 mb-5">

            <div className="view overlay rounded z-depth-1">
                <img src={project.projectIMG} className="img-fluid projectImages" alt="Sample project" />
                <a>
                    <div className="mask rgba-white-slight"></div>
                </a>
            </div>

            <div className="px-3 pt-3 mx-1 mt-1 pb-0">
                <h4 className="font-weight-bold mb-3">{project.projectName}</h4>
                <button className="btn btn-dark btn-rounded btn-md" onClick={() => toogleVisible()}>
                    {!visible ? 'Detay Göster' : 'Detay Gizle'}
                </button>
                {
                    visible ? <p className="mt-2 projectDetail "> {project.projectDetay}  </p> : null
                }


            </div>

        </div>
    )
}

export default Project