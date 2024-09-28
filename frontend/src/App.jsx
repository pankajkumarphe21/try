import { useEffect } from 'react'
import './App.css'
import makeRequest from './axios'

function App() {
  useEffect(()=>{
    const fetchData=async()=>{
      const p=await makeRequest.get('/auth');
      console.log(p.data)
    };
    fetchData();
  },[])
  return (
    <>
    Hi
    </>
  )
}

export default App
