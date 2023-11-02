import axios from 'axios'
import React, { useEffect, useState } from 'react'
import AlbumCard from './AlbumCard'

const AlbumList = () => {
    const [albums,setalbums]=useState([])
    useEffect(() => {
        //request
      axios.get("https://jsonplaceholder.typicode.com/albums")
      .then((res)=>setalbums(res.data))
      .catch((error)=>console.log(error))
      }, [])
      console.log(albums)
  return (
    <div>
        {albums?.map(album=><AlbumCard album={album} key={album.id} />)}
    </div>
  )
}

export default AlbumList