import React, { useRef, useState } from 'react';
import {Col, Container, Form, Row } from 'react-bootstrap';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import logo from '../../images/logo.png';
import './SignUp.css';
import { Link, useNavigate } from 'react-router-dom';
const SignUp = () => {
    const [validated, setValidated] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const comfirmPasswordRef = useRef();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        createUserError
    ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification:true});

    if(user){
        navigate('/');
    }

    const [updateProfile, updating, updateProfileError] = useUpdateProfile(auth);
    const handleSubmit = async(event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const confirmPassword = comfirmPasswordRef.current.value;
        if (password === confirmPassword) {
            await createUserWithEmailAndPassword(email, password);
            await updateProfile({ displayName:name });
            
        } else {
            setError("Your password didn't match");
        }
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
                                        type="text"
                                        placeholder="Name"
                                        ref={nameRef}
                                    />
                                </Form.Group>
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
                                <Form.Group controlId="validationCustom01">
                                    <Form.Control
                                        required
                                        type="password"
                                        placeholder="Confirm Password"
                                        ref={comfirmPasswordRef}
                                    />
                                </Form.Group>
                                <p>{error}</p>
                            </Row>
                            <button className="btn mb-3" type="submit">Sign In</button>
                            <Link to={'/login'}>Already have an account</Link>
                        </Form>
                    </Col>
                    <Col md={3}></Col>
                </Row>
            </Container>

        </div>

    );
};

export default SignUp;