import React from 'react'
import './Navbar.css'


const Navbar = () => {
  return (
    <body>
      <div>
          <nav>
            <a class="logo" >Pokedex</a>
            <div id="mobile-menu">
              <div id="line1"></div>
              <div id="line2"></div>
              <div id="line3"></div>
            </div>
            <ul class="nav-list">
              <li><a href="">Inicio</a></li>
              <li><a href="">Sobre</a></li>
              <li><a href="">Projetos</a></li>
              <li><a href="">Contatos</a></li>
            </ul>
            <div id="searchDiv">
              <img id="searchLogo"src="https://static.vecteezy.com/system/resources/previews/011/947/136/non_2x/silver-search-icon-free-png.png"></img>
            <input class="searchBar" type="text" placeholder=""></input>
            </div>
          </nav>
      </div>
    </body>
  )
}

export default Navbar