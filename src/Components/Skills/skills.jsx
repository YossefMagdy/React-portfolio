
import Progress from '../../@theme/Components/Progress/Progress';
import { skilldata } from '../../server/data.server';
import './skill.css';



export default function Skills() {
  return (
    <>

     <section className="py-5 d-flex justify-content-center align-items-center"> 
        <div className="main-container">
          <span className='text-muted'>MY SPECIALTY</span>
            <h3 className='my-4'>MY SKILLS</h3>
            <p className='text-muted'>The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way.</p>
    

      <div className='row'>
      {
      skilldata.map((skill,index)=>(
        <div className="col-md-6 my-2" key={index}>
          <Progress  progressTitle={skill.name} progressNum={skill.progress}  colorClass={skill.color} />
        </div>
      ))
    } 
      </div>
            
        </div>
      </section>
    
    </>
  )
}
