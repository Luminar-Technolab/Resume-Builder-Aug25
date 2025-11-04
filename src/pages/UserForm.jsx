import React from 'react'
import UserInputs from '../components/UserInputs'
import Preview from '../components/Preview'

function UserForm() {
   const [resumeDatails,setResumeDetails] = React.useState({
      fullName:"",
      jobTitle:"",
      location:"",
      email:"",
      phone:"",
      github:"",
      linkedin:"",
      portfolio:"",
      course:"",
      college:"",
      university:"",
      passoutYear:"",
      jobType:"",
      company:"",
      cLocation:"",
      duration:"",
      skills:[],
      summary:""
    })
  
  return (
    <>
      <div className="row container m-5">
        <div className="col-md-6">
          <UserInputs resumeDatails={resumeDatails} setResumeDetails={setResumeDetails}/>
        </div>
        <div className="col-md-6 ">
          {
            resumeDatails.fullName &&
            <Preview resumeDatails={resumeDatails}/>
          }
        </div>
      </div>
    </>
  )
}

export default UserForm