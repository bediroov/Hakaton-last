import React from 'react'
import Singlecard from "../pages/Singlecard"
import { Row } from 'react-bootstrap'


const Menu = ({items}) => {




  
const mapproduct =items.map((item)=>{
  return (
    <Singlecard
    photo={item.photo}
    title={item.title}
    key={item.id}
    id={item.id}
    desc={item.desc}
    iframe={item.iframe} 
    />
  )
})



  return (
    <>

<Row>

{mapproduct}


</Row>




    </>
  )
}

export default Menu