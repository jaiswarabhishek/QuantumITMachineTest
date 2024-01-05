import React from 'react'
import { useState } from 'react';
import User from './../assets/user.png'
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import { register } from '../api';
import { Link, useNavigate} from 'react-router-dom';

function SignupForm() {

  const [user, setUser] = useState({ name: '', dob: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await register(user);
      navigate('/');
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  return (
 <Container className="d-flex justify-content-center align-items-center vh-100">
      <Row > 
        <Col xs={12} sm={10} md={8} lg={6} xl={5} xxl={4} className="mx-auto my-5">
          <Card border="light-subtle" className="rounded-3 shadow-sm">
            <Card.Body className="p-5">
              <div className="text-center mb-3 mt-3">
                  <img src={User} alt="BootstrapBrain Logo" />
              </div>
              <Form
                onSubmit={handleSubmit}
                className="needs-validation"
                noValidate
              >
                <Row className="g-2 overflow-hidden">
                  <Col xs={12}>
                      <Form.Control onChange={(e) => setUser({ ...user, name: e.target.value })} type="text" placeholder="John Doe" required className='p-2'/>
                  </Col>
                  <Col>
                   <Form.Group controlId="dateOfBirth" >
                        <DatePicker
                        selected={user.dob}
                        customInput={<Form.Control className='p-2'/>}
                        onChange={(date) => setUser({ ...user, dob: date })}
                        placeholderText="Date of Birth"
                        dateFormat="dd-MM-yyyy" // Recommended format for storing dates
                        maxDate={new Date()} // Restrict to past dates
                        wrapperClassName="w-100"
                      />
                  </Form.Group>
                  </Col>
                  <Col xs={12}>
                      <Form.Control type="email" onChange={(e) => setUser({ ...user, email: e.target.value })} placeholder="name@example.com" required className='p-2' />
                  </Col>
                  <Col xs={12}>
                      <Form.Control onChange={(e) => setUser({ ...user, password: e.target.value })} type="password" placeholder="Password" required className='p-2' />
                  </Col>
                  <Col xs={12}>
                    <div className="d-grid my-3">
                      <Button variant="primary" size="lg" className="text-uppercase" type="submit">Sign up</Button>
                    </div>
                  </Col>
                  <Col xs={12}>
                    <p className="m-0 text-secondary text-center">Already have an account? <Link to="/login" className="text-primary ms-1 text-decoration-none ">Login</Link>
                    </p>
                  </Col>
                </Row>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default SignupForm
