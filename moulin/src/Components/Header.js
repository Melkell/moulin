import React, { Component } from 'react';
import './Header.scss';
import Dehors from'./IMG_7146.JPG'
import Rentrer from'../moulinp/IMG_1838.jpg'
import PeD from '../moulinp/DSCF4161.jpg'
import Chambre from '../moulinp/moulin3/P1040508.jpg'

class Header extends Component {
    render() {
        return (
            <div>
                <header class="header" data-menustate="closed">
                    <div class="grid-item  grid-item--primary">
                        <img src={Dehors} class="object-fit" alt="dehors" />
                        <a href="#" class="logo">
                            <h1>Moulin</h1>
                        </a>
                    </div>
                    <div class="grid-item grid-item--secondary  grid-item--content">
                        <article class="article  article--align-right">
                            <h5 class="rotate rotate--right">From<br />France</h5>
                        </article>
                        <article class="article">
                            <h4><span>2005</span> <span>Présent</span></h4>
                            <h2>Notre Chambre d'Hôte</h2>
                            <p>Rendez-vous dans une chambre d'hote magnifique au bord de la mer</p>
                        </article>
                    </div>
                    <div class="grid-item grid-item--secondary">
                        <img src={Rentrer} class="object-fit" alt="chair" />
                    </div>
                    <div class="grid-item grid-item--tertiary">
                        <img src={PeD} class="object-fit" alt="chair" />
                    </div>
                    <div class="grid-item grid-item--tertiary grid-item--content">
                        <article class="article">
                            <p>Soyez le bienvenue dans votre Moulin</p>
                        </article>
                    </div>
                    <div class="grid-item grid-item--tertiary">
                        <img src={Chambre} class="object-fit" alt="chair" />
                    </div>
                </header>
            </div>

        )
    }
}

export default Header