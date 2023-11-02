import React from 'react';
import {Link} from 'react-router-dom';


const Home = () => {
    
  return (
    <div>Home
        
        <Link to={"/users"}><button>User List </button></Link>
        <Link to={"/albums"}><button>Album List </button></Link>
    </div>
  )
}

export default Home