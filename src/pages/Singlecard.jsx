import React from 'react'
import { Button, Col } from 'react-bootstrap'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'



const Singlecard = ({ id, photo, title, price, desc,iframe }) => {
  return (


    <Col sm={6} md={3} className='g-5'>

      <Card  >
        <Card.Img variant="top" src={photo} />
        <Card.Body style={{ backgroundColor: "grey" }}>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {price}
          </Card.Text>
          <Card.Text>
            {desc}
          </Card.Text>
          <Button >   <a className="btn btn-outline-light" href={`${iframe}`}>
            <i className="fa-solid fa-play"></i>
          </a></Button>
        </Card.Body>
      </Card>


    </Col>

  )
}

export default Singlecard