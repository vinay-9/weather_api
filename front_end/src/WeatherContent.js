import clouds_background from "./images/clouds_background.png";
import "./WeatherContent.css" ;
import React, { useState, useEffect, ReactDOM } from 'react';
import {BrowserRouter  as Router, Route, Switch, useLocation, useParams} from 'react-router-dom';
import snowfall from './images/snowfall.png'


function WeatherContent() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [url, setUrl] = useState(clouds_background);

    useEffect(() => {
     Search();
    }, [])
    function Search(){
        // const url= `https://community-open-weather-map.p.rapidapi.com/find?q=`+props.word+`&cnt=1&mode=null&lon=0&type=link%2C%20accurate&lat=0&units=imperial%2C%20metric`;
        
        let city = useParams()
        console.log(city)
        // // city= {location.city}
        const url= `https://community-open-weather-map.p.rapidapi.com/find?q=`+city+`&cnt=1&mode=null&lon=0&type=link%2C%20accurate&lat=0&units=imperial%2C%20metric`;

        fetch(url, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "bd7cf329bemshae8e6053840605ep166442jsnc60488059d95",
            "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
        }
    })
    .then(res=>res.json())
    .then(response => {
        console.log(response.list);
        setItems(response.list);
        console.log(items);
    })
    .catch(err => {
        console.error(err);
    });
       }


    function doMath(temp)
    {
        return  Math.round(temp-273);
    }
    
    return (

        
        <div>
            <Route>
            
            
            <div className="card" >
            <ul className="List">{
                    items.map((product) => {

                    return <li key={product.id}>
                            <p className="example">
                                    {product.name}
                            </p> 
                            <div className="inner_ul">
                                {product.weather.map(weather=>{
                                    return <div key= {weather.id}>
                                        {weather.description}
                                        </div>
                                })}
                            </div>
                            <p><b>Clouds set percentage:</b>  {product.clouds.all}</p>
                            <p><b>Temperature:</b> {doMath(product.main.temp)} C</p>
                            <p><b>Snow:</b> {product.snow!=null? product.snow: "No rain showers soon"}</p>
                            <p><b>Rain:</b>  {product.rain!=null? product.rain: "No Precipitation"}</p>
                            <p><b>Wind Speed:</b>  {product.wind.speed}</p>
                            <br></br>
                    </li>
                    })
                }
            </ul>
            </div>
            <img src={url}></img>
            
            {/* <img src={clouds_background}></img>
            <div className="List">{
                    items.map((product) => {
                    return <div key={product.id}>
                        <div className="card">
                            <p className="example">
                                    {product.name}
                            </p> 
                            <div className="inner_ul">
                                {product.weather.map(weather=>{
                                    return <div key= {weather.id}>
                                        {weather.description}
                                        </div>
                                })}
                            </div>
                            <p><b>Clouds set percentage:</b>  {product.clouds.all}</p>
                            <p><b>Temperature:</b> {product.main.temp}</p>
                            <p><b>Snow:</b> {product.snow!=null? product.snow: "No rain showers soon"}</p>
                            <p><b>Rain:</b>  {product.rain!=null? product.rain: "No Precipitation"}</p>
                            <p><b>WInd Speed:</b>  {product.wind.speed}</p>
                            
                            <br></br>
                        </div>  
                    </div>
                    })
                }
            </div> */}
            </Route>
        </div>
    )
}

export default WeatherContent;
