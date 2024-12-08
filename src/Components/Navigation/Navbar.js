import React, { Component } from 'react'
import './Navigation.css'
import data from '../Theme.json'
export default class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navbar_height: 0
        }
    }
    componentDidMount() {
        const navElement = document.getElementById('NAVBAR');
        const navHeightPx = Math.round(parseFloat(window.getComputedStyle(navElement).height));
        const viewportHeight = window.innerHeight;
        const navHeightVh = (navHeightPx / viewportHeight) * 100;
        navElement.style.backgroundColor = data.primary.black
        navElement.style.borderBottom = `1px solid rgb(255 255 255 / 50%)`
        this.setState({
            nav_height: Math.round(navHeightVh)
        }, () => {
            console.log(this.state.nav_height);
        });
        navElement.style.height = "8vh"
    }
    toggleMenu = () => {
        const navbar = document.getElementById('NAVBAR');
        const firstChild = navbar.firstElementChild;
        const firstSection = firstChild.querySelector('section');
        
        if (this.state.navbar_height === 8) {
            this.setState({ navbar_height: 100 }, () => {
                navbar.style.height = "100vh";
                firstChild.style.gridTemplateRows = "repeat(2, 1fr)";
                firstSection.style.gridTemplateRows = "1fr 5fr";
            });
        } else {
            this.setState({ navbar_height: 8 }, () => {
                navbar.style.height = "8vh";
                firstChild.style.gridTemplateRows = "1fr 0";
                firstSection.style.gridTemplateRows = "1fr 0";
            });
        }


    }
    render() {
        return (
            <nav className={`${this.props.animation}`} id='NAVBAR'>
                <main className={`text-[${data.primary.white}]`}>
                    <section className=' first-section'>
                        <div className=" hamburger-menu-container">
                            <section className=""></section>
                            <section className="">
                                <div className="hamburger-menu" onClick={this.toggleMenu}>
                                    <span className="bar"></span>
                                    <span className="bar"></span>
                                    <span className="bar"></span>
                                </div>
                            </section>
                        </div>
                        <div className=" nav-links-1">
                            <a href={null}>Portfolio</a>
                            <a href={null}>Get CV</a>
                        </div>
                    </section>
                    <section className=' nav-2-container'>
                        <div className="nav-links-2">
                            <a href={null}>Coffee Converters</a>
                            <a href={null}>About & Contact</a>
                        </div>
                    </section>
                </main>
            </nav>
        )
    }
}
