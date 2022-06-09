import './ExploreContainer.css';
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import { useState } from 'react';

interface ContainerProps { }

export default function ExploreContainer() {
  
  const [timer1,_timer1] = useState(true);
  const [timer2,_timer2] = useState(false);
  const [timer3,_timer3] = useState(false);
  const [timer4,_timer4] = useState(false);
  const [timer5,_timer5] = useState(false);
  const [timer6,_timer6] = useState(false);
  const [timer7,_timer7] = useState(false);
  const [timer8,_timer8] = useState(false);
  const [timer9,_timer9] = useState(false);
  const [timer10,_timer10] = useState(false);
  const [timer11,_timer11] = useState(false);
  const [timer12,_timer12] = useState(false);

  let size = 260;
  let padding = 30;

  let audio = new Audio("/horn.wav")


   


  return (
    <>
    
    <div style={{padding:padding, display: 'inline-block'}}>
      <CountdownCircleTimer
         key="timer1"

    isPlaying={timer1}
    size={size}
    duration={300}
    colors={['#004777', '#F7B801', '#A30000', '#A30000']}
    colorsTime={[120, 60, 30, 0]}
    onComplete={()=>{
      _timer2(true)
      audio.play()
    }}
  >
    {({ remainingTime }) => 
    <span style={{textAlign:"center"}}>
      <h1>Intro</h1>
      {Math.floor(remainingTime / 60)}:{remainingTime % 60 < 10 ? "0" + remainingTime % 60 : remainingTime % 60}
    </span>}
  </CountdownCircleTimer>
    </div>
    

    <div style={{padding:padding, display: 'inline-block'}}>
      <CountdownCircleTimer
         key="timer2"

    isPlaying={timer2}
    size={size}
    duration={300}
    colors={['#004777', '#F7B801', '#A30000', '#A30000']}
    colorsTime={[120, 60, 30, 0]}
    onComplete={()=>{
      _timer4(true)
      audio.play()
    }}
  >
    {({ remainingTime }) => 
    <span style={{textAlign:"center"}}>
      <h1>Maxwell</h1>
      {Math.floor(remainingTime / 60)}:{remainingTime % 60 < 10 ? "0" + remainingTime % 60 : remainingTime % 60}
    </span>}
  </CountdownCircleTimer>
    </div>

    <div style={{padding:padding, display: 'inline-block'}}>
      <CountdownCircleTimer
         key="timer4"

    isPlaying={timer4}
    size={size}
    duration={300}
    colors={['#004777', '#F7B801', '#A30000', '#A30000']}
    colorsTime={[120, 60, 30, 0]}
    onComplete={()=>{
      _timer5(true)
      audio.play()
    }}
  >
    {({ remainingTime }) => 
    <span style={{textAlign:"center"}}>
      <h1>Maxwell <br/>Q/A</h1>
      {Math.floor(remainingTime / 60)}:{remainingTime % 60 < 10 ? "0" + remainingTime % 60 : remainingTime % 60}
    </span>}
  </CountdownCircleTimer>
    </div>


    <div style={{padding:padding, display: 'inline-block'}}>
      <CountdownCircleTimer
         key="timer5"

    isPlaying={timer5}
    size={size}
    duration={60}
    colors={['#004777', '#F7B801', '#A30000', '#A30000']}
    colorsTime={[120, 60, 30, 0]}
    onComplete={()=>{
      _timer6(true)
      audio.play()
    }}
  >
    {({ remainingTime }) => 
    <span style={{textAlign:"center"}}>
      <h1>SWAP</h1>
      {Math.floor(remainingTime / 60)}:{remainingTime % 60 < 10 ? "0" + remainingTime % 60 : remainingTime % 60}
    </span>}
  </CountdownCircleTimer>
    </div>


    <div style={{padding:padding, display: 'inline-block'}}>
      <CountdownCircleTimer
         key="timer6"

    isPlaying={timer6}
    size={size}
    duration={300}
    colors={['#004777', '#F7B801', '#A30000', '#A30000']}
    colorsTime={[120, 60, 30, 0]}
    onComplete={()=>{
      _timer7(true)
      audio.play()
    }}
  >
    {({ remainingTime }) => 
    <span style={{textAlign:"center"}}>
      <h1>Nave</h1>
      {Math.floor(remainingTime / 60)}:{remainingTime % 60 < 10 ? "0" + remainingTime % 60 : remainingTime % 60}
    </span>}
  </CountdownCircleTimer>
    </div>


    <div style={{padding:padding, display: 'inline-block'}}>
      <CountdownCircleTimer
         key="timer7"

    isPlaying={timer7}
    size={size}
    duration={300}
    colors={['#004777', '#F7B801', '#A30000', '#A30000']}
    colorsTime={[120, 60, 30, 0]}
    onComplete={()=>{
      _timer8(true)
      audio.play()
    }}
  >
    {({ remainingTime }) => 
    <span style={{textAlign:"center"}}>
      <h1>Nave <br/> Q/A</h1>
      {Math.floor(remainingTime / 60)}:{remainingTime % 60 < 10 ? "0" + remainingTime % 60 : remainingTime % 60}
    </span>}
  </CountdownCircleTimer>
    </div>

    <div style={{padding:padding, display: 'inline-block'}}>
      <CountdownCircleTimer
         key="timer8"

    isPlaying={timer8}
    size={size}
    duration={60}
    colors={['#004777', '#F7B801', '#A30000', '#A30000']}
    colorsTime={[120, 60, 30, 0]}
    onComplete={()=>{
      _timer9(true)
      audio.play()
    }}
  >
    {({ remainingTime }) => 
    <span style={{textAlign:"center"}}>
      <h1>SWAP </h1>
      {Math.floor(remainingTime / 60)}:{remainingTime % 60 < 10 ? "0" + remainingTime % 60 : remainingTime % 60}
    </span>}
  </CountdownCircleTimer>
    </div>


    <div style={{padding:padding, display: 'inline-block'}}>
      <CountdownCircleTimer
         key="timer9"

    isPlaying={timer9}
    size={size}
    duration={300}
    colors={['#004777', '#F7B801', '#A30000', '#A30000']}
    colorsTime={[120, 60, 30, 0]}
    onComplete={()=>{
      _timer10(true)
      audio.play()
    }}
  >
    {({ remainingTime }) => 
    <span style={{textAlign:"center"}}>
      <h1>Falling Giant Films</h1>
      {Math.floor(remainingTime / 60)}:{remainingTime % 60 < 10 ? "0" + remainingTime % 60 : remainingTime % 60}
    </span>}
  </CountdownCircleTimer>
    </div>


    <div style={{padding:padding, display: 'inline-block'}}>
      <CountdownCircleTimer
         key="timer10"

    isPlaying={timer10}
    size={size}
    duration={300}
    colors={['#004777', '#F7B801', '#A30000', '#A30000']}
    colorsTime={[120, 60, 30, 0]}
    onComplete={()=>{
      _timer11(true)
      audio.play()
    }}
  >
    {({ remainingTime }) => 
    <span style={{textAlign:"center"}}>
      <h1>Falling Giant Films <br/> Q/A</h1>
      {Math.floor(remainingTime / 60)}:{remainingTime % 60 < 10 ? "0" + remainingTime % 60 : remainingTime % 60}
    </span>}
  </CountdownCircleTimer>
    </div>


    <div style={{padding:padding, display: 'inline-block'}}>
      <CountdownCircleTimer
         key="timer11"

    isPlaying={timer11}
    size={size}
    duration={1380}
    colors={['#004777', '#F7B801', '#A30000', '#A30000']}
    colorsTime={[120, 60, 30, 0]}
    onComplete={()=>{
      audio.play()
    }}
  >
    {({ remainingTime }) => 
    <span style={{textAlign:"center"}}>
      <h1>STORM</h1>
      {Math.floor(remainingTime / 60)}:{remainingTime % 60 < 10 ? "0" + remainingTime % 60 : remainingTime % 60}
    </span>}
  </CountdownCircleTimer>
    </div>

    </>
  );
};


