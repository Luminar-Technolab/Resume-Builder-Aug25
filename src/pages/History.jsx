import { Stack } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { MdDelete } from "react-icons/md";
import { IoMdArrowBack } from "react-icons/io";

function History() {
  return (
    <div>
      <h2 className="text-center my-5">Downloaded Resume History</h2>
      <Link to={'/form'} className='float-end mx-5' style={{marginTop:'-80px'}}> <IoMdArrowBack/> Back</Link>
      <Stack direction={'row'}  sx={{flexWrap:'wrap',gap:'10px',m:5}}>
        {/* duplicated div */}
         <div className='shadow p-5 text-center rounded'> 
          <div className="d-flex align-items-center mb-2">
            <h5>Review At : date&time</h5>
            <button className='btn text-danger fs-4'><MdDelete/></button>
          </div>
          <img width={'250px'} height={'250px'} className='border' src="https://cultivatedculture.com/wp-content/themes/x5-child/assets/images/templates/template5.jpg" alt="resume" />
          </div>
      </Stack>
    </div>
  )
}

export default History