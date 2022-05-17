import React, { useEffect, useRef, useState } from 'react'
import styles from './alert.module.css'
const Alert = () => { 
    const [isDrawing, setIsDrawing] = useState(false)
    const canvasRef = useRef(null);
    const contextRef = useRef(null);

    useEffect(() =>{
        
        const canvas = canvasRef.current;
        canvas.width = 1444;
        canvas.height = 895.5;
        const context = canvas.getContext("2d");
        // làm tròn các đầu
        // context.drawImage(
        //     canvas, 0,0,50,50
        // )
        context.lineCap = "round";
        context.strokeStyle = "red";
        // độ tròn của vòng
        // context.moveTo(20, 20);
        // context.lineTo(100, 100)
        // context.fillCap = "round";
       
        context.fillStyle = 'red';
        context.fillRect(690, 460, 50, 50);
        
        context.lineWidth = 50;
        contextRef.current = context;
    },[])
    

    const startDrawing = ({nativeEvent}) => {
          const {offsetX, offsetY} = nativeEvent;
          console.log(nativeEvent);
          contextRef.current.beginPath();
        
          contextRef.current.moveTo(offsetX,offsetY);
          contextRef.current.lineTo(offsetX,offsetY);
          contextRef.current.stroke();
          setIsDrawing(true);
          nativeEvent.preventDefault();
    }


    const draw = (nativeEvent) => {
        if(!isDrawing) {
            return;
        }
        const {offsetX, offsetY} = nativeEvent;
        //contextRef.current.fillRect(offsetX,offsetY);
        contextRef.current.stroke();
        nativeEvent.preventDefault();
    }

    const stopDrawing = () => {
        contextRef.current.closePath();
        setIsDrawing(false)
    }



  return (
    <div>
        <canvas className={styles.alert}
         ref={canvasRef}
         onMouseDown={startDrawing}
         onMouseMove= {draw}
         onMouseUp={stopDrawing}
        >
        </canvas>
        {/* <div className={styles.canvas}></div> */}
    </div>
  )
}

export default Alert