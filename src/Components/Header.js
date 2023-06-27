import React, { useState, useEffect } from "react";

export function Header() {

  const [menuLinksData, setMenuLinksData] = useState([]);


  async function loadMenuLinksData() {
    const response = await fetch('https://aim48ho1qg.execute-api.us-east-2.amazonaws.com/Production/menu-links');

    let jsonData = await response.json();

    setMenuLinksData(jsonData);
    
  }

  useEffect(() => {
    loadMenuLinksData();
  }, []); 

  return (
      <header id="intro">
      <article className="fullheight">
        <div className="hgroup">
          <h1>Landon Hotel</h1>
          <h2>West London</h2>
          <p><a href="#welcome"><img src="https://landonhotel.com/images/misc/arrow.png" alt="down arrow" /></a></p>
        </div>
      </article>

      <nav id="nav">
        <div className="navbar">
          <div className="brand"><a href="#welcome">Landon <span>Hotel</span></a></div>
          <ul>
            {menuLinksData.map((item) => 
              <li>
                <a 
                  className= {`icon ${item.class}`} 
                  href= {item.href}>
                  <span>{item.text}</span>
                </a>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </header>
  )
}
<li><a className="icon info" href="#hotelinfo"><span>info</span></a></li>

