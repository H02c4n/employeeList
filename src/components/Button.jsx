import React from 'react'

const Button = ({inc, dec, range}) => {

  return (
        <div className='d-flex justify-content-evenly'>
          {range.finish > 5 ?<button onClick={dec}  className='btn btn-info fs-3 text-lead px-5 mb-3'>Prev</button> :""}
        
        {range.finish < 20 ?<button onClick={inc} className='btn btn-info fs-3 text-lead px-5 mb-3'>Next</button> : ""}
        
        </div>
  )
}

export default Button