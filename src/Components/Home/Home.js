// import React from 'react'

// function Home(props) {
//     const user = props.user;
// const handleLogout=()=>{
 
//     window.open(
//         `${process.env.REACT_APP_API_URL}/auth/logout`,
//         "_self"
//     )
// }

//   return (
//     <div>
//       homepage
//       <div>{user.email}</div>
//       <button onClick={handleLogout}>Logout</button>
//     </div>
//   )
// }

// export default Home


import React from 'react'
import { useAuth } from '../../Context/authContext';
import { doSignOut } from '../../Firebase/auths';
import { useNavigate } from 'react-router-dom';


function Home() {
  
  // const { user,logedin} = useAuth();
  const {user, logedin} = useAuth();
  const navigate = useNavigate();
  return (
    <div>
    
      {
        logedin?
        <>
         <button onClick={()=>{ doSignOut().then(()=>{ navigate('/login')})} }>Logout</button>
         <div> {user.email}</div>
        </>:<>
         hii this is home nd u r not logged in 
        </>
      }
   
        
    </div>
  )
}

export default Home
