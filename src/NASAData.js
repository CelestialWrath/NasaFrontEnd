import React from 'react';
import './index.css';
import {connect} from 'react-redux'
import * as actions from './actions.js'
import DisplayType from './DisplayType.js'
import { InputLabel, MenuItem, Select } from '@material-ui/core';

class NASAData extends React.Component{  

    APODClick(){
        this.props.dispatch(actions.loading());
        fetch("https://nasaapifunctionapp.azurewebsites.net/api/GetNasaData")
        .then(response => response.json())
        .then(result => {
                this.props.dispatch(actions.APOD(result.title, result.explanation, result.url, result.media_type))
            }
        )
        .catch(function(error) {
            console.log("Error: \n", error)
            this.props.dispatch(actions.errorMessage())
        }
        )

    }

    EarthClick(){
        this.props.dispatch(actions.loading());
        var latitude = this.props.latitude;
        var longitude = this.props.longitude;
        var year = this.props.year;

        fetch(`https://nasaapifunctionapp.azurewebsites.net/api/GetEarthData?longitude=${longitude}&latitude=${latitude}&year=${year}`)
        .then(response => response.text())
        .then(result => {
                this.props.dispatch(actions.Earth(result))
            }
        )
        .catch(function(error){
            this.props.dispatch(actions.errorMessage())
        }
        )
    
    
}

    render(){
        return(
            
            <div className="container">
                <button className="Button" onClick={() => this.APODClick()}> APOD</button>
                <div className="EarthContainer">
                <button className="Button" onClick={() => this.EarthClick()}> Earth</button>
                    <label>
                        Latitude:
                    <input type="number" className="LatitudeText" ref="LaT" label="Latitude"  onChange={e => this.props.dispatch(actions.latChange(e.target.value))} />
                    </label>
                    <label>
                        Longitude:
                    <input type="number" className="LongitudeText" ref="Lon" label="Longitude" onChange={e => this.props.dispatch(actions.longChange(e.target.value))}/>
                    </label>
                    <label>
                        Year:
                        <input type="number" className="LongitudeText" onChange={e => this.props.dispatch(actions.yearChange(e.target.value))}/>
                    </label>
                </div>
                <DisplayType 
                    clickType={this.props.clickType}
                    url={this.props.url}
                    mediaType={this.props.mediaType}
                    description={this.props.description}
                    title={this.props.title}
                    loading={this.props.loading}
                    error={this.props.error}
                    dispatch={this.props.dispatch}
                /> 
            </div>
        );
    }

   
}

export default connect(function mapStateToProps(state,props){
    return{
        
        title:state.title,
        url:state.url,
        description:state.description,
        APIKEY:state.APIKEY,
        mediaType:state.mediaType,
        clickType:state.clickType,
        latitude:state.latitude,
        longitude:state.longitude,
        year:state.year,
        loading:state.loading,
        error:state.error,
    }
})(NASAData);