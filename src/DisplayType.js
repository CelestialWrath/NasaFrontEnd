import React from 'react';
import './index.css';
import * as actions from './actions.js'
import ConditionDisplay from './ConditionDisplay'
import { CircularProgress } from '@material-ui/core';
import errorImage from './Images/error-image-generic.png';
class DisplayType extends React.Component{
    render(){
        if(!this.props.loading)
        {
            if(!this.props.error)
            {
                if(this.props.url === '')
                {
                    this.props.dispatch(actions.errorMessage())
                    return(
                        <img src={errorImage} alt="Error"/>
                    )
                }
                if(this.props.clickType === "APOD")
                {
                    return(
                        <div>
                        <div className="title">{this.props.title}</div>
                            <ConditionDisplay
                                url={!this.props.error ? this.props.url : errorImage}
                                mediaType={this.props.mediaType}
                            />
                            <div className="description">{this.props.description}</div>
                        </div>
                    )
                }
                else if(this.props.clickType === "Earth")
                {
                    return(
                        <div>
                        <img className="image" src={!this.props.error ? `data:image/png;base64, ${this.props.url}`  : errorImage} alt="Earth" />
                        </div>
                    )
                }
                 else{
                    return(
                        <div> </div>
                    )
                }
            }
            else{
                return(
                    <>
                    <img src={errorImage} alt="Error"/>
                    </>
                )
            }
        }
        else{
            return(
                <CircularProgress/>
            )
        }
    }
}

export default DisplayType;