// import React from 'react'

// function Login() {

//     const auth = ()=>{
//         window.open(
//             `${process.env.REACT_APP_API_URL}/auth/google/callback`,
//             "_self"
//         )
//     }
//   return (
//     <div>
//       loginpage
//       <button onClick={auth}> Login with google</button>
//     </div>
//   )
// }

// export default Login

import React from 'react'

import {   doSignInWithGoogle } from '../../Firebase/auths'
import { useAuth } from '../../Context/authContext';
import { Navigate } from 'react-router-dom';
function Login() {
const { logedin} = useAuth();


const onGooglelogin = (e)=>{
  e.preventDefault();
doSignInWithGoogle().catch(err=>{
  console.log("signin error ");
})
}
  return (
    <div>
      {logedin && (<Navigate to={'/'} replace= {true}/>)}
      this is login
      <button onClick={(e)=> onGooglelogin(e)}>Sign in with google</button>
    </div>
  )
}

export default Login
