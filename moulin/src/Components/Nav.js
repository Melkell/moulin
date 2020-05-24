import React, { Component } from 'react';



import './Nav.scss';

class Nav extends Component {



    render() {
        return (
            <div>
                <button className="nav-toggle" data-menustate="closed">
                    <svg className="icon icon--menu" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
                    </svg>
                    <svg className="icon icon--close" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                        <path d="M0 0h24v24H0z" fill="none" />
                    </svg>
                </button>
                <nav className="nav" data-state="closed">
                    <a href="#" id="nav1" >About</a>
                    <a href="#" id="nav2" >Studio</a>
                    <a href="#" id="nav3" >Products</a>
                    <a href="#" id="nav4" >Contact</a>
                </nav>


                <div className="loading-overlay">
                    <span className="loading-overlay__content h1">Le moulin</span>
                </div>
            </div>
        );
    }
}

export default Nav;
