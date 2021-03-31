import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        HOME
      </a>
      <div>
      <a className="navbar-brand" href="/Saved">
        SAVED
      </a>
      </div>
    </nav>
  );
}

export default Nav;
