
import './workcard.style.css';
// eslint-disable-next-line react/prop-types
export default function Workcard({img,category,title}) {
  return (
    <>
      <div className="work-image-container"  style={{backgroundImage: `url(${img})`}}>
                <div className='inner-content py-4 px-3 d-flex flex-column justify-content-between'>
                      <div>
                            <h3>{title}</h3>
                            <p>Animtion</p>
                            <p >category: <span className='text-info'>{category}</span></p>
                      </div>
                      <div>
                          <button className='btn btn-light'> <i className="fa-solid fa-share-nodes"></i></button>
                          <button className='btn btn-light mx-2'> <i className="fa-regular fa-eye"></i> 100 </button>
                          <button className='btn btn-light'> <i className="fa-regular fa-heart"></i> 50</button>
                      </div>
                </div>
      </div>
    </>
  )
}
