import React, { useRef, useState } from 'react'
import { MdEditDocument } from "react-icons/md";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
import { FaXmark } from "react-icons/fa6";
import { editResumeAPI } from '../services/allAPI';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  maxHeight:'80vh',
  overflowY:'auto',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function Edit({resumeDatails,setResumeDetails}) {
    const skillRef = useRef()
    const [open, setOpen] = useState(false)

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const addSkill = (skill)=>{
        if(resumeDatails.skills?.map(data=>data.toLowerCase())?.includes(skill.toLowerCase())){
        alert("Given Skill is already available. Please add another!!!")
        }else{
        setResumeDetails({...resumeDatails,skills:[...resumeDatails.skills,skill]})
        }
        skillRef.current.value = ""
    }
    const removeSkill = (skill)=>{
        setResumeDetails({...resumeDatails,skills:resumeDatails.skills?.filter(item=>item!=skill)})
    }
    const handleResumeUpdate = async ()=>{
       const {id,fullName,jobTitle,location} = resumeDatails
        if(!fullName || !jobTitle || !location){
            alert("Please fill the form completely!!!")
        }else{
            console.log("api call");
            const result = await editResumeAPI(id,resumeDatails)
            console.log(result);
            if(result.status==200){
                alert("Resume Updated successfully!!!")
                handleClose()
            }
        }
    }
    // console.log(resumeDatails);
    
  return (
    <div>
        <button onClick={handleOpen}  className="btn text-warning fs-2 me-2"><MdEditDocument/></button>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Edit Resume Details
                </Typography>
                <Box id="modal-modal-description" sx={{ mt: 2 }}>
                    {/* personel daTa */}
                     <div>
                        <h3>Personal Details</h3>
                        <div className="p-3 row">
                        {/* to get data from text field use onchange event to bind with state and spread state & update one field only */}
                        <TextField value={resumeDatails.fullName} onChange={e=>setResumeDetails({...resumeDatails,fullName:e.target.value})} id="standard-basic-name" label="Full Name" variant="standard" />
                        <TextField value={resumeDatails.jobTitle} onChange={e=>setResumeDetails({...resumeDatails,jobTitle:e.target.value})} id="standard-basic-job" label="Job Title" variant="standard" />
                        <TextField value={resumeDatails.location} onChange={e=>setResumeDetails({...resumeDatails,location:e.target.value})} id="standard-basic-location" label="Location" variant="standard" />
                        </div>
                    </div>
                    {/* contact data */}
                     <div>
                        <h3>Contact Details</h3>
                        <div className="p-3 row">
                        <TextField value={resumeDatails.email} onChange={e=>setResumeDetails({...resumeDatails,email:e.target.value})} id="standard-basic-mail" label="E Mail" variant="standard" />
                        <TextField value={resumeDatails.phone} onChange={e=>setResumeDetails({...resumeDatails,phone:e.target.value})} id="standard-basic-phone" label="Phone" variant="standard" />
                        <TextField value={resumeDatails.github} onChange={e=>setResumeDetails({...resumeDatails,github:e.target.value})} id="standard-basic-github" label="Github Profile Link" variant="standard" />
                        <TextField value={resumeDatails.linkedin} onChange={e=>setResumeDetails({...resumeDatails,linkedin:e.target.value})} id="standard-basic-linkedin" label="Linkedin Profile Link" variant="standard" />
                        <TextField value={resumeDatails.portfolio} onChange={e=>setResumeDetails({...resumeDatails,portfolio:e.target.value})} id="standard-basic-portfolio" label="Portfolio Profile Link" variant="standard" />
                        </div>
                    </div>
                    {/* education data */}
                    <div>
                          <h3>Educational Details</h3>
                          <div className="p-3 row">
                            <TextField value={resumeDatails.course} onChange={e=>setResumeDetails({...resumeDatails,course:e.target.value})} id="standard-basic-course" label="Course " variant="standard" />
                            <TextField value={resumeDatails.college} onChange={e=>setResumeDetails({...resumeDatails,college:e.target.value})} id="standard-basic-college" label="College " variant="standard" />
                            <TextField value={resumeDatails.university} onChange={e=>setResumeDetails({...resumeDatails,university:e.target.value})} id="standard-basic-university" label="University" variant="standard" />
                            <TextField value={resumeDatails.passoutYear} onChange={e=>setResumeDetails({...resumeDatails,passoutYear:e.target.value})} id="standard-basic-passout" label="Year of Passout" variant="standard" />
                          </div>
                    </div>
                    {/* work experience */}
                    <div>
                          <h3>Work Experience</h3>
                          <div className="p-3 row">
                            <TextField value={resumeDatails.jobType} onChange={e=>setResumeDetails({...resumeDatails,jobType:e.target.value})} id="standard-basic-jType" label="Job / Intership" variant="standard" />
                            <TextField value={resumeDatails.company} onChange={e=>setResumeDetails({...resumeDatails,company:e.target.value})} id="standard-basic-company" label="Company Name" variant="standard" />
                            <TextField value={resumeDatails.cLocation} onChange={e=>setResumeDetails({...resumeDatails,cLocation:e.target.value})} id="standard-basic-clocation" label="Company Location" variant="standard" />
                            <TextField value={resumeDatails.duration} onChange={e=>setResumeDetails({...resumeDatails,duration:e.target.value})} id="standard-basic-duration" label="Duration" variant="standard" />
                          </div>
                    </div>
                    {/* skills */}
                     <div>
                        <h3>Skills</h3>
                        <div className="d-flex justify-content-between align-items-center p-3">
                            <input ref={skillRef} type="text" placeholder='Add Skill' className="form-control" />
                            <Button onClick={()=>addSkill(skillRef.current.value)} variant='text'>Add</Button>
                        </div>
                        
                        <h5>Added Skils :</h5>
                        <div className="d-flex flex-wrap justify-content-between p-3">
                            {/* duplicated according to input skill */}
                            {
                            resumeDatails.skills?.map(item=>(
                                <Button onClick={()=>removeSkill(item)} key={item} variant="contained" className='my-1'>{item} <FaXmark className='ms-1'/> </Button>
                            ))
                            }
                        </div>
                        </div>
                    {/* summary */}
                    <div>
                        <h3>Summary</h3>
                        <div className="p-3 row">
                        <TextField value={resumeDatails?.summary} onChange={e=>setResumeDetails({...resumeDatails,summary:e.target.value})} id="standard-basic-summary" label="Write a short summary of yourself" multiline  variant="standard" />
                        </div>
                    </div>
                    {/* update button */}
                    <button onClick={handleResumeUpdate} className="btn btn-success">Update</button>
                </Box>
            </Box>
        </Modal>
    </div>
  )
}

export default Edit