import {useState} from 'react'

//Form component for adding contacts
function ContactForm({onAddContact}) {
  // State for form inputs
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  
  // Validate form fields
  const [errors, setErrors] = useState({})

  //returns true if valid
  const validateForm = () => {
    const newErrors = {}

    // Name is required
    if (!name.trim()) {
      newErrors.name = 'Name is required'
    }

    // Email is required and must contain @
    if (!email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!email.includes('@')) {
      newErrors.email = 'Email must be valid'
    }

    setErrors(newErrors)
    // Return true if no errors
    return Object.keys(newErrors).length === 0
  }

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault() // Prevent page refresh

    // Validate before submitting
    if (validateForm()) {
      // Create new contact object
      const newContact = {
        name: name.trim(),
        email: email.trim(),
        phone: phone.trim()
      }

      // Call the function passed from App component
      onAddContact(newContact)

      // Clear form after successful submit
      setName('')
      setEmail('')
      setPhone('')
      setErrors({})
    }
  }

  return (
    <div className="contact-form-container">
      <h2>Add New Contact</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        {/* Name input - controlled */}
        <div className="form-field">
          <label htmlFor="name">Name *</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter name"
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>

        {/* Email input - controlled */}
        <div className="form-field">
          <label htmlFor="email">Email *</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        {/* Phone input - controlled, optional */}
        <div className="form-field">
          <label htmlFor="phone">Phone</label>
          <input
            id="phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter phone (optional)"
          />
        </div>

        {/* Submit button */}
        <button type="submit" className="btn-primary">
          Add Contact
        </button>
      </form>
    </div>
  )
}

export default ContactForm
