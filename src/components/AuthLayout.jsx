import React,{useEffect,useState} from'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


export default function Protected({children,authentication=true}){

   const navigate=useNavigate();
   const[loader,setLoader] =useState(true);
   const authStatus=useSelector(state=>state.auth.status)
   useEffect(()=>{
    if(authentication && authentication!==authStatus){
        navigate("/login")
    }else if(!authentication && authentication!==authStatus){
        navigate("/") //from store we can see that user statuslogin is true so simply navigate him to home page --> "/"
    }
    setLoader(false);
   }
   ,[authentication,navigate,authStatus])
    return (
        <div>
            AuthLayout
        </div>
    )
}