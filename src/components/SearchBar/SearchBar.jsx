
import { Formik, Form, Field } from 'formik';

export default function SearchBar({ onSearch }) {
  return (
    <Formik
      initialValues={{ query: "" }}
      onSubmit={(values, actions) => {
        onSearch(values.query);
        actions.resetForm()
      }}
    >
      <Form>
        <Field
          type="text"
          name="query"
          placeholder="search images and photos"
          autoComplete="off"
          autoFocus
        />
        <button type="submit">Search</button>
      </Form>
    </Formik>
  )
}