import React, { useState } from 'react'
import { Formik, Form, Field } from 'formik'
import { ValidationSchema } from './ValidationSchema'
import { useMutation } from '@apollo/client'
import { REGISTER_MUTATION } from '../../store/actions/graphql'

const styles = {
  label: {
    paddingLeft: '4rem',
    justifyContent: 'flex-end'
  }
}

export const Register = () => {
  const [formRegister, { data }] = useMutation(REGISTER_MUTATION)
  const [vals, setVals] = useState({})
  console.log(`💥💥💥`, vals)
  // console.log(`💥💥💥`, data)

  return (
    <div>
      <h1>Registeration</h1>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          age: '',
          jobTitle: '',
          address: '',
          city: '',
          country: '',
          phoneNumber: '',
          email: ''
        }}
        validationSchema={ValidationSchema}
        validator={() => ({})}
        onSubmit={values => {
          // console.log(values)
          setVals(values)
          formRegister({ variables: { args: values } })
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <table>
              <tbody>
                <tr>
                  <td>
                    <label style={styles.label}>First Name: </label>
                  </td>
                  <td>
                    <Field name='firstName' />
                    {touched.firstName && errors.firstName && (
                      <div>{errors.firstName}</div>
                    )}
                  </td>
                </tr>
                <tr>
                  <td>
                    <label style={styles.label}>Last Name: </label>
                  </td>
                  <td>
                    <Field name='lastName' />
                    {touched.lastName && errors.lastName && (
                      <div>{errors.lastName}</div>
                    )}
                  </td>
                </tr>
                <tr>
                  <td>
                    <label style={styles.label}>Age: </label>
                  </td>
                  <td>
                    <Field name='age' />
                    {touched.age && errors.age && <div>{errors.age}</div>}
                  </td>
                </tr>
                <tr>
                  <td>
                    <label style={styles.label}>Job Title: </label>
                  </td>
                  <td>
                    <Field name='jobTitle' />
                    {touched.jobTitle && errors.jobTitle && (
                      <div>{errors.jobTitle}</div>
                    )}
                  </td>
                </tr>
                <tr>
                  <td>
                    <label style={styles.label}>Address: </label>
                  </td>
                  <td>
                    <Field name='address' />
                    {touched.address && errors.address && (
                      <div>{errors.address}</div>
                    )}
                  </td>
                </tr>
                <tr>
                  <td>
                    <label style={styles.label}>City: </label>
                  </td>
                  <td>
                    <Field name='city' />
                    {touched.city && errors.city && <div>{errors.city}</div>}
                  </td>
                </tr>
                <tr>
                  <td>
                    <label style={styles.label}>Country: </label>
                  </td>
                  <td>
                    <Field name='country' />
                    {touched.country && errors.country && (
                      <div>{errors.country}</div>
                    )}
                  </td>
                </tr>
                <tr>
                  <td>
                    <label style={styles.label}>Phone Number: </label>
                  </td>
                  <td>
                    <Field name='phoneNumber' />
                    {touched.phoneNumber && errors.phoneNumber && (
                      <div>{errors.phoneNumber}</div>
                    )}
                  </td>
                </tr>
                <tr>
                  <td>
                    <label style={styles.label}>Email: </label>
                  </td>
                  <td>
                    <Field name='email' />
                    {touched.email && errors.email && <div>{errors.email}</div>}
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    <button type='submit'>Submit</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </Form>
        )}
      </Formik>
    </div>
  )
}
