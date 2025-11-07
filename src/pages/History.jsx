import { Stack } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { MdDelete } from "react-icons/md";
import { IoMdArrowBack } from "react-icons/io";
import { getHistoryAPI, removeHistoryAPI } from '../services/allAPI';

function History() {
  const [allHistoryData,setAllHistoryData] = useState([])
  console.log(allHistoryData);
  
  useEffect(()=>{
    getAllHistory()
  },[])

  const getAllHistory = async ()=>{
    try{
      const result = await getHistoryAPI()
      // console.log(result);
      if(result.status==200){
        setAllHistoryData(result.data)
      }
    }catch(err){
      console.log(err);      
    }
  }

  const handleDeleteHistory = async (id)=>{
    try{
      await removeHistoryAPI(id)
      getAllHistory()
    }catch(err){
      console.log(err);      
    }
  }
  return (
    <div>
      <h2 className="text-center my-5">Downloaded Resume History</h2>
      <Link to={'/form'} className='float-end mx-5' style={{marginTop:'-80px'}}> <IoMdArrowBack/> Back</Link>
      <Stack direction={'row'}  sx={{flexWrap:'wrap',gap:'10px',m:5}}>
        {/* duplicated div */}
         {
          allHistoryData?.length>0?
            allHistoryData?.map(item=>(
              <div key={item?.id} className='shadow p-5 text-center rounded'> 
                <div className="d-flex align-items-center mb-2">
                  <h5>Review At : {item?.timeStamp}</h5>
                  <button onClick={()=>handleDeleteHistory(item?.id)} className='btn text-danger fs-4'><MdDelete/></button>
                </div>
                <img width={'250px'} height={'250px'} className='border' src={item?.imgURL} alt="resume" />
              </div>
            ))
            :
          <p>History is Not available</p>
         }
      </Stack>
    </div>
  )
}

export default History