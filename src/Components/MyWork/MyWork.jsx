import React from 'react'
import "./mywork.css"
import Services_Data from "../../assets/services_data"


const MyWork = () => {
  return (
    <div className="services">
      <div className="services-title">
        <h2>My <span className='highlight_bg'>work</span></h2>
      </div>
      <div className="services-container">
        {Services_Data.map((service, index)=>{
           return <div className='services-format' key={index}>
             <h4>{service.s_no}</h4>
             <h3 className='highlight_bg'>{service.s_name}</h3>
             <p>{service.s_desc}</p>
           </div>
        })}
      </div>
    </div>
  )
}

export default MyWork
