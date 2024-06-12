import React from 'react';
import { useAuth } from '../../Context/authContext';
import { doSignOut } from '../../Firebase/auths';
import { useNavigate } from 'react-router-dom';

import './Head.css';
function Head() {
  const {user, logedin} = useAuth();
  const navigate = useNavigate();
  return (
    <div>
     
<nav className=" d navbar navbar-light bg-light">
  <a className="navbar-brand" href="#">Mini-CRM</a>
  <button  type='button' class="btn btn-light" onClick={()=>{ doSignOut().then(()=>{ navigate('/login')})} }>Logout</button>
</nav>

    </div>
  )
}

export default Head
