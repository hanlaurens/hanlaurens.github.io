import React, { Component } from 'react'
import './Home.css'
export default class Character extends Component {
  render() {
    return (
      <div className='side'>
        <div>
            <section>
                <header><span>{this.props.NAME}</span></header>
            </section>
            <section className='flex items-center'>
                <div>Passionate Programmer</div>
                <div>Artificial Intellgence Enthusiast</div>
                <div>Coffee Lover</div>
            </section>
        </div>
        <div>
            <section>
                <p>Someday there’s a time in Japan where the sky rises with robots and auto bots.</p>
            </section>
            <section>
                <button className={`bg-[${this.props.btnBG}] text-[${this.props.btnFG}]`}>{this.props.btnTitle}</button>
            </section>
        </div>
      </div>
    )
  }
}
