import './App.css'
import { useState,useEffect } from 'react';
import {useDispatch} from 'react-redux';
import authService from './appwrite/auth'
import {login,logout} from './store/authSlice'
import {Header,Footer} from './components/index.js'
function App() {
  
const[loading,setLoading]=useState(true);
const dispatch=useDispatch()

useEffect(()=>{
   authService.getCurrentUser()
   .then((userData)=>{
    if(userData){
      dispatch(login({userData}))
    }else{
      dispatch(logout())
    }
   })
   .finally(()=>setLoading(false))
},[]) 
return loading ? (
  <h1 className='bg-slate-500 text-white text-center text-3xl mt-10'>
    Loading...
  </h1>
) : (
  <>
    <div className='min-h-screen bg-slate-900 flex flex-wrap content-between'>
      <div className='w-full block'>
        <Header />
        <main>
          TODO!
        </main>
        <Footer />
      </div>
    </div>
  </>
);

}

export default App
