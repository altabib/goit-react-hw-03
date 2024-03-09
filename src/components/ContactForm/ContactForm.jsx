import css from "./ContactForm.module.css"
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { nanoid } from "nanoid";
import * as Yup from "yup";
import { useId } from "react";

const ContactForm = ({ onAdd }) => {
  const nameId = useId();
  const numberId = useId();
    
const ContactSchema = Yup.object().shape({
    userName: Yup.string()
        .min(3, "User name must be at leest 3 characters!")
        .max(50, "User name must be less than 50 characters!")
        .required("User name is required!"),
    userNamber: Yup.string()
        .min(3, "User namber must be at leest 3 characters!")
        .max(50, "User namber must be less than 50 characters!")
        .required("User namber is required!"),
});

    const handleSubmit = (data, formActions) => {
        onAdd({
      name: data.name,
      number: data.number,
      id: nanoid(),
    });
        formActions.resetForm();
    };

  return (
      <Formik validationSchema={ContactSchema }
          initialValues={{ name: "", number: "" }}
          onSubmit={handleSubmit}>
          
			<Form className="cssForm">
              <label className={css.label} htmlFor="{nameId}">
                  <span className={css.labeltext}>Name</span>
                  <Field
                      className={css.formInput}
                      placeholder = "Ivanov ivan"
                      type="name"
                      name="name"
                      id={nameId}
                  />
                  <ErrorMessage className={css.errorMessage} name="name" component="span" />
              </label>
              <label className={css.label} htmlFor="">
                  <span className={css.labeltext}>Number</span>
                  <Field
                      className={css.formInput}
                      placeholder = "444-88-91"
                      type="number"
                      name="number"
                      id={numberId}
                  />
                  <ErrorMessage className={css.errorMessage} name="number" component="span" />
              </label>
              <button type="btn">Add contact</button>
			</Form>
    </Formik>
  );
};

export default ContactForm;