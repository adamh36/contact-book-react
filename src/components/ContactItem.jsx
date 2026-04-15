// ContactItem component: displays a single contact
function ContactItem({contact, onDelete}) {
  const handleDelete = () => {
    onDelete(contact.id)
  }

  return (
    <div className="contact-card">
      <div className="contact-info">
        <h3>{contact.name}</h3>
        <p className="contact-email">{contact.email}</p>
        {contact.phone && (
          <p className="contact-phone">{contact.phone}</p>
        )}
      </div>
      <button 
        className="btn-delete" 
        onClick={handleDelete}
        aria-label={`Delete ${contact.name}`}
      >
        Delete
      </button>
    </div>
  )
}

export default ContactItem
