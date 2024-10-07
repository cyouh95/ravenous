import { useState } from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import BusinessList from '../BusinessList/BusinessList';
import search from '../../utils/api';

function App() {
    const [businesses, setBusinesses] = useState([]);

    const handleSearch = async (searchTerm, searchLocation, sortBy) => {
        const results = await search(searchTerm, searchLocation, sortBy);
        setBusinesses(results);
    }

    return (
        <div>
            <header>ravenous</header>
            <main>
                <SearchBar handleSearch={handleSearch} />
                <BusinessList businesses={businesses} />
            </main>
            <footer></footer>
        </div>
    );
}

export default App;
