import Draggable from "react-draggable";
import "./window.css"

export default function Window({children, width, height}) {
    const dimensions = {width, height};
    return (
         <Draggable handle=".title-bar">
             <div className="window" style={dimensions}>
                 <div className="title-bar">
                    <p>TITLE BAR</p>
                 </div>
                 {
                     children
                 }
             </div>
         </Draggable>
    )
}