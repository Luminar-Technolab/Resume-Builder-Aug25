import commonAPI from "./commonAPI"
import serverURL from "./serverURL"

// add resume api: call in USErInputs when finish btn is clicked
export const addResumeAPI = async (resumeDetials)=>{
  return  await commonAPI("POST",`${serverURL}/resumes`,resumeDetials)
}

// view resume api : 