import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import smallLeft from '../assets/icons/small-left.png'
import smallRight from '../assets/icons/small-right.png'
import search from '../assets/icons/search.png'

const Header = () => {
  const [searchValue, setSearchValue] = useState('')
  const navigate = useNavigate()

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value)
  }

  const handleBackClick = () => {
    navigate(-1)
  }

  const handleForwardClick = () => {
    navigate(1)
  }

  return (
    <nav className="header__navigation">
      <div className="navigation">
        <button className="arrow-left" onClick={handleBackClick}>
          <img src={smallLeft} alt="" />
        </button>
        <button className="arrow-right" onClick={handleForwardClick}>
          <img src={smallRight} alt="" />
        </button>

        <div className="header__search">
          <img src={search} alt="" />
          <input id="search-input" maxLength="800" autoCorrect="off" autoCapitalize="off" spellCheck="false"
            placeholder="O que você quer ouvir?" value={searchValue}
            onChange={handleSearchChange}/>
        </div>
      </div>

      <div className="header__login">
        <button className="subscribe">Inscreva-se</button>
        <button className="login">Entrar</button>
      </div>
    </nav>
  )
}

export default Header