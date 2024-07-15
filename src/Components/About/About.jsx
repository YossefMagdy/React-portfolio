import AboutCard from '../../@theme/Components/About-card/AboutCard';
import { aboutCardData } from '../../server/data.server';
import './about.css';



export default function About() {
 
  return (
    <>
      <section className="py-5 d-flex justify-content-center align-items-center"> 
        <div className="main-container">
          <span className='text-muted'>ABOUT US</span>
            <h3 className='my-4'>WHO AM I?</h3>
            <p className='text-muted'><span className='fs-6 fw-bold'>Hi Im Jackson Ford </span> On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word (and) and the Little Blind Text should turn around and return to its own, safe country.</p>

            <p className='mt-4 text-muted'>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>


            <div className="row mt-4">
            {aboutCardData.map((data,index)=>(
              <div className="col-md-3 my-2" key={index}>
                <AboutCard icon={data.icon} style={data.style} title={data.title}  />
              </div>
            ))}
            </div>
            
        </div>
      </section>
    
    </>
  )
}
