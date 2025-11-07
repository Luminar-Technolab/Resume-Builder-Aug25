import commonAPI from "./commonAPI"
import serverURL from "./serverURL"

// add resume api: call in USErInputs when finish btn is clicked
export const addResumeAPI = async (resumeDetials)=>{
  return  await commonAPI("POST",`${serverURL}/resumes`,resumeDetials)
}

// view resume api :  call in viewResume, when page load - useefect
export const viewResumeAPI = async (id)=>{
  return  await commonAPI("GET",`${serverURL}/resumes/${id}`,{})
}

//update api : call by edit component when update btn clicked
export const editResumeAPI = async (id,resumeDetials)=>{
  return  await commonAPI("PUT",`${serverURL}/resumes/${id}`,resumeDetials)
}

//add history api : called by viewresume when download btn clicked
export const addHistoryAPI = async (resumeHistory)=>{
  return  await commonAPI("POST",`${serverURL}/history`,resumeHistory)
}
//get history api : called by history when it loads (useefect) in browser
export const getHistoryAPI = async ()=>{
  return  await commonAPI("GET",`${serverURL}/history`,{})
}
//remove history api : called by history when delete btn clicked
export const removeHistoryAPI = async (id)=>{
  return  await commonAPI("DELETE",`${serverURL}/history/${id}`,{})
}