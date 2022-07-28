import React from 'react'
import { Card,Button } from 'react-bootstrap'

const cardd = (props) => {
  return (


    <div>
      
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
  <img src='https://static.vecteezy.com/ti/vecteur-libre/t2/1993889-belle-femme-latine-avatar-icone-personnage-gratuit-vectoriel.jpg' alt="image"/>
    <Card.Title>{props.Name}</Card.Title>
    <Card.Text>{props.age}</Card.Text>
    <Card.Text>{props.job}</Card.Text>

    <Button variant="primary">click here</Button>
  </Card.Body>
</Card>
  </div>
  
  )
}

export default cardd