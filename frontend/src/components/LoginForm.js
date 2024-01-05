import React , {useState} from 'react'
import User from './../assets/user.png'
import { Container, Row, Col, Card, Form, Button} from 'react-bootstrap';
import { Link , useNavigate} from 'react-router-dom';
import { login } from '../api';

function LoginForm() {

  const [user, setUser] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await login(user);
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
            <Card.Body className="p-5" >
              <div className="text-center mb-3 mt-3">
                  <img src={User} alt="BootstrapBrain Logo" />
              </div>
              <Form
                onSubmit={handleSubmit}
                className="needs-validation"
                noValidate
              >
                <Row className="g-3 overflow-hidden">
                  <Col xs={12}>
                      <Form.Control
                        onChange={(e) => setUser({ ...user, email: e.target.value })}
                      type="email" placeholder="name@example.com" required className='p-2' />
                  </Col>
                  <Col xs={12}>

                      <Form.Control
                        onChange={(e) => setUser({ ...user, password: e.target.value })}
                       type="password" placeholder="Password" required className='p-2' />

                  </Col>
                  <Col xs={12}>
                    <div className="d-flex gap-2 justify-content-between">
                      <Form.Check type="checkbox" id="rememberMe" label="Remember me" className="text-secondary" />
                      <a href="#!" className="link-primary text-decoration-none">Forgot password?</a>
                    </div>
                  </Col>
                  <Col xs={12}>
                    <div className="d-grid my-3">
                      <Button variant="primary" size="lg" className="text-uppercase" type="submit">Login</Button>
                    </div>
                  </Col>
                  <Col xs={12}>
                    <p className="m-0 text-secondary text-center">Don't have an account? 
                      <Link to="/signup" className="text-primary ms-1 text-decoration-none ">Sign up</Link>
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

export default LoginForm
