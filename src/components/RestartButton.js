import React from "react";
import './components.css';

class RestartButton extends React.Component{
    
    render(){
        return(
            <button className="buttons"  onClick={this.props.onClick}>
                Restart!
            </button>
    )

}
}
export default RestartButton;