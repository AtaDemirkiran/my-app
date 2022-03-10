import React, { useState } from 'react'

const Sayac = () => {
    const [toplam,setToplam]=useState(0);
    return (
    <div className='container'>
        <div className='card'>
            <div className='card-header'>Sayi: {toplam} </div>
            <div className='card-body'>
                <button type='button' className='btn btn-warning'
                    onClick={(e)=>{
                        setToplam(toplam+1);
                        e.preventDefault();
                    }}
                >Sayı Arttır</button>
                <button type='button' className='btn btn-success ml-2'
                    onClick={(e)=>{
                        setToplam(toplam-1);
                        e.preventDefault();
                    }}
                >Sayı Azalt</button>
            </div>
        </div>
    </div>
  )
}

export default Sayac