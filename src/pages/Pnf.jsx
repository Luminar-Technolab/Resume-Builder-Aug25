import React from 'react'
import { Link } from 'react-router-dom'
import { IoMdArrowBack } from "react-icons/io";

function Pnf() {
  return (
    <div className='d-flex justify-content-center align-items-center flex-column p-5'>
      <h4>404!</h4>
      <img className='w-25' src="https://cdn.svgator.com/images/2024/04/electrocuted-caveman-animation-404-error-page.gif" alt="page not found" />
      <h2>Page Not Found</h2>
      <p>Sorry We couldn't find the page you're looking for.</p>
      <Link to={'/'} className='btn text-success fw-bolder'><IoMdArrowBack className='me-1'/>Back To Home</Link>
    </div>
  )
}

export default Pnf