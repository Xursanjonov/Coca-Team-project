import React from "react";
import { links } from "./data";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <div className="container box">
        <Logo />  
        <ul>
          {links.map((item) => (
            <Link key={item.path} to={item.path}>
              {item.name}
            </Link>
          ))}
        </ul>
      </div>
    </header>
  );
};
