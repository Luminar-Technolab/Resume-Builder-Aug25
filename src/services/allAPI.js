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