import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import store from './configureStore.js'
import NASAData from './NASAData.js'
import {Provider} from 'react-redux'


class MainComponent extends React.Component{
  render(){
    return(
      <div>
        <NASAData/>
      </div>
    )
  }
}  
  
  // ========================================
  //initialises a provided around the main component to allow access to the store
  ReactDOM.render(<Provider store={store}><MainComponent/></Provider>, document.getElementById('root'));
