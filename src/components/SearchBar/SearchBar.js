import { useState } from 'react';
import './SearchBar.css';

function SearchBar({ handleSearch }) {
    // Sort by
    const [sortBy, setSortBy] = useState('best_match');

    function handleSortBy(e) {
        for (const child of e.target.parentElement.children) {
            child.classList.remove('active');
        }
        e.target.classList.add('active');

        setSortBy(e.target.getAttribute('data-sort'));
    }

    // Search term
    const [searchTerm, setSearchTerm] = useState('');

    function handleSearchTerm(e) {
        setSearchTerm(e.target.value);
    }

    // Search location
    const [searchLocation, setSearchLocation] = useState('');

    function handleSearchLocation(e) {
        setSearchLocation(e.target.value);
    }

    // Submit
    function handleSubmit(e) {
        e.preventDefault();
        handleSearch(searchTerm, searchLocation, sortBy);
    }

    return (
        <div className="hero">
            <div className="sort">
                <div className="active" data-sort="best_match" onClick={handleSortBy}>Best Match</div>
                <div data-sort="rating" onClick={handleSortBy}>Highest Rated</div>
                <div data-sort="review_count" onClick={handleSortBy}>Most Reviewed</div>
            </div>
            <div className="search">
                <input type="text" onChange={handleSearchTerm} placeholder="Search Businesses" />
                <input type="text" onChange={handleSearchLocation} placeholder="Where?" />
            </div>
            <button type="submit" onClick={handleSubmit}>Let's Go</button>
        </div>
    );
}

export default SearchBar;
