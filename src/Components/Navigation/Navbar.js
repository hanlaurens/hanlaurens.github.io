import React, { Component } from 'react'
import './Navigation.css'
export default class Navbar extends Component {
    render() {
        return (
            <nav className={`${this.props.animation}`} id='NAVBAR'>
                <main>
                    <section className='m'>
                        <div className="m grid">
                            <section className="f"></section>
                            <section className="f"></section>
                        </div>
                        <div className="f"></div>
                    </section>
                    <section className='m'>
                        <div className=""></div>
                    </section>
                </main>
            </nav>
        )
    }
}
