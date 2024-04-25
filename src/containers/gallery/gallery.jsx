// Imports:
import ImageGallery from 'react-image-gallery';
import React, { useState, useEffect, useRef } from 'react'
import "./gallery.css";

import pic1 from '../../assets/IMG_3241.jpg'
import pic2 from '../../assets/PXL_20230703_004513987.jpg'
import pic3 from '../../assets/PXL_20230703_004538721.jpg'
const Gallery = () => {
  
    const gallery_ref = useRef(null);
    const [gallery, setGallery] = useState(false);
    const changeBackground = () => {
      if(window.scrollY >= 500 && window.scrollY <= 1000) {
        setGallery(true)
      }
      else if(window.scrollY < 500 && gallery) {
        setGallery(false)
      } else {
        setGallery(false)
      }
  
    }
  
  
    window.addEventListener('scroll', changeBackground)

    
    const images = [
        {
          original: pic1,
          thumbnail: pic1,
        },
        {
          original: pic2,
          thumbnail: pic2,
        },
        {
          original: pic3,
          thumbnail: pic3,
        },
    ];
    
      
    
    return (
        <div className="gallery-container" id="gallery-container">
            <div ref={gallery_ref} className={gallery ? 'gallery-container' : 'gallery-container-active'}>
            <ImageGallery additionalClass={"gallery-image"} items={images}
            showPlayButton={false} 
            showFullscreenButton={false}
            slideOnThumbnailOver={true} 
            />
            </div>
        </div>

    )

}




export default Gallery;