import './experienceStyle.css';
import Experience_card from "../../@theme/Components/Experience-card/Experience_card";
import { experienceData } from '../../server/data.server';



export default function Experience() {
  return (
    <>
        <section className="py-5 d-flex justify-content-center align-items-center"> 
        <div className="main-container">
          <span className='text-muted'>EXPERIENCE</span>
            <h3 className='my-4'>WORK EXPERIENCE
            </h3>


    {experienceData.map((data,index)=> <Experience_card key={index}  title={data.title} year={data.year} descirbtion={data.desc}  penColor={data.color}   />)}
       


            
        </div>
      </section>
    </>
  )
}
