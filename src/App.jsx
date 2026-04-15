import {useState} from 'react'
import ContactForm from './components/ContactForm.jsx'
import SearchBar from './components/SearchBar.jsx'
import ContactList from './components/ContactList.jsx'
import './App.css'
 
// Main component: manages state
function App() {
  // State for contacts array
  const [contacts, setContacts] = useState([])
  
  // State for search text
  const [filterText, setFilterText] = useState('')
 
  // Add new contact to array
  const addContact = (newContact) => {
    const contactWithId = {
      ...newContact,
      id: Date.now().toString()
    }
    setContacts([...contacts, contactWithId])
  }
 
  // Delete contact by ID
  const deleteContact = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id))
  }
 
  // Filter contacts by search text
  const filteredContacts = contacts.filter(contact => {
    const searchLower = filterText.toLowerCase()
    return (
      contact.name.toLowerCase().includes(searchLower) ||
      contact.email.toLowerCase().includes(searchLower)
    )
  })
 
  return (
    <div className="app">
      <header className="app-header">
        <h1>Contact Book</h1>
        <p>Manage your contacts</p>
      </header>
 
      <main className="app-main">
        <ContactForm onAddContact={addContact} />
 
        <SearchBar 
          filterText={filterText} 
          onFilterChange={setFilterText} 
        />
 
        <ContactList 
          contacts={filteredContacts} 
          onDeleteContact={deleteContact}
          filterText={filterText}
          hasContacts={contacts.length > 0}
        />
      </main>
 
      <footer className="app-footer">
        <p>© 2026 Contact Book App</p>
      </footer>
    </div>
  )
}
 
export default App