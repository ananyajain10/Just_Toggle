import React from 'react'
import './style.css'
export default function Boxes(props){
    const styles = {
        backgroundColor : props.on ? "rgb(8, 0, 0)" : "rgba(255, 255, 255, 0.735)"}
    return <div  style = {styles} className='box' onClick={props.toggle}>
        
    </div>  
}