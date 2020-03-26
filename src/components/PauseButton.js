import React from 'react';
import './components.css';

class PauseButton extends React.Component{
    render()
    {
        return(
                <button className="buttons" onClick={this.props.onClick}>
                    Pause
                </button>
        )
    }
}


export default PauseButton;