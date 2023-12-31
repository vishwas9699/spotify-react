import './App.css';
import React, { useEffect, useState } from 'react';
import Login from './Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Player';
import { useStateValue } from "./StateProvider";

const spotify = new SpotifyWebApi();

function App() {

  const[{ user,token },dispatch] = useStateValue();

  useEffect(()=>{
    const hash = getTokenFromUrl();
    window.location.hash= "";
    const _token = hash.access_token;

    if(_token){
      dispatch({
        type:'SET_TOEKN',
        token:_token,
      })
      spotify.setAccessToken(_token);
      spotify.getMe().then(user =>{
        dispatch({
          type:'SET_USER',
          user:user,
        })
      });
    }
  },[]);


  return (
    <div className="app">
      {
        token?(
          <Player spotify={spotify}/>
        ):(
          <Login/>
        )
      }
    </div>
  );
}

export default App;
