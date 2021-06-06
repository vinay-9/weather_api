import './Home.css'
import React, { useState, useEffect, ReactDOM } from 'react';
import Dictionary from './Dictionary.mp4'
import title_page from "./images/title_page.png";
import SearchIcon from '@material-ui/icons/Search';
import {BrowserRouter  as Router, Route, Switch, Link} from 'react-router-dom';
import WeatherContent from './WeatherContent'
import './Content.css';
import Input from '@material-ui/core/Input';
import Header from './header';
import ThumbDownOutlinedIcon from '@material-ui/icons/ThumbDownOutlined';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
function Home() {
 
    const[word,setWord]=useState("");

    useEffect(() => {
     
    }, [])
    
    return (
        <div className="home_page" >
            <img src={title_page} />
                <Input className="input" id="search" color="black" placeholder="Type the city to search"
                onKeyDown={e=>{

                        if (e. key === 'Enter') {
                                // Search()                    
                                <WeatherContent word/>
                                setWord(e.target.value)
                        }
                }}
                autoFocus="True"
                onChange={(e) => {
                e.preventDefault();
                console.log(e.target.value)
                setWord(e.target.value)
                }}></Input>
                
            <Link  to={{
                pathname: "/search",
                search: `?city=${word}`
                
            }} >
             <div className="container_button">
                 <h1 className="buttons">Search Here</h1>
            </div>
            </Link>
        </div>
    )
}

export default Home


