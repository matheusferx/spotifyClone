import React from 'react'
import Logo from '../assets/icons/logo-spotify.png'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className="sidebar">
        <nav className="sidebar__navigation">
            <div className="logo">
                <Link to="/">
                    <img src={Logo} alt="Logo" />
                </Link>
            </div>
            <ul>
                <li>
                    <Link to="/">
                        <span className="fa fa-home"></span>
                        <span>Início</span>
                    </Link>
                </li>
                <li>
                    <Link to="/home">
                        <span className="fa fa-search"></span>
                        <span>Buscar</span>
                    </Link>
                </li>
            </ul>
        </nav>

        <div className="library">
            <div className="library__content">
                <button className="library__button">
                    <span className="fa fas fa-book"></span>
                    <span>Sua biblioteca</span>
                </button>
                <span className="fa fa-plus"></span>
            </div>

            <section className="section-playlist">
                <div className="section-playlist__content">
                    <span className="text title">Crie sua primeira playlist</span>
                    <span className="text subtitle">É fácil, vamos te ajudar.</span>
                    <button className="section-playlist__button">
                        <span>Criar playlist</span>
                    </button>
                </div>
            </section>

            <div className="cookies">
            <a href="https://www.google.com/search?sca_esv=ccddce7db33695af&q=cookies&udm=2&fbs=ABzOT_BYhiZpMrUAF0c9tORwPGlsjfkTCQbVbkeDjnTQtijddBq82CQX-xUBR9s0VVH0Uz4YZWXmkEwVISjw0MO8OaXMH1pERxdbKRpzgSVqu8KOuIGlQz5RGX0LOCG8ffAQPdryRDfzbTLD1WxFPGdw4VvfhRlD75pc1t6EewqFz-p3i-3FBXAV1tHHKgjybQEdAU_i78iNiHdqPWN6GILCYC7rGmrTrA&sa=X&ved=2ahUKEwi4sv3utMuLAxVdppUCHRMJKIgQtKgLegQIEBAB&biw=1242&bih=583&dpr=1.1" target="_blank" rel="noopener noreferrer">Cookies</a>
            </div>

            <div className="languages">
                <button className="languages__button">
                    <span className="fa fa-globe"></span>
                    <span>Português do Brasil</span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Sidebar