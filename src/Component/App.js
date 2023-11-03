import Display from "./Display";
import Wheel from "./Wheel";
import React from "react";
import ZingTouch from "zingtouch";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      active: 0,
      menuState: 0,
      selectedMenuName: "",
      menuItems: [
        {
          id: 1,
          name: "Cover Flow",
          isActive: true,
        },
        {
          id: 2,
          name: "Music",
          isActive: false,
        },
        {
          id: 3,
          name: "Games",
          isActive: false,
        },
        {
          id: 4,
          name: "Settings",
          isActive: false,
        },
      ],
    };
  }
  componentDidMount() {
    let zt = new ZingTouch.Region(document.body);
    let myElement = document.getElementById("wheel");
    zt.bind(
      myElement,
      "rotate",
      (e) => {
        // console.log("my Angle", e.detail.angle, e.detail.distanceFromLast);
        let menuId = 0;
        if (e.detail.angle > 0 && e.detail.angle <= 90) {
          menuId = 1;
        } else if (e.detail.angle > 90 && e.detail.angle <= 180) {
          menuId = 2;
        } else if (e.detail.angle > 180 && e.detail.angle <= 270) {
          menuId = 3;
        } else if (e.detail.angle > 270 && e.detail.angle <= 360) {
          menuId = 4;
        }
        if (menuId > 0) {
          let menus = this.state.menuItems;
          menus = menus.map((item) => {
            item.isActive = false;
            if (item.id === menuId) {
              item.isActive = true;
            }
            return item;
          });
          this.setState({ menuItems: menus });
        }
      },
      false
    );
  }
  handleWheelClick = (btnType) => {
    let i = 0;
    if (btnType === "select") {
      i = 1;
      let selectedMenu = this.state.menuItems.filter(
        (item) => item.isActive === true
      );
      this.setState({ selectedMenuName: selectedMenu[0].name });
    }
    this.setState({ menuState: i });
  };
  render() {
    return (
      <>
        <Display
          allData={this.state}
          menuItem={this.state.menuItems}
          menuState={this.state.menuState}
          selectedMenuName={this.state.selectedMenuName}
        />
        <Wheel clickHandler={this.handleWheelClick} />
      </>
    );
  }
}
export default App;
