import React, { useEffect, useState } from 'react'

const Sayac = () => {
    const [counter,setCounter]=useState(0);
    useEffect(()=>{
        console.log('ata');
    },[counter]);
  return (
    <div className='container'>
        <div className='card'>
            <div className='card-header '>
                Sayaç
            </div>
            <div className='card-body'>
                <span>Counter : {counter} </span>
                <br/><br/>
                <button type='button' className='btn btn-danger'
                    onClick={()=>{
                        setCounter(counter+1);
                        // e.preventDefault();
                    }}
                >Button</button><br/><br/>
                <button type='button' className='btn btn-dark' 
                  onClick={()=>{
                      setCounter(0);
                    //   e.preventDefault();
                  }}
                >Reset</button>
            </div>
        </div>
    </div>
  )
}

export default Sayac