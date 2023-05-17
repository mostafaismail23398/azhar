// import React from "react";
// import axios from "axios";
// import { useState } from "react";
// class Form extends React.Component{
//     const  [username , setusername]=useState('')
//     const  [password , setpassword]=useState('')
//     const senddata =(e)=>{
//         e.preventDefault()
//         axios.post('https://6354475ee64783fa828283c9.mockapi.io/test' , {username , password }) 
//     }
//     render(){

//         return(
//             <form>
//                 <label>Enter Your Name</label>
//                 <input type='text' name='username' onChange={(e)=>setusername(e.target.value)}></input>
//                 <label>Enter Your Password</label>
//                 <input type='text' name='username' onChange={(e)=>setpassword(e.target.value)}></input>
//                 <input type='submit' onClick={senddata}/>
//             </form>
//         )
//     }
//     }

//     export default Form