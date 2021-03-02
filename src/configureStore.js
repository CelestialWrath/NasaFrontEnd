import {createStore} from 'redux'
//=============== REDUX ====================
//the initial state
var defaultState = {
    title:"No Title",
    url:"No Url",
    description:"No description",
    mediaType:"img",
    clickType:"no click",
    latitude:"",
    longitude:"",
    year:"",
    loading:false,
    error:false
};

//function to determine the next state to move to
function amount(state = defaultState, action) {
    switch(action.type){
        
        case('APOD'):
        return{
            ...state, 
            title:action.data.title,
            url:action.data.url,
            description:action.data.description,
            mediaType:action.data.media_type,
            clickType:"APOD",
            loading:false,
            error:false,
        }
        case('ERROR_MESSAGE'):
        return{
            ...state,
            error:true,
            loading:false,
        }
        case('Earth'):
        return{
            ...state,
            url:action.data.url,
            clickType:"Earth",
            loading:false,
            error:false,
        }
        case('LAT'):
        return{
            ...state,
            latitude:action.data.newValue,
        }
        case('LONG'):
        return{
            ...state,
            longitude:action.data.newLongValue,
        }
        case('YEAR'):
        return{
            ...state,
            year:action.data.newYearValue,
        }
        case('LOAD'):
        return{
            ...state,
            loading:true,
        }
        default:
            return state;
    }
    
}

var store = createStore(amount, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;