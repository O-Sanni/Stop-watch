import React from "react";

class RestartButton extends React.Component{
    
    render(){
        return(
            <button onClick={this.props.onClick}>
                Restart!
            </button>
    )

}
}
export default RestartButton;