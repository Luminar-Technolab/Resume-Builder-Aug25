import React from 'react'
import { FaFileAlt } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import { Link } from 'react-router-dom';

function Resume() {
  return (
    <div className='my-5'>
      <h1 className="text-center">Create a Job-Winning Resume in Minutes</h1>
      <div className="container my-5">
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-4 rounded p-5 shadow text-center">
            <FaFileAlt className='fs-1 text-primary mb-3'/>
            <h4>Add your Information</h4>
            <p>Add pre-written examples to each section</p>
            <h5>Step 1</h5>
          </div>
          <div className="col-md-2"></div>
          <div className="col-md-4 rounded p-5 shadow text-center">
            <FaDownload className='fs-1 text-danger mb-3'/>
            <h4>Download your Resume</h4>
            <p>Download and start applying</p>
            <h5>Step 2</h5>
            <div className="col-md-1"></div>
          </div>
        </div>
      </div>
      <div className="text-center">
        <Link to={'/form'} className="btn text-light" style={{backgroundColor:'purple'}}>LET'S START</Link>
      </div>
    </div>
  )
}

export default Resume