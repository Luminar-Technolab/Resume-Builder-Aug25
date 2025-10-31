//rfce
import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      {/* landing section */}
      <div style={{height:'100vh',backgroundImage:'url("https://assets.kpmg.com/is/image/kpmg/id-intern-gather-discussion-banner:cq5dam.web.2000.500")',backgroundSize:'cover',backgroundPosition:'center',backgroundAttachment:'fixed'}} className="d-flex justify-content-center align-items-center">
        <div className="row container-fluid">
          <div className="col-md-4"></div>
          <div className="col-md-4 rounded shadow p-5 text-center" style={{backgroundColor:'rgba(255,255,255,0.6)'}}>
            <h3>Designed to get hired.
              Your skills, your story, 
              your next job — all in one.</h3>
            <Link to={'/resume'} className='btn text-light' style={{backgroundColor:'purple'}}>Make Your Resume</Link>
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
      {/* Tools */}
      <div className='container'>
        <h1 className="text-center my-5">Tools</h1>
        <div className="row align-items-center">
          <div className="col-md-1"></div>
          <div className="col-md-5 ">
            <h5>Resume</h5>
            <p>Create unlimited new resumes and easily edit them afterwards.</p>
            <h5>Cover Letters</h5>
            <p> Easily write professional cover letters.</p>
            <h5>Jobs</h5>
            <p>Automatically receive new and relevant job postings.</p>
            <h5>Applications</h5>
            <p>Effortlessly manage and track your job applications in an organized manner.</p>
          </div>
          <div className="col-md-6">
            <img className='w-75' src="https://cdn-images.zety.com/images/zety/landings/builder/resume-builder-jumbotron-image@3x.png" alt="resume" />
          </div>
        </div>
      </div>
      {/* pics */}
      <div style={{height:'80vh',backgroundImage:'url("https://www.discuss.io/wp-content/uploads/2022/07/shutterstock_1503919103-2048x1152.jpg")',backgroundSize:'cover',backgroundPosition:'top',backgroundAttachment:'fixed'}} >
      </div>
      {/* Testimony */}
<div className='container my-5'>
        <h1 className="text-center mb-4">Testimony</h1>
        <div className="row align-items-center">
          <div className="col-md-1"></div>
          <div className="col-md-5 ">
            <h4 className='mb-5'>Trusted by professionals worldwide.</h4>
            <p>At LiveCareer, we don't just help you create résumés — we help you land the job. Whether you're a seasoned professional or just starting out, our tools are designed to get results.</p>
            <p> In fact, users who used LiveCareer reported getting hired an average of 48 days faster.</p>
            <p>Join thousands of job-seekers who’ve fast-tracked their careers with a résumé that truly stands out.</p>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-5">
            <div className="row ">
              <div className="col-md-3">
                 <img className='w-100' src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid1.png" alt="user" />
              </div>
            <div className="col-md-3">
                 <img className='w-100' src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid7.png" alt="user" />
              </div>
              <div className="col-md-3">
                 <img className='w-100' src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid2.png" alt="user" />
              </div>
              <div className="col-md-3">
                 <img className='w-100' src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid3.png" alt="user" />
              </div>

            </div>
            <div className="row my-4">
              <div className="col-md-3">
                 <img className='w-100' src="https://img.freepik.com/premium-photo/happy-man-ai-generated-portrait-user-profile_1119669-1.jpg" alt="user" />
              </div>
            <div className="col-md-3">
                 <img className='w-100' src="https://tse3.mm.bing.net/th/id/OIP.2i5UaEHaQM3PYAYXQyM1AAAAAA?pid=Api&P=0&h=180" alt="user" />
              </div>
              <div className="col-md-3">
                 <img className='w-100' src="https://img.freepik.com/premium-photo/girl-happy-portrait-user-profile-by-ai_1119669-10.jpg" alt="user" />
              </div>
              <div className="col-md-3">
                 <img className='w-100' src="https://www.profilebakery.com/wp-content/uploads/2023/04/Profile-Image-AI.jpg" alt="user" />
              </div>
              
            </div>
            <div className="row">
              <div className="col-md-3">
                 <img className='w-100' src="https://writestylesonline.com/wp-content/uploads/2018/11/Three-Statistics-That-Will-Make-You-Rethink-Your-Professional-Profile-Picture-1024x1024.jpg" alt="user" />
              </div>
            <div className="col-md-3">
                 <img className='w-100' src="https://i.pinimg.com/originals/07/33/ba/0733ba760b29378474dea0fdbcb97107.png" alt="user" />
              </div>
              <div className="col-md-3">
                 <img className='w-100' src="https://tse3.mm.bing.net/th/id/OIP.wPWx97qT9JbAIeh4t6TDVQHaHa?pid=Api&P=0&h=180" alt="user" />
              </div>
              <div className="col-md-3">
                 <img className='w-100' src="https://tse2.mm.bing.net/th/id/OIP.4oYqJqInuQd2TAlPPdggLgHaHa?pid=Api&P=0&h=180" alt="user" />
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home