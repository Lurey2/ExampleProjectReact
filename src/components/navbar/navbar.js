import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.scss";

import { IconButton } from "@material-ui/core";
import DehazeIcon from "@material-ui/icons/Dehaze";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import { Sidedrawer } from "../sidedrawer/sidedrawer";
export function NavbarDesktop() {
  return (
    <div>
      <div
        className="flex p-2  shadow bg-white  items-center  fixed left-0 top-0 z-30 w-full  nav_router_link "
        style={{ height: "8vh" }}
      >
        <NavLink to="/home" className="link-router">
          Home
        </NavLink>
        <span className="flex-auto" />
        <div className="  list-link ">
          <NavLink to="/contacto" className="link-router">
            Contacto
          </NavLink>
          <NavLink to="/acerca" className="link-router">
            Acerca
          </NavLink>
          <NavLink to="/login" className="link-router">
            {" "}
            Login
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export function NavbarMovile() {
  const sideDraw = useRef(null);

  const handledOpenSideward = () => sideDraw.current.openSideward();
  const handledCloseSideward = () => sideDraw.current.closeSideward();

  return (
    <div>
      <div
        className="flex p-2 bg-gray-900  items-center text-white fixed left-0 top-0 z-30 w-full  "
        style={{ height: "8vh" }}
      >
        <NavLink to="/">Home</NavLink>
        <span className="flex-auto" />
        <IconButton
          aria-label="delete"
          onClick={handledOpenSideward}
          className="outline-none"
          size="small"
        >
          <DehazeIcon fontSize="inherit" className="text-white" />
        </IconButton>
      </div>
      <Sidedrawer ref={sideDraw}>
        <div className="w-full h-full bg-blue-400 relative ">
          <div className="flex  p-1  ">
            <h1 className="text-xl font-sans  ">SOY PROGRAMADOR</h1>
            <span className="flex-1" />
            <IconButton
              aria-label="delete"
              onClick={handledCloseSideward}
              size="small"
            >
              <HighlightOffIcon />
            </IconButton>
          </div>
          <hr className="border-white" />
          <div>
            <LinkNavbarSidewar />
          </div>
        </div>
      </Sidedrawer>
    </div>
  );
}

const LinkNavbarSidewar = () => {
  return (
    <div className="flex flex-col">
      <NavLink to="/home" className="font-medium text-xl pl-1 text-white">
        Home
      </NavLink>
      <NavLink to="/contacto" className="font-medium text-xl pl-1 text-white">
        Contacto
      </NavLink>
      <NavLink to="/acerca" className="font-medium text-xl pl-1 text-white">
        Acerca
      </NavLink>
      <NavLink to="/login" className="font-medium text-xl pl-1 text-white">
        Login
      </NavLink>
    </div>
  );
};
