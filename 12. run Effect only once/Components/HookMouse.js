import React,{useState,useEffect} from 'react'

function HookMouse() {
    const [x,setX] = useState(0);
    const [y,setY] = useState(0);

    useEffect(()=>{
        console.log('useEffect called');
        window.addEventListener("mousemove",logMousePosition)
    },[]);
    const logMousePosition = (event) =>{
        console.log('Mouse event');
        setX(event.clientX);
        setY(event.clientY);
    }
  return (
    <div>useEffect,  X - {x} Y - {y}</div>
  )
}

export default HookMouse