import React from 'react'

const Icerik = (props) => {
  return (
    <div>
        <div style={{color:'red'}}> {props.children} </div>
        <div style={{color:'blue'}}> {props.age} </div>
    </div>
  )
}
export default Icerik;