import React, { Component } from 'react'
import './App.css'
import Home from './Components/Home/Home'
import data from './Components/Static.json'
import Navbar from './Components/Navigation/Navbar';
export default class App extends Component {
  componentDidMount(){
    document.title = data.globalTitle;
  }
  render() {
    return (
      <div id='PARENT'>
        <Navbar 
        animation={data.animations.navigation.global}
        navLogo={data.links['navbar-site-logo']}
        links = {data.links['quick-links']}
        />
        <Home/>
      </div>
    )
  }
}
