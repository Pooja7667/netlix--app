import React from 'react'
import { useSelector } from 'react-redux'
import { useState } from 'react'
const Bookmark = () => {
    const[list ,setList]=useState([])
  const index =useSelector((store)=>store.list.index)
  console.log("Ajindex==" ,index)
 
  return (
    <>
    
    
    
    
    
    </>
  )
}

export default Bookmark
