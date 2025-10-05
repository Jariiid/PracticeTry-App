import { useState } from 'react'


function SearchBar ({ onSearch }) {

    const [searchTerm, setSearchTerm] = useState("")

    const validateSearch = () => {
        if(searchTerm.trim()) {
            console.log("Nasa validateSearch", searchTerm)
            onSearch(searchTerm)
        }
    }

    const handleSearch = (e) => {
        e.preventDefault();
        validateSearch()
    }

    return(<>
        <form className="search-bar" onSubmit={handleSearch}>
        <input
            required
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">Search 🔍</button>
        </form>
    </>)
}

export default SearchBar