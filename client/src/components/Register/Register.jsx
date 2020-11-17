import React from "react";
import { Formik, Form, Field } from "formik";
import { ValidationSchema } from "./ValidationSchema";
import { useMutation } from "@apollo/client";
import { REGISTER_MUTATION } from "../../store/actions/graphql";
import { WebBackground } from "libs/ui/src/WebBackground/WebBackground";
import { WebContainer } from "libs/ui/src/WebContainer/WebContainer";
import { WebHeader } from "libs/ui/src/WebHeader/WebHeader";
import { Navbar } from "components/index";

const styles = {
  label: {
    paddingLeft: "4rem",
    justifyContent: "flex-end",
  },
};

export const Register = () => {
  const [formRegister, { data, loading }] = useMutation(REGISTER_MUTATION);

  return (
    <WebBackground>
      <Navbar />
      <div>
        <h1>Registeration</h1>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            age: 0,
            jobTitle: "",
            address: "",
            city: "",
            country: "",
            phoneNumber: "",
            email: "",
          }}
          validationSchema={ValidationSchema}
          validator={() => ({})}
          onSubmit={(values) => {
            console.log(typeof values.age);
            console.log(values.age);
            const context = { ...values, age: Number(values.age) || 0 };
            formRegister({ variables: { args: context } });
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
                      <Field name="firstName" />
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
                      <Field name="lastName" />
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
                      <Field name="age" type="number" />
                      {touched.age && errors.age && <div>{errors.age}</div>}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label style={styles.label}>Job Title: </label>
                    </td>
                    <td>
                      <Field name="jobTitle" />
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
                      <Field name="address" />
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
                      <Field name="city" />
                      {touched.city && errors.city && <div>{errors.city}</div>}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label style={styles.label}>Country: </label>
                    </td>
                    <td>
                      <Field name="country" />
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
                      <Field name="phoneNumber" />
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
                      <Field name="email" />
                      {touched.email && errors.email && (
                        <div>{errors.email}</div>
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>
                      <button type="submit">Submit</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </Form>
          )}
        </Formik>
      </div>
    </WebBackground>
  );
};
