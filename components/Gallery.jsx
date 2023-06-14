"use client"
import { useState } from 'react'
import Image from 'next/image'
import { BsChevronRight,BsChevronLeft} from "react-icons/bs";
import { ImCancelCircle } from "react-icons/im";



const WSPGallery = ({data}) => {

  const [slideNumber, setSlideNumber] = useState(0)
  const [openModal, setOpenModal] = useState(false)

  const handleOpenModal = (index) => {
    setSlideNumber(index)
    setOpenModal(true)
  }

  // Close Modal
  const handleCloseModal = () => {
    setOpenModal(false)
  }

  // Previous Image
  const prevSlide = () => {
    slideNumber === 0 
    ? setSlideNumber( data.length -1 ) 
    : setSlideNumber( slideNumber - 1 )
  }

  // Next Image  
  const nextSlide = () => {
    slideNumber + 1 === data.length 
    ? setSlideNumber(0) 
    : setSlideNumber(slideNumber + 1)
  }

  return (
    <div>

      {openModal && 
        <div className='sliderWrap'>
          <ImCancelCircle className='btnClose' onClick={handleCloseModal}  />
          <BsChevronLeft  className='btnPrev' onClick={prevSlide} />
          <BsChevronRight className='btnNext' onClick={nextSlide} />
          <div className='fullScreenImage'>
            <Image quality={100} src={data[slideNumber].image} alt='' />
          </div>
        </div>
      }

      {/* <br />
      Current slide number:  {slideNumber}
      <br />
      Total Slides: {data.length}
      <br /><br /> */}

      <div className='galleryWrap'>
        {
          data && data.map((el, index) => {
            return(
              <div 
                className='single' 
                key={index}
                onClick={ () => handleOpenModal(index) }
              >
                <Image quality={100} className='img'src={el.image} alt='' />
              </div>
            )
          })
        }
      </div>

    </div>
  )
}

export default WSPGallery