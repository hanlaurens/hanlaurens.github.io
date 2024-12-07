import React, { Component } from 'react'; 
import Character from './Character';
import './Home.css';
import 'animate.css';
import data from '../Static.json';
import pallete from '../Theme.json';

const ed = data.profiles[0];
const rj = data.profiles[1];

export default class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      home: '',
      eddy_sec: '',
      rishabh_sec: ''
    };
  }

  componentDidMount() {
    const home_par = document.getElementById('HOME');
    const eddySec = document.getElementById('eddy_sec');
    const rishabhSec = document.getElementById('rishabh_sec');

    this.setState({
      home: home_par,
      eddy_sec: eddySec,
      rishabh_sec: rishabhSec
    });
  }

  eventEddyClicked = () => {
   
    
  };

  eventRishabhClicked = () => {
    console.log(this.state.rishabh_sec);
  };

  render() {
    return (
      <div id="HOME">
        <section id="eddy_sec" className={`bg-[${pallete.primary.black}] text-[${pallete.primary.white}] `}>
          <Character
            NAME={ed.name}
            btnTitle={ed.buttonText}
            skillSet={ed.skils}
            BG={pallete.primary.white}
            FG={pallete.primary.black}
            bio={ed.bio}
            skillFun={this.eventEddyClicked}
            fontBold={false}
            animation={data.animations.home.eddy_sec}
            btnLink={ed.buttonLink}
          />
        </section>
        <section id="rishabh_sec" className={`bg-[${pallete.primary.white}] text-[${pallete.primary.black}]`}>
          <Character
            NAME={rj.name}
            btnTitle={rj.buttonText}
            skillSet={rj.skils}
            BG={pallete.primary.black}
            FG={pallete.primary.white}
            bio={rj.bio}
            skillFun={this.eventRishabhClicked} 
            fontBold ={true} 
            animation={data.animations.home.rishabh_sec}
            btnLink={rj.buttonLink}
          />
        </section>
      </div>
    );
  }
}
