function SearchFilter({ setSearchTerm, setFilter }) {
    const handleSearch = (e) => {
      setSearchTerm(e.target.value);
    };
  
    const handleFilterChange = (e) => {
      const { name, value } = e.target;
      setFilter(prevFilter => ({
        ...prevFilter,
        [name]: value
      }));
    };
  
    return (
      <div className="search-filter">
        <input type="text" placeholder="Search" onChange={handleSearch} />

        <select name="age" onChange={handleFilterChange}>
          <option value="baby">Baby</option>
          <option value="young">Young</option>
          <option value="adult">Adult</option>
          <option value="senior">Senior</option>
        </select>
      </div>
    );
}

export default SearchFilter;


