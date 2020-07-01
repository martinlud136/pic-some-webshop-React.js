import React,{useState, useContext} from 'react'
import {Context} from '../Context'

function Image({className, img}){
    const [hovered, setHovered] = useState(false)
    const {toggleFavorite} = useContext(Context)
    return (
        <div 
        className={`${className} image-container`}
        onMouseEnter={()=> setHovered(true)}
        onMouseLeave={()=> setHovered(false)}
        >
            <img src={img.url} className='image-grid'/>
            {hovered && <>
            <i className="ri-heart-line favorite" onClick={()=> toggleFavorite(img.id)}></i>
            <i className="ri-add-circle-line cart"></i>
            </>}
        </div>
    )
}

export default Image