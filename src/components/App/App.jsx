import React from 'react';
import './App.css';
import axios from 'axios'
import {useEffect, useState} from 'react'
import GalleryList from './GalleryList/GalleryList';

function App() {

  const [galleryList, setGalleryList] = useState([])

  const  getGallery = () => {
    console.log('inside  the getGallery')
    axios.get('/gallery')
      .then((response) => {
        console.log(response.data)
        setGalleryList(response.data)
      }).catch((error) => {
        console.log('Error with the GET', error)
      })
  }

  useEffect(() => {
    getGallery()
  }, [])

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        <img src="images/goat_small.jpg"/>
        <GalleryList galleryList={galleryList}/>
      </div>
    );
}

export default App;
