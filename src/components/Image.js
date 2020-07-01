import React,{useState} from 'react'

function Image({className, img}){
    const [hovered, setHovered] = useState(false)
    
    return (
        <div 
        className={`${className} image-container`}
        onMouseEnter={()=> setHovered(true)}
        onMouseLeave={()=> setHovered(false)}
        >
            <img src={img.url} className='image-grid'/>
            {hovered && <>
            <i className="ri-heart-line favorite"></i>
            <i className="ri-add-circle-line cart"></i>
            </>}
        </div>
    )
}

export default Image