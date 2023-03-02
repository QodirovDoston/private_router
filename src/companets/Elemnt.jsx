import React, { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

export default function Elemnt() {

  const [use, setUse] = useState("");
  const [pass, setPass] = useState("");

  const navigate = useNavigate()



  const handleSubmit=(e)=>{
    e.preventDefault();
    if(use === "qodirov" && pass ==='123456'){
      navigate("/home")
  }else {
    alert('xato ukam')
  }
  }
   return (
    <>
    <Container>
      <Row className='justify-content-center mt-5'>
        <Col xs={6}>
          <p style={{color:'green', fontSize:'15px' ,textAlign:'center'}}>email: qodirov</p>
          <p style={{color:'green', fontSize:'15px',marginBottom:'40px',textAlign:"center"}}>possword: 123456</p>
       <Form onSubmit={handleSubmit} >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="text" placeholder="Enter email" value={use}  onChange={e => setUse(e.target.value)}
        />
        {use.length < 6 ? <p className='erro'>error</p>  : <p className='sec'>Success</p>}
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={pass}  onChange={e => setPass(e.target.value)} />
      </Form.Group>
      {pass.length < 6 ?   <p className='erro'>error</p>  : <p className='sec'>Success</p>}
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
        </Col>
      </Row>
    </Container>
    </>
  )
}
// }