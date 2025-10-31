import { Box, Divider, Paper, Stack,Button } from '@mui/material'
import React from 'react'

function Preview() {
  return (
    <>
      <Box component="section"  >
        <Paper elevation={3} className='m-5 text-center p-5'>
          <h2>Name</h2>
          <h5>jobTitle</h5>
          <p><span>location</span> | <span>email</span> | <span>phone</span></p>
          <p>
            <a href="" target='_blank' className='me-1'>GITHUB</a> |
            <a href="" target='_blank' className='mx-1'>LINKEDIN</a> |
            <a href="" target='_blank' className='ms-1'>PORTFOLIO</a> 
          </p>
          <Divider sx={{fontSize:'25px'}}>Summary</Divider>
          <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut dicta sunt rerum optio! Delectus voluptate labore amet suscipit mollitia odio facere atque, unde, repellat quasi ad cumque perspiciatis a animi.</p>
          <Divider sx={{fontSize:'25px'}}>Education</Divider>
          <h5>course</h5>
          <p><span>college</span> | <span>university</span> | <span>year</span></p>
          <Divider sx={{fontSize:'25px'}}>Work Experience</Divider>
          <h5>jobType</h5>
          <p><span>company</span> | <span>location</span> | <span>duration</span></p>
          <Divider sx={{fontSize:'25px'}}>Skills</Divider>
          <Stack direction={'row'} justifyContent={'space-evenly'} sx={{flexWrap:'wrap',gap:'10px',my:2}}>
            {/* duplicated */}
            <Button variant="contained">NODE</Button>
          </Stack>
        </Paper>
      </Box>
    </>
  )
}

export default Preview