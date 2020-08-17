import React, { useState } from "react";
import { Container, Row, Button, Col, Form, FormGroup, Label, Input, Card, CardBody, CardTitle, Alert } from "reactstrap";
import { useHistory } from "react-router-dom";
import { Formik } from 'formik';
import { callLogin } from "./loginAPI";
import styles from "./index.module.sass";

const Login = () => {
  const [error, setError] = useState('');
  const history = useHistory();
  const submitForm = async (values: { email: string, password: string }, { setSubmitting }: { setSubmitting: Function }) => {
    try {
      const { accessToken } = await callLogin(values.email, values.password);

      console.log("accessToken", accessToken)
      localStorage.setItem('auth', accessToken);
      // do something to store accesstoken
      setSubmitting(false);
      history.push('/dashboard')
    } catch (ex) {
      setError(ex.message);
      setSubmitting(false);
    }
  }


  return (
    <Container className="p-0">
      <Row className="mt-5 row-cols-sm-1 row-cols-md-1 row-cols-lg-2 row-cols-xl-2 d-flex justify-content-center">
        <Col>
          <Card>
            <CardBody>
              <CardTitle className="d-flex justify-content-center">
                <h2>Log in</h2>
              </CardTitle>
              <Formik
                initialValues={{ email: '', password: '' }}
                validate={values => {
                  const errors: { email?: string, password?: string } = {};
                  if (!values.email) {
                    errors.email = 'Required';
                  } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                  ) {
                    errors.email = 'Invalid email address';
                  }

                  if (!values.password) {
                    errors.password = 'Required'
                  }
                  return errors;
                }}
                onSubmit={submitForm}>
                {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
                  <Form className={styles.form} onSubmit={handleSubmit}>
                    <FormGroup>
                      <Label for="exampleEmail">Email</Label>
                      <Input type="email" name="email" placeholder="with a placeholder" onChange={handleChange} onBlur={handleBlur} value={values.email} />
                    </FormGroup>
                    <FormGroup>
                      <Label for="examplePassword">Password</Label>
                      <Input type="password" name="password" placeholder="password placeholder" onChange={handleChange} onBlur={handleBlur} value={values.password} />
                    </FormGroup>

                    {error && <Alert color="danger">
                      {error}
                    </Alert>}
                    <Button color="primary" className="mt-4 w-25" type="submit" disabled={isSubmitting}>Login</Button>
                  </Form>
                )}
              </Formik>

            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;