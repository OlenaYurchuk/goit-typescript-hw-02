import { Formik, Form, Field } from 'formik';
import { Toaster, toast } from 'react-hot-toast';
import css from './SearchBar.module.css'

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
        <Form className={css.form}>
          <Field className={css.searchField}
            type="text"
            name="query"
            placeholder="search images and photos"
            autoComplete="off"
            autoFocus
          />
          <button className={css.btn} type="submit">Search</button>
        </Form>
      </Formik>
    </div>

  )
}