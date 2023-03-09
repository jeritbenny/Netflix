import React from 'react'
import { useState,useEffect } from 'react'
import instance from '../baseUrl'
import './Banner.css'
function Banner({fetchUrl}) {
    const[movie,setMovies]=useState([])
    

    async function fetchData(){
       const result = await instance.get(fetchUrl)
    //    console.log(result.data.results);
       setMovies(result.data.results[
        Math.floor(Math.random()*result.data.results.length-1)
       ])

    }

    useEffect(()=>{
        fetchData()
    },[])
    console.log(movie);
    const base_url = "https://image.tmdb.org/t/p/original/";

    function truncate(str,n){
        return str?.length>n ? str.substring(0,n-1)+"...":str;
    }

  return (

    <div
        className="banner"
        style={{backgroundImage:`url(${base_url}${movie.backdrop_path})`, 
    backgroundSize:'cover'}}
        >

<div className='banner-content'>
<h1 className='banner-title'>{movie.name}</h1>
<h1 className='banner-des'>{truncate(movie.overview,100)}</h1>

</div>
    </div>
  )
}

export default Banner