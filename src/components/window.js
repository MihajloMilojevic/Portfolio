import { useEffect, useState,  } from "react";
import Draggable from "react-draggable";
import { ResizableBox } from 'react-resizable';
import useWindowDimensions from "../utils/useWindowDimensions";
import TitleBar from "./titleBar";

import "./window.css"

export default function Window({children, width, height, titleBar, show}) {
    const [dimensions, setDimension] = useState({ width: width.value, height: height.value, max: false })
    const {width: windowWidth, height: windowHeight} = useWindowDimensions();
    const [visible, setVisible] = useState(show);
    const minimaze = () => {
        setVisible(false)
    }
    const maximaze = () => {
        if(dimensions.max)
            calculateDimensions(width, height, false)
        else
            calculateDimensions(
                { value: 100,unit: "vw"},
                { value: 100,unit: "vh"},
                true
            )
    }
    const close = () => {
        setVisible(false)        
    }
    const titleBarOptions = {maximaze, minimaze, close};
    const calculateDimensions = (width, height, max) => {
        const newDimensions = {
            width: width.value,
            height: height.value,
            max
        }
        switch (width.unit) {
            case "vw":
                newDimensions.width = width.value * windowWidth / 100;
                break;
            case "vh":
                newDimensions.width = width.value * windowHeight / 100;
                break;  
            case "vmin":
                newDimensions.width = width.value * Math.min(windowHeight, windowWidth) / 100;
                break;
            case "vmax":
                newDimensions.width = width.value * Math.max(windowHeight, windowWidth) / 100;
                break;
            default:
                break;
        }
        switch (height.unit) {
            case "vw":
                newDimensions.height = width.value * windowWidth / 100;
                break;
            case "vh":
                newDimensions.height = width.value * windowHeight / 100;
                break;  
            case "vmin":
                newDimensions.height = width.value * Math.min(windowHeight, windowWidth) / 100;
                break;
            case "vmax":
                newDimensions.height = width.value * Math.max(windowHeight, windowWidth) / 100;
                break;
            default:
                break;
        }
        setDimension(newDimensions);
    }

    useEffect(() => {
        calculateDimensions(width, height, false);
    }, [width, height, windowWidth, windowHeight])

    const onDragStart = (e) => {
        let elems = document.getElementsByClassName('react-draggable');
        for(let i = 0; i < elems.length; i++) {
          elems[i].style.zIndex = 1;
          e.currentTarget.style.zIndex = 2;
        }
      }

    return (
        <>
            {
                visible &&
                <Draggable
                handle=".title-bar"
                onMouseDown={onDragStart}
                >
                    <ResizableBox
                        className="resizable-box window"
                        width={dimensions.width}
                        height={dimensions.height}
                        handle={(h, ref) => <span className={`custom-handle`} ref={ref} />}
                        handleSize={[8, 8]}
                        resizeHandles={['se']}
                    >
                        <>
                            <div style={{width: "100%"}}>
                                <TitleBar {...titleBarOptions}/>
                            </div>
                            <div style={{width: "100%", objectFit: "cover"}}>
                                {children}
                            </div>
                        </>
                    </ResizableBox>
                </Draggable>
            }
        </>
    )
}
      