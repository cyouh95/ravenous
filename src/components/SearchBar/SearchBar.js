import './SearchBar.css';

function SearchBar() {
    const handleClick = (e) => {
        for (const child of e.target.parentElement.children) {
            child.classList.remove('active');
        }
        e.target.classList.add('active');
    };

    return (
        <div className="hero">
            <div className="sort">
                <div className="active" onClick={handleClick}>Best Match</div>
                <div onClick={handleClick}>Highest Rated</div>
                <div onClick={handleClick}>Most Reviewed</div>
            </div>
            <div className="search">
                <input type="text" placeholder="Search Businesses" />
                <input type="text" placeholder="Where?" />
            </div>
            <button type="submit">Let's Go</button>
        </div>
    );
}

export default SearchBar;
