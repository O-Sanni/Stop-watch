import React from 'react';

class PauseButton extends React.Component{
    render()
    {
        return(
                <button onClick={this.props.onClick}>
                    Pause!
                </button>
        )
    }
}


export default PauseButton;