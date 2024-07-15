import { useState } from 'react'
import './work.style.css'
import { workCardData } from '../../server/data.server'
import Workcard from '../../@theme/Components/Workcard/Workcard'
export default function Work() {
    const [workfilter,setWorkFilter]=useState('graphic Design')
    let workContent=[]
    workContent= workCardData.filter((data)=>data.categ===workfilter)
 
    function handleWorkFilter(keyword){
        setWorkFilter(keyword)
    }

    
  return (
    <section className="py-5  d-flex justify-content-center align-items-center"> 
    <div className="main-container">
      <span className='text-muted'>MY WORK</span>
        <h3 className='my-4'>RECENT WORK</h3>

        <ul className="nav nav-pills">
                        <li className="nav-item">
                            <button className={`nav-link   ${workfilter=='graphic Design' ? 'text-primary' :'text-black'}`} aria-current="page" onClick={()=>handleWorkFilter('graphic Design')} >Graphic Design</button>
                        </li>
                        <li className="nav-item">
                            <button className={`nav-link   ${workfilter=='apps' ? 'text-primary' :'text-black'}`} onClick={()=>handleWorkFilter('apps')} >Apps</button>
                        </li>
                        <li className="nav-item">
                            <button className={`nav-link   ${workfilter=='software' ? 'text-primary' :'text-black'}`} onClick={()=>handleWorkFilter('software')}>Software</button>
                        </li>
        </ul>

                <div className='row g-4 mt-2'>
                    {workContent.map((data,index)=>(
                        <div  key={index} className='col-md-6'>
                            <Workcard img={data.img} category={data.categ} title={data.title}  />
                        </div>
                    ))}
                    
                </div>

        
    </div>
  </section>
  )
}
