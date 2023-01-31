import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Image } from 'react-bootstrap';
import Operatingtime from './Operatingtime';
import Review from './Review';
function ViewRest() {
  const params = useParams()
  // console.log(params.id);


  const [allrestaurent, setAllrestaurent] = useState([])

  const getrestarentdata = async () => {
    await fetch('/restaurants.json')
      .then(data => { data.json().then(result => { setAllrestaurent(result.restaurants) }) })
  }
  const restData = allrestaurent.find(item => item.id == params.id)
  // console.log(restData);
  //  console.log(allrestaurent);
  useEffect(() => { getrestarentdata() }, [])


  
  return (
    <>
     {
      restData?(
      <Row>
        <Col>
          <Image className='p-5 ' src={restData.photograph}  fluid/>
          </Col>
          <Col className='mt-5'>
          <h1>{restData.name}</h1>
          <h2>{restData.neighborhood}</h2>
          <h3>cuisine type: {restData.cuisine_type}</h3>
          <h4>Address:{restData.address}</h4>

          <Operatingtime timedata={restData.operating_hours}></Operatingtime>
          <br></br>
          <br></br>
          <Review  reviewData={restData.reviews}></Review>
        </Col>
      </Row>
      ):'null'
     } 
    </>
  )
}

export default ViewRest