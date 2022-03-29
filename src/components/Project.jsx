import React, { Component } from 'react'
import '../App.scss'
class Project extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isVisible: false
        }
    }

    // isVisibleToggle = () => {
    //     this.setState(({
    //         isVisible: !this.isVisible
    //     }))
    // }

    render() {
        const { isVisible } = this.state
        const { projects } = this.props
        return (


            <div className="col-md-6 mb-5">

                <div className="view overlay rounded z-depth-1">
                    <img src={projects.projectIMG} className="img-fluid projectImages" alt="Sample project" />
                    <a>
                        <div className="mask rgba-white-slight"></div>
                    </a>
                </div>

                <div className="px-3 pt-3 mx-1 mt-1 pb-0">
                    <h4 className="font-weight-bold mb-3">{projects.projectName}</h4>
                    <button className="btn btn-dark btn-rounded btn-md" onClick={() => {
                        this.setState({
                            isVisible: !isVisible
                        })
                    }} >Detay Göster </button>
                    {
                        isVisible ? (
                            <p className="mt-2 projectDetail ">{projects.projectDetay} </p>
                        ) : null
                    }
                </div>

            </div>


        )
    }
}
export default Project