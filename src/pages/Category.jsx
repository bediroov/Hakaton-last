import React from 'react'
import { Button, Container, Row } from 'react-bootstrap'

const Category = ({filterItems,categories}) => {
  return (
    <Container>

<Row>

<div className="Category g-5">

{
  categories.map((item)=>{
    return (
      <Button variant='dark ms-3' onClick={()=>filterItems(item)}>{item}</Button>
    )
  })
}

</div>
</Row>

    </Container>
  )
}

export default Category