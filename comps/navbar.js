import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import Img from '../public/vector/default-monochrome.svg'
import NavItem from "./NavItem";
// import NewSignup from '../pages/new-signups';
import Login from '../comps/login';
import Modal from '../comps/Modal';

const MENU_LIST = [
  { text: "Home", href: "/" },
  { text: "About Us", href: "/about" },
  { text: "Contact", href: "/contact" },
  {text: "Book Now", href: "/dashindex"},
];
const Navbar = () => {
  const [modal, setModal] = useState(false);
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <header>
      <nav className={`nav`}>
        <Link href={"/"}>
          <a>
           <Image src={Img} alt="" width="200px" height="35px"/>
          </a>
        </Link>
        <div
          onClick={() => setNavActive(!navActive)}
          className={`nav__menu-bar`}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={`${navActive ? "active" : ""} nav__menu-list`}>
          {MENU_LIST.map((menu, idx) => (
            <div
              onClick={() => {
                setActiveIdx(idx);
                setNavActive(false);
              }}
              key={menu.text}
            >
              <NavItem active={activeIdx === idx} {...menu} />
            </div>
          ))}
           <button className={`btn`} onClick={()=> setModal(true)}>Sign In</button>
        <Modal onClose={()=> setModal(false)}
         show={modal}>
          <Login/>
         </Modal>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;