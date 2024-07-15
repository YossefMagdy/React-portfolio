import './experienceCard.css'
// eslint-disable-next-line react/prop-types
export default function Experience_card({title,year,descirbtion,penColor}) {
  return (
    <>
        <div className="experience-card p-5">
                    <div className='exp-content p-3'>
                            <h5>{title} <span className='ms-3 text-secondary fs-5'>{year}</span></h5>
                            <p className='text-secondary mt-3'>
                                {descirbtion}
                            </p>
                    </div>
                    <div className={`icon ${penColor}`}><i className="fa-solid fa-pen"></i></div>
        </div>
    </>

  )
}
