import ContactItem from './ContactItem.jsx'

// Component to display list of contacts
function ContactList({contacts, onDeleteContact, filterText, hasContacts}) {
   // Show empty state if no contacts
  if (!hasContacts) {
    return (
      <div className="contact-list">
        <p className="empty-state">No contacts yet. Add one above!</p>
      </div>
    )
  }

  // If contacts exist but filter hides them all
  if (contacts.length === 0) {
    return (
      <div className="contact-list">
        <p className="empty-state">No matches found for "{filterText}"</p>
      </div>
    )
  }

  // Render list of contacts
  return (
    <div className="contact-list">
      <h2>Contacts ({contacts.length})</h2>
      <div className="contacts-grid">
        {contacts.map(contact => (
          // Each contact needs unique key prop 
          <ContactItem
            key={contact.id}
            contact={contact}
            onDelete={onDeleteContact}
          />
        ))}
      </div>
    </div>
  )
}

export default ContactList
