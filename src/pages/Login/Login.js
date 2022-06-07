import React, { useRef, useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../images/logo.png';
import './Login.css';
const Login = () => {
    const [error, setError] = useState('');
    const [validated, setValidated] = useState(false);
    const emailRef = useRef();
    const passwordRef = useRef();
    const navigate = useNavigate();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        signInError,
    ] = useSignInWithEmailAndPassword(auth);
    if(user){
        navigate('/');
    }
    let errorElement;
    if(signInError){
        errorElement = <p>{signInError.message}</p>
    }
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
        event.preventDefault();
    };
    return (
        <div className="form-continer d-flex align-items-center">
            <Container>
                <Row>
                    <Col md={4}></Col>
                    <Col md={4}>
                        <div className="from-img">
                            <img src={logo} alt="" className='img-fluid' />
                        </div>
                    </Col>
                    <Col md={4}></Col>
                </Row>
                <Row>
                    <Col md={3}></Col>
                    <Col md={6}>
                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                            <Row className="mb-3">
                                <Form.Group className="mb-3" controlId="validationCustom01">
                                    <Form.Control
                                        required
                                        type="Email"
                                        placeholder="Email"
                                        ref={emailRef}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="validationCustom01">
                                    <Form.Control
                                        required
                                        type="password"
                                        placeholder="Password"
                                        ref={passwordRef}
                                    />
                                </Form.Group>
                            </Row>
                            {errorElement}
                            <button className="btn mb-3" type="submit">Sign In</button>
                        </Form>
                        <Link to={'/signup'}>Don't have an account</Link>
                    </Col>
                    <Col md={3}></Col>
                </Row>
            </Container>

        </div>
    );
};

export default Login;