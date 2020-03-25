import React from "react";
import RestartButton from "./RestartButton";
import StartButton from "./StartButton";
import PauseButton from "./PauseButton";


class Watch extends React.Component{
    constructor(){
        super();
        this.state={min: 0,
        seconds:0};
    }
    getMin=()=>{

    }
    startClick =()=>{
        this.inter=setInterval(()=>{
            this.setState({
                seconds:(this.state.seconds +1)
            });

        },1000)
        
     }

    restartClick=()=>{
        
     this.setState({timer:0});
    }
    
    pauseClick=()=>{

      clearInterval(this.interval);
     }
    
    render(){
        
        return (
            <div>
                <p>Timer:{this.state.min}:{this.state.seconds}</p>
                <StartButton onClick={this.startClick} />
                <PauseButton onClick={this.pauseClick} />
                <RestartButton onClick={this.restartClick} />
            </div>
        );
    }
}

export default Watch;