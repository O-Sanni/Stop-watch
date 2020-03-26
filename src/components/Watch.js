import React from "react";
import RestartButton from "./RestartButton";
import StartButton from "./StartButton";
import PauseButton from "./PauseButton";
import './components.css';


class Watch extends React.Component{
    constructor(props){
        super(props); 
        //make the states default minutes is set to 0, seconds to 0 and count for pause to 0
        this.state={hours:0, minutes:0,
        seconds:0, countPause:0, start:false };
    }

    startClick =()=>{ //function which called by pressing Start button
        //this.inter will use setInterval to give new values to state every 1000 m.second

        this.inter=setInterval(()=>{
            this.setState({ //set state values
                seconds:(this.state.seconds +1), //will add 1 to seconds every 1000 m.s
            });
            if(this.state.seconds>=60){ //if the value of seconds is more or equals to 60 
                this.setState({seconds: 0, //seconds will be set to 0
                minutes: this.state.minutes +1}); // and minutes will increase by 1
            if (this.state.minutes>=60){
                this.setState({minutes: 0, hours: (this.state.hours+1)})
            }
            }
        },1000);
        this.setState({start:true}); //set countStart to true
    }
     //by pressing restart button state will be updated to original state which was 0's
    restartClick=()=>{ 
    clearInterval(this.inter); //clearInterval to stop the setInterval()
     this.setState({hours: 0, minutes: 0,
        seconds:0, countPause:0, start:false});
    }
    // by pressing Pause we updating countPause by adding 1
    pauseClick=()=>{
        if(this.state.start===true){
        this.setState({countPause: (this.state.countPause+1)});
        if(this.state.countPause%2!==0){ //if countPause not divisiable by 2 we call startClick function to continue setInterval
            this.startClick();
        }
        else{ //if countPause divisiable by 2 we use clearInterval to stop the setInterval()
      clearInterval(this.inter);}
        }
     }
    
    render(){
        
        return (
            <div>
                <p id="timerParagraph">Timer:</p>
                 <p id="timer">Hours: {this.state.hours} : Minutes: {this.state.minutes} : Seconds: {this.state.seconds} </p>
                <StartButton onClick={this.startClick} />
                <PauseButton onClick={this.pauseClick} />
                <RestartButton onClick={this.restartClick} />
            </div>
        );
    }
}

export default Watch;