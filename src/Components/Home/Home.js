import React, { Component } from 'react'
import Character from './Character'
import './Home.css'
export default class Home extends Component {
  render() {
    return (
      <div id='HOME'>
        <section id='eddy_sec'><Character NAME={"EDDY SEED"} btnTitle={"Meet Me Nigga"}/></section>
        <section id='rishabh_sec'><Character NAME={"RISHABH JAIN"} btnTitle={"Contact Me"}/></section>  
      </div>
    )
  }
}
