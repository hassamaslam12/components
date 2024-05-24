import React from 'react'

const Input = (props:any) => {
  return (
    <>
      <input type={props.type} placeholder={props.placeholder} className='p-1 m-1 border-5'  />
    {props.value && <label>{props.value}</label>}
    </>
  )
}

export default Input
