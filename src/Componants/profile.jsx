import React from 'react'
import { useEffect } from 'react'
import {useNavigate} from "react-router-dom"


const Profile = () => {
  const Navigation = useNavigate()

  const callAbout=async(req,res)=>{
    try{
      const token = localStorage.getItem('token')

      await fetch("http://localhost:8080/api/about",{
      method:"GET",
      headers:{
        Accept:"application/json",
        "Content-Type":"application/json",
        Authorization: `Bearer ${token}`
      }
    }).then((res)=>res.json())
    .then((data)=>{
      if(data.status==="failed"){
        Navigation("/login")
      }else{
        Navigation("/about")
      }
    })

    }catch(err){
      Navigation("/login")
    }
  }


  useEffect(()=>{
    callAbout()
  },[])

  // const data = {
  //   "name":"nikhil Babhulkar",
  //   "age":22
  // }
  return (
    // <div>
    //   {/* <Navigation access={data}/> */}
    // <section>
    // {/* <div className='form-content'>
    //     <div className='container user-profile'>
    //       <form method=''>
    //         <div className='row'>

    //           <div className='col-md-4'>
    //           <div className='profile-img'><img src={require('../Static/Images/img.png')} alt="user-img"></img></div>
                 
    //           </div>

    //           <div className='col-md-6'>
    //              <div className='profile-head'>
    //                <h5>User-1</h5>
    //                <h6>A Student</h6>
    //                <p id='para'>Hello guys! I'm a front-end developer as well as java enthusiast. I am kind of social person. I love listening to music..</p>
    //              </div>
    //           </div>
            
    //            <button className='profile-edit-btn' name='btnAddMore' value="Edit Profile">Edit Profile</button>
    //          </div>

  

    //         <div className='row'>
    //           <div className='col-md-4'>
    //            <div className='profile-work'>
    //              <p>Links</p>
    //               <a href=''>Instagram</a><br></br>
    //               <a href=''>Youtube</a><br></br>
    //               <a href=''>GitHub</a><br></br>
    //               <a href=''>Facebook</a><br></br>
    //               <a href=''>Twitter</a><br></br>
    //               <a href=''>LinkedIn</a><br></br>
    //            </div>
    //           </div>
    //           <div className='col-md-8 pl-5 about-info'>
    //             <div className='tab-content profile-tab' id='myTabContent'>
    //               <div className='tab-pane fade show active' id='home' role='tabpanel'>
    //                 <div className='row'>
    //                   <h1 className='heading-about'>About</h1>
    //                   <div className='col-md-6'>
    //                     <label htmlFor='User ID'>User ID</label>
    //                   </div>
    //                   <div className='col-md-6'>
    //                     <p>0276612548327</p>
    //                   </div>
    //                   <div className='col-md-6'>
    //                     <p>Name</p>
    //                   </div>
    //                   <div className='col-md-6'>
    //                     <p>User-Name</p>
    //                   </div>
    //                   <div className='col-md-6'>
    //                     <p>Email</p>
    //                   </div>
    //                   <div className='col-md-6'>
    //                     <p>abc@gmail.com</p>
    //                   </div>
    //                   <div className='col-md-6'>
    //                     <p>Phone</p>
    //                   </div>
    //                   <div className='col-md-6'>
    //                     <p>9743548327</p>
    //                   </div>
    //                   <div className='col-md-6'>
    //                     <p>College</p>
    //                   </div>
    //                   <div className='col-md-6'>
    //                     <p>SSGMCE</p>
    //                   </div>
                      

    //                 </div>
    //               </div>
    //             </div>
    //           </div>

    //         </div>
    //       </form>
    //     </div>
    // </div>
    // </section> */}
    // </div>
    <>
    <h1>This is an  About page</h1>
    </>
  )
}

export default Profile