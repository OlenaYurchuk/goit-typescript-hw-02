import { Formik, Form, Field } from 'formik';
import { Toaster, toast } from 'react-hot-toast';

export default function SearchBar({ onSearch }) {
  return (
    <div>
      <Toaster />
      <Formik
        initialValues={{ query: "" }}
        onSubmit={(values, actions) => {
          if (!values.query.trim()) {
            toast.error("Please enter a search query!")
          } else {
            onSearch(values.query);
            actions.resetForm()
          }

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
    </div>

  )
}