// SearchBar component
function SearchBar({filterText, onFilterChange}) {
  return (
    <div className="search-bar">
      <label htmlFor="search">Search Contacts</label>
      <input
        id="search"
        type="text"
        value={filterText}
        onChange={(e) => onFilterChange(e.target.value)}
        placeholder="Search by name or email..."
      />
    </div>
  )
}

export default SearchBar
