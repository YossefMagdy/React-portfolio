import './progress.css'
// eslint-disable-next-line react/prop-types
export default function Progress({progressTitle,progressNum,colorClass}) {


  return (
    <>
            <p className="text-muted">{progressTitle}</p>
            <div className="skill-progress" >
                 <div className={`progresS-bar bg-${colorClass} text-${colorClass}`} style={{width:progressNum + '%'}}>
                    <div className='progress-text'>
                        {progressNum}%
                    </div>
                        <div className={`dot bg-${colorClass}`} ></div>
                 </div>
            </div>
    </>
  )
}
