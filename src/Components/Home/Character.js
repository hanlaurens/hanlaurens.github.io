import React, { Component } from 'react'
import './Home.css'
import 'animate.css'
export default class Character extends Component {
  render() {
    return (
      <div id='charSide' className={``}>
        <main className=''>
          <div className=''>
            <section className=''>
              <header><span className={`${this.props.animation}`}>{this.props.NAME}</span></header>
            </section>
            <section className={` flex items-center ${this.props.fontBold ? 'font-semibold' : ''} ${this.props.animation}`}>
              <div>{this.props.skillSet.one}</div>
              <div>{this.props.skillSet.two}</div>
              <div>{this.props.skillSet.three}</div>
            </section>
          </div>
          <div className=''>
            <section>
              <p className={` ${this.props.animation} ${this.props.fontBold ? 'font-semibold' : ''}`}>{this.props.bio}</p>
            </section>
            <section className=''>
              <a
                href={this.props.btnLink}
                onClick={this.props.skillFun}
                className={`bg-[${this.props.BG}] text-[${this.props.FG}] ${this.props.animation} inline-block px-4 py-2 rounded`}
              >
                {this.props.btnTitle}
              </a>

            </section>
          </div>
        </main>
      </div>
    )
  }
}
