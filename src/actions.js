export function APOD(title, explanation, url, media_type)
{
    return{
        type:"APOD",
        data:{
            title:title,
            description:explanation,
            url:url,
            media_type:media_type,
        }
    }
}

export function Earth(url)
{
    return{
        type:"Earth",
        data:{
            url:url,
        }
    }
}

export function errorMessage(){
    return{
        type:"ERROR_MESSAGE",
        data:{
            
        }
    }
}

export function loading(){
    return{
        type:"LOAD",
        data:{
            
        }
    }
}

export function latChange(newValue){
    return{
        type:"LAT",
        data:{
            newValue:newValue,
        }
    }
}

export function yearChange(newValue){
    return{
        type:"YEAR",
        data:{
            newYearValue:newValue,
        }
    }
}

export function longChange(newValue){
    return{
        type:"LONG",
        data:{
            newLongValue:newValue,
        }
    }
}