import { Box, Divider, Paper, Stack,Button } from '@mui/material'
import React from 'react'

function Preview({resumeDatails}) {
  return (
    <>
      <Box component="section"  >
        <Paper elevation={3} className='m-5 text-center p-5'>
          <h2>{resumeDatails?.fullName}</h2>
          <h5>{resumeDatails?.jobTitle}</h5>
          <p><span>{resumeDatails?.location}</span> | <span>{resumeDatails?.email}</span> | <span>{resumeDatails?.phone}</span></p>
          <p>
            <a href={resumeDatails?.github} target='_blank' className='me-1'>GITHUB</a> |
            <a href={resumeDatails?.linkedin} target='_blank' className='mx-1'>LINKEDIN</a> |
            <a href={resumeDatails?.portfolio} target='_blank' className='ms-1'>PORTFOLIO</a> 
          </p>
          <Divider sx={{fontSize:'25px'}}>Summary</Divider>
          <p style={{textAlign:'justify'}}>{resumeDatails?.summary}</p>
          <Divider sx={{fontSize:'25px'}}>Education</Divider>
          <h5>{resumeDatails?.course}</h5>
          <p><span>{resumeDatails?.college}</span> | <span>{resumeDatails?.university}</span> | <span>{resumeDatails?.passoutYear}</span></p>
          <Divider sx={{fontSize:'25px'}}>Work Experience</Divider>
          <h5>{resumeDatails?.jobType}</h5>
          <p><span>{resumeDatails?.company}</span> | <span>{resumeDatails?.clocation}</span> | <span>{resumeDatails?.duration}</span></p>
          <Divider sx={{fontSize:'25px'}}>Skills</Divider>
          <Stack direction={'row'} justifyContent={'space-evenly'} sx={{flexWrap:'wrap',gap:'10px',my:2}}>
            {/* duplicated */}
            { 
              resumeDatails?.skills?.map(item=>(
                <Button key={item} variant="contained">{item}</Button>
              ))
            }
          </Stack>
        </Paper>
      </Box>
    </>
  )
}

export default Preview