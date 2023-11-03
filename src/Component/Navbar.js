import React from "react";
import '../css/Navbar.css';
class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {
      time: this.getCurrentTime(),
    };
  }
  getCurrentTime() {
    const Today = new Date();
    var time = Today.getHours() + ":" + Today.getMinutes();
    if (Today.getMinutes() < 10) {
      time = Today.getHours() + ":0" + Today.getMinutes();
      // return time;
    }
    return time;
  }
  render() {
    const { time } = this.state;
    return (
      <>
        <div className="bar">
          {/* <h5 className="headig">iPod</h5> */}
          <h3 className="time">{time}</h3>

          <div className="right-container-nav">
            <img className="battery" src="https://cdn-icons-png.flaticon.com/128/664/664886.png" alt="Battery" />
          </div>
        </div>
      </>
    );
  }
}
export default Navbar;
