import React from 'react'
import { useState,useEffect } from 'react'
import RestCard from './RestCard'
import Row from 'react-bootstrap/Row';
import { RestaurantListAction } from '../actions/restuarantAction';
import { useDispatch,useSelector } from 'react-redux';
import { restuarantListReducer } from '../reducers/restaurantReducer';
function Restaurentlist() {


  // const [allrestaurent,setAllrestaurent]=useState([])
  //  const getrestarentdata=async()=>
  // {await fetch('/restaurants.json')
  //  .then(data=>{data.json().then(result=>{setAllrestaurent(result.restaurants)})})
  // }

  //  console.log(allrestaurent);

  const dispatch=useDispatch()
  const result=useSelector(state=>state.restaurentReducer)
  const {restaurantList}=result
useEffect(()=>
{
  dispatch(RestaurantListAction())
  // getrestarentdata()
},[])
 
return(
  <Row>
{
  restaurantList.map(item=>(
    <RestCard data={item}></RestCard>
  ))
}


  </Row>
)
}
export default Restaurentlist