import React, { Component } from 'react'
import Character from './Character'
import './Home.css'
function PseudoPageAnimations(){
  const eddy_sec = document.getElementById('eddy_sec')
  const rishabh_sec = document.getElementById('rishabh_sec')

}
export default class Home extends Component {
  state = {
    pseudoAnimationWorking: true
  }
  componentDidMount(){
    PseudoPageAnimations()
  }
  render() {
    return (
      <div id='HOME'>
        <section id='eddy_sec'><Character NAME={"EDDY SEED"} btnTitle={"Meet Me Nigga"} btnBG={"#fff"} btnFG={"#0a0a08"}/></section>
        <section id='rishabh_sec'><Character NAME={"RISHABH JAIN"} btnTitle={"Contact Me"} btnBG={"#0a0a08"} btnFG={"#fff"}/></section>  
      </div>
    )
  }
}
