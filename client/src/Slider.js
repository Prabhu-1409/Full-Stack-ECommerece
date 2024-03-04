import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";
import './Slider.css'
import Home from './Home';
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { makeStyles } from '@material-ui/styles'
import {Carousel, carousel} from 'react-carousel-minimal' 
import left from './Arrows/left.png'
import right from './Arrows/right.png'

function Slider() {
    const [slider , setslider] = useState([])
    var [index , setindex] = useState(0)

    const prev = ()=>{
      setindex(index === 0 ? slider.length-1 : index - 1)
    }
    const next = () =>{
      setindex(index === slider.length-1 ? 0 : index + 1)
    }
    //const nextslide= () =>{
      //  setslide(slide === slider.length - 1 ? 0 : slide + 1 ) 
    //}

    //const prevslide= () =>{
      //  setslide(slide === 0 ? slider.length - 1 : slide - 1)
    //}

    useEffect(()=>{
        Axios.get('http://localhost:3001/api/sliderdata').then((info)=>{
            setslider(info.data)
            console.log(info.data)
        })
    },[])
    //console.log(slider)
  return (
    <div className='slide'>
     <img src={left} className='indicators-left' onClick={prev}></img>
      {slider && slider.map((img,i)=>{
        return<React.Fragment>
        <img src={`http://localhost:3001/${img.file}`} alt='slider-image' key={i} className={index===i ? `slider`:`slider-not`}></img>
        <h2 key={i} className={index===i ? `details`:`details details-not`}>{img.details}</h2>
        </React.Fragment>
      })}
      <img src={right} className='indicators-right' onClick={next}></img>
    </div>
  )
}

export default Slider
