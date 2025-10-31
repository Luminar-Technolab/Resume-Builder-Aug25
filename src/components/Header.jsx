import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Tooltip } from '@mui/material';
import { Link } from 'react-router-dom';

function Header() {
    const aboutUs = "At rBuilder, we understand that a great career starts with a great resume. Our mission is to simplify the resume creation process for students, job seekers, and professionals by providing an intuitive and user-friendly tool that helps you craft personalized, visually appealing, and ATS-friendly resumes — without the need for design or formatting skills."
  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static" sx={{backgroundColor:'purple' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
           <img width={'40px'} src="https://icon-library.com/images/resume-icon/resume-icon-16.jpg" alt="logo" />
          </IconButton>
          <Typography variant="" component="" sx={{ flexGrow: 1 }} className='fs-5'>
            <Link to={'/'} className='text-light text-decoration-none'>rBuilder</Link>
          </Typography>
          <Tooltip title={aboutUs}><Button color="inherit" >ABOUT US</Button></Tooltip>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header