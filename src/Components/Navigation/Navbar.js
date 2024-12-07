import React, { Component } from 'react'
import './Navigation.css'
export default class Navbar extends Component {
    render() {
        return (
            <nav className={`${this.props.animation}`} id='NAVBAR'>
                <section>
                    <div style={{ backgroundImage: `url('${this.props.navLogo}')` }}></div>
                    <div className="text-white space-x-2 font-semibold">
                        <a href="#_" className='active-nav-anime'>home</a>
                        <a href="#_">Coffee Converters</a>
                    </div>
                    <div className=''>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </section>
                <section className="">
                    <div className="space-x-2 font-bold">
                        <a href="#" className=''>Get CV</a>
                        <a href="#">Contact</a>
                    </div>
                    <div className="">
                        <section className=" space-x-5 text-xl flex items-center justify-center">
                            <a href={this.props.links.anchor1.link} target='__blank'><i className={`${this.props.links.anchor1.class} font-bold`}></i></a>
                            <a href={this.props.links.anchor2.link} target='__blank'><i className={`${this.props.links.anchor2.class} font-bold`}></i></a>
                        </section>
                    </div>

                </section>
            </nav>
        )
    }
}
