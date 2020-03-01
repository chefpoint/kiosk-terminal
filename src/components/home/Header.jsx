/* * */
/* IMPORTS */
import React from "react";

import logo from "../elements/chefpoint-logo.jpg";

/* * */
/* * * * */
class Header extends React.Component {
  render() {
    return (
      <div className="mt-5 mb-3 text-center">
        <img
          className="cursor-pointer"
          src={logo}
          width={280}
          alt="chefpoint-logo"
          onClick={() => (window.location = "/")}
        />
      </div>
    );
  }
}

/* * */
export default Header;
