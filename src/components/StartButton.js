import React from 'react';
import './components.css';

class StartButton extends React.Component{
   
    render()
    {
        return(
                <button className="buttons" onClick={this.props.onClick}>
                    Start!
                </button>
        )
    }
}


export default StartButton;







