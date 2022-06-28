// import React from 'react'
import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from "@material-ui/icons";
import { useState } from "react";
import { useRef } from "react";
import ListItem from "../listItem/ListItem";
import "./list.scss";

export default function List({list}) {

    const [isMoved, setIsMoved ] = useState(false);
    const [slideNumber , setSlideNumber] = useState(0);

    const listRef = useRef()

    const handleClick = (direction) => {
        
        let distance = listRef.current.getBoundingClientRect().x-50;
       
        if(direction==="left" && slideNumber>0){
            // if(slideNumber === 1){
            //     setIsMoved(false);
            // My logic
            // }
            setSlideNumber(slideNumber-1);
            listRef.current.style.transform =  `translateX(${230+distance}px)`;
        }
        
        if(direction==="right" && slideNumber < 5){
            setIsMoved(true);
            setSlideNumber(slideNumber+1);
            listRef.current.style.transform =  `translateX(${-230+distance}px)`;
        }
        // console.log(distance);
    }

  return (
    <div className="list">
        <span className="listTitle">{list.title}</span>
        <div className="wrapper">
            <ArrowBackIosOutlined className="sliderArrow left" onClick={()=>handleClick("left")} style={{display : !isMoved && "none"}} />
            <div className="container" ref={listRef}>
              {list.content.map((item,i) =>{
                <ListItem index={i} item={item} />
              })}
            </div>
            <ArrowForwardIosOutlined className="sliderArrow right"  onClick={()=>handleClick("right")}/>
        </div>
    </div>
  )
}
