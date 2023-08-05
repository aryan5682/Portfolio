import React from 'react'

export default function Copyright() {
  return (
    <div className='copy' style={{width:'100%',minWidth:'750px',background:'rgba(0,0,0,0.7)',padding:'25px 50px'}}>
      <div className='right' style={{display:'flex',alignItems:'center',justifyContent:'center',gap:'1.5rem',color:'white'}}>
        <h3>&copy;&nbsp;Aryan Prajapati</h3>
        <h3>last Update:26/07/2023</h3>
      </div>
    </div>
  )
}
