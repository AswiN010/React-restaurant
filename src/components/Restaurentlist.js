import React from 'react'
import { useState,useEffect } from 'react'
import RestCard from './RestCard'
import Row from 'react-bootstrap/Row';

function Restaurentlist() {
  const [allrestaurent,setAllrestaurent]=useState([])

   const getrestarentdata=async()=>
  {
    await fetch('/restaurants.json')
    .then(data=>{data.json().then(result=>{setAllrestaurent(result.restaurants)})})
  }

   console.log(allrestaurent);
useEffect(()=>{getrestarentdata()},[])
 
return(
  <Row>
{
  allrestaurent.map(item=>(
    <RestCard data={item}></RestCard>
  ))
}


  </Row>
)
}
export default Restaurentlist