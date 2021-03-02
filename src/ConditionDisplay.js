import React from 'react';
import './index.css';
import ReactPlayer from 'react-player'
class ConditionDisplay extends React.Component{
    
    render(){
        var mediaType = this.props.mediaType
        var newURL = this.props.url
        if(mediaType==="video"){
                return(
                <div>
                    <ReactPlayer className="youtube-player"
                        url={newURL}
                    />
                </div>
                )
        
        } 
        else {
            return(
                    <img className="image" src={newURL} alt="Space" />
            )
        }
    }
}

export default ConditionDisplay;