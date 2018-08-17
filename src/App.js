import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

    constructor(props)
    {
      super(props)
      this.state={
        seconde:"0",
        minute:"0",
        heurs:"0",
        statu:"",
        classNom:"",
        etat:"arrete"
      } 
      this.timer=""
      this.arr=[{
        sec:"",
        min:"",
        heu:""
      }]
    }

    
    demarre=()=>{ this.timer=setInterval(
      ()=>{
          this.setState({statu:"Pause"})
          this.setState({classNom:"pause"}) 
          this.setState({seconde:Number(this.state.seconde)+1})
          if (this.state.seconde===60)
          {
            this.setState({minute:Number(this.state.minute)+1})
            this.setState({seconde:"0"})
          }
          if(this.state.minute===60)
          {
            this.setState({heurs:Number(this.state.heurs)+1})
            this.setState({minute:"0"})
          }      
      },
      1000
    )
    
    
  }

      resetMinu=()=>{
        this.setState({statu:"Start"})
        this.setState({classNom:""}) 
        this.setState({minute:0})
        this.setState({seconde:0})
        this.setState({heurs:0})
        clearInterval(this.timer)
      }

      pauseMinu=()=>{
        this.setState({statu:"Start"})
        this.setState({classNom:"start"}) 
        clearInterval(this.timer)
      }

      captureMinu=()=>{
        this.arr.push({sec:this.state.seconde,
                        min:this.state.minute,
                        heu:this.state.heurs})
      }


  
  
  render() {
    return (
      <div className="App">


      <div className="container">
      <div className="heurs-container">
      <span className="heurs"> {this.state.heurs<10?"0"+this.state.heurs : this.state.heurs}:</span>
      <span className="heurs-text"> Heurs </span>
      </div>

      <div className="minute-container">
      <span className="minute">{this.state.minute<10 ? "0"+this.state.minute : this.state.minute}:</span>
      <span className="minute-text"> Minute </span>
      </div>

      <div className="seconde-container">
      <span className="seconde">{this.state.seconde<10?"0"+this.state.seconde : this.state.seconde}</span>
      <span className="seconde-text"> Seconde</span>
      </div>
      </div>


      <input type="button"  className={this.state.classNom + " start"} onClick={this.state.statu===""||this.state.statu==="Start"?()=>this.demarre():()=>this.pauseMinu()} value={this.state.statu==="" ? "Start" : this.state.statu} />
      <input type="button" className="capture"  value="Capture" onClick={()=>this.captureMinu()}/>
      <input type="button" className="reset" onClick={()=>this.resetMinu()} value="Reset" />

      {this.arr.length>1?this.arr.map((el,i)=>{
        if(i>0)
        {

        
        return(
          <div className="cap">
          <span className="heurs"> {el.heu<10?"0"+el.heu+":":el.heu+":"}</span>
          <span className="minute">{el.min<10?"0"+el.min+":":el.min+":"}</span>
          <span className="seconde">{el.sec<10?"0"+el.sec:el.sec}</span>
          </div>
          )}
      }):""}
      </div>
    );
  }
}

export default App;



/*
<div>
          <span className="timer"> {this.state.heurs<10?"0"+this.state.heurs : this.state.heurs}:</span>
          <span className="timer"> {this.state.minute<10 ? "0"+this.state.minute : this.state.minute}: </span>
          <span className="timer">{this.state.seconde<10?"0"+this.state.seconde : this.state.seconde}</span>
        </div>

        <div>
          <span className="tim"> Heurs</span>
          <span className="tim"> Minute </span>
          <span className="tim">Seconde</span>

          <input className="text-in" onChange={(e)=>this.calculTime(e.target.value)} />
        </div>
          calculTime=(value)=>{
      this.setState({seconde:Math.floor(value / 1000) % 60})
      this.setState({minute:Math.floor(value / 60000) % 60})
      this.setState({heurs:Math.floor(value / 3600000) % 60})
    }
        */


