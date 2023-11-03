import React from "react";
import "../css/wheel.css";
import { AiFillForward } from "react-icons/ai";
import { BiPause } from "react-icons/bi";
import { BsFillPlayFill } from "react-icons/bs";
import { AiOutlineBackward } from "react-icons/ai";

class Wheel extends React.Component {
  
  render() {
    return (
      <div className="wheel-container" id="wheel-container">
        <div className="wheel" id="wheel">
          <div className="controll" id="menu">
            <div onClick={()=>this.props.clickHandler('menu')}>MENU</div>
          </div>
          <div className="controll" id="forward">
            <AiFillForward />
          </div>
          <div className="controll" id="play-pause">
            <div>
              <BsFillPlayFill />
              <BiPause />
            </div>
          </div>
          <div className="controll" id="reverse">
            <AiOutlineBackward />
          </div>
        </div>
        <div className="blank" id="blank" onClick={()=>this.props.clickHandler('select')}></div>
      </div>
    );
  }
}
export default Wheel;
