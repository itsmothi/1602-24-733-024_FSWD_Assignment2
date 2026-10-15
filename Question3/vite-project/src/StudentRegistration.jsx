import { useState } from 'react'
import './App.css'

const initialValues = {
  name: '',
  email: '',
  phone: '',
  password: '',
  confirmPassword: '',
}

function validate(values) {
  const errors = {}

  if (!values.name.trim()) {
    errors.name = 'Name is required.'
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = 'Enter a valid email address.'
  }

  if (!/^\d{10}$/.test(values.phone)) {
    errors.phone = 'Enter a 10-digit phone number.'
  }

  if (
    !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9])\S{8,}$/.test(
      values.password,
    )
  ) {
    errors.password =
      'Use at least 8 characters with uppercase, lowercase, a number, and a special character.'
  }

  if (!values.confirmPassword || values.confirmPassword !== values.password) {
    errors.confirmPassword = 'Passwords must match.'
  }

  return errors
}

function StudentRegistration() {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [submittedStudent, setSubmittedStudent] = useState(null)

  function handleChange(event) {
    const { name, value } = event.target
    setValues((currentValues) => ({ ...currentValues, [name]: value }))
    setSubmittedStudent(null)
  }

  function handleSubmit(event) {
    event.preventDefault()
    const validationErrors = validate(values)
    setErrors(validationErrors)

    if (Object.keys(validationErrors).length === 0) {
      setSubmittedStudent({
        name: values.name.trim(),
        email: values.email.trim(),
        phone: values.phone,
      })
    } else {
      setSubmittedStudent(null)
    }
  }

  const fields = [
    { name: 'name', label: 'Name', type: 'text', autoComplete: 'name' },
    { name: 'email', label: 'Email', type: 'email', autoComplete: 'email' },
    { name: 'phone', label: 'Phone', type: 'tel', autoComplete: 'tel' },
    {
      name: 'password',
      label: 'Password',
      type: 'password',
      autoComplete: 'new-password',
    },
    {
      name: 'confirmPassword',
      label: 'Confirm password',
      type: 'password',
      autoComplete: 'new-password',
    },
  ]

  return (
    <main className="registration">
      <h1>Student Registration</h1>
      <form className="registration-form" onSubmit={handleSubmit} noValidate>
        {fields.map((field) => (
          <div className="form-field" key={field.name}>
            <label htmlFor={field.name}>{field.label}</label>
            <input
              id={field.name}
              name={field.name}
              type={field.type}
              autoComplete={field.autoComplete}
              value={values[field.name]}
              onChange={handleChange}
              aria-invalid={Boolean(errors[field.name])}
              aria-describedby={
                errors[field.name] ? `${field.name}-error` : undefined
              }
            />
            {errors[field.name] && (
              <p className="field-error" id={`${field.name}-error`} role="alert">
                {errors[field.name]}
              </p>
            )}
          </div>
        ))}
        <button type="submit">Register</button>
      </form>

      {submittedStudent && (
        <section className="submission-success" aria-live="polite">
          <h2>Registration successful</h2>
          <dl>
            <dt>Name</dt>
            <dd>{submittedStudent.name}</dd>
            <dt>Email</dt>
            <dd>{submittedStudent.email}</dd>
            <dt>Phone</dt>
            <dd>{submittedStudent.phone}</dd>
          </dl>
        </section>
      )}
    </main>
  )
}

export default StudentRegistration
