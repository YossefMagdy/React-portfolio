import './aboutCard.css'
// eslint-disable-next-line react/prop-types
export default function AboutCard({style,icon,title}) {
  return (
   <>
                <div className={`about-card ${style}`}>
                            <i className={` ${icon}  fa-2x`}></i>
                            <p className='my-3 text-black'>{title}</p>
                </div>
   </>
  )
}



