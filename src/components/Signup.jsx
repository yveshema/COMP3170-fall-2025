import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import { Formik } from 'formik';
import { object, string, ref } from 'yup';

const signupSchema = object({
    firstname: string()
        .required('First name is required')
        .min(2, 'Too short')
        .max(50, 'Too long'),
    lastname: string()
        .required('Last name is required')
        .min(2, 'Too short')
        .max(50, 'Too long'),
    email: string()
        .email('Invalid email')
        .required('Email is required'),
    password: string()
        .required('Password is required')
        .min(8, 'Password should be at least 8 characters long'),
    confirm: string()
        .oneOf([ref('password')], 'Passwords do not match')
        .required('Confirm password field is required'),
    
});

export default function Signup() {
    const [show, setShow] = useState(false);

    return (
        <>
            <Button variant="info" size="lg" onClick={() => setShow(true)}>Sign up</Button>
            
            <Modal
                show={show}
                centered
                size="lg"
                backdrop="static"
                onHide={() => setShow(false)}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Sign up</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Formik
                        initialValues={{
                            firstname: '',
                            lastname: '',
                            email: '',
                            password: '',
                            confirm: '',
                        }}

                        validationSchema={signupSchema}

                        onSubmit={(values) => {
                            console.log(values);
                            setShow(false);
                        }}
                    >
                        {createSignupForm}
                    </Formik>

                </Modal.Body>
            </Modal>
        </>
    );
}

function createSignupForm({ handleSubmit, errors, touched, getFieldProps }) {
    return (
        <Form size="lg" className="p-4" onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label>First name</Form.Label>
                <Form.Control type="text" name="firstname" {...getFieldProps('firstname')} />
                {errors.firstname && touched.firstname && <p className="error">{errors.firstname}</p>}
            </Form.Group>

            <Form.Group>
                <Form.Label>Last name</Form.Label>
                <Form.Control type="text" name="lastname" {...getFieldProps('lastname')} />
                {errors.lastname && touched.lastname && <p className="error">{errors.lastname}</p>}
            </Form.Group>

            <Form.Group>
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name="email" {...getFieldProps('email')} />
                {errors.email && touched.email && <p className="error">{errors.email}</p>}
            </Form.Group>

            <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" {...getFieldProps('password')} />
                {errors.password && touched.password && <p className="error">{errors.password}</p>}
            </Form.Group>

            <Form.Group>
                <Form.Label>Confirm password</Form.Label>
                <Form.Control type="password" name="confirm" {...getFieldProps('confirm')} />
                {errors.confirm && touched.confirm && <p className="error">{errors.confirm}</p>}
            </Form.Group>
            <Button type="submit" variant="success" className="d-block ms-auto mt-3">Submit</Button>
        </Form>
    );
}