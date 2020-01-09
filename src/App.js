import React from "react";
import { Formik, Field, ErrorMessage, useField } from "formik";
import * as Yup from "yup";

const SignupForm = () => {
  return (
    <Formik
      initialValues={{ firstName: "", lastName: "", email: "" }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(15, "Must be 15 characters or less")
          .required("Required"),
        lastName: Yup.string()
          .max(20, "Must be 20 characters or less")
          .required("Required"),
        email: Yup.string()
          .email("Invalid email address")
          .required("Required")
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {formik => (
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="firstName">First Name</label>
          <Field name="firstName" type="text" />
          <ErrorMessage name="firstName" />
          <label htmlFor="lastName">Last Name</label>
          <Field name="lastName" type="text" />
          <ErrorMessage name="lastName" />
          <label htmlFor="email">Email Address</label>
          <Field name="email" type="email" />
          <ErrorMessage name="email" />
          <button type="submit">Submit</button>
        </form>
      )}
    </Formik>
  );
};

const MySelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select {...field} {...props} />
      {meta.touched && meta.error ? (
        <ErrorMessage>{meta.error}</ErrorMessage>
      ) : null}
    </>
  );
};

const MoodForm = (props) => {
  return (
    <Formik
      initialValues={{ rating: 1, felling: "" }}
      validationSchema={Yup.object({
        rating: Yup.number()
          .min(1, "Min is 1")
          .max(5, "Max is 5")
          .required("Is required")
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {formik => (
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="rating">Mood</label>
          <Field name="rating" type="number" />
        
          <ErrorMessage name="rating" />

          <label htmlFor="feeling">
            <Field as="select" name="felling" >
              <option value="">Select a job type</option>
              <option value="designer">Designer</option>
              <option value="development">Developer</option>
              <option value="product">Product Manager</option>
              <option value="other">Other</option>
            </Field>
          </label>
          <button type="submit">Submit</button>
        </form>
      )}
    </Formik>
  );
};

function App() {
  return (
    <div className="App">
      My mood
      <MoodForm />
    </div>
  );
}

export default App;
