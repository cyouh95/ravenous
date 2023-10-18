import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import BusinessList from '../BusinessList/BusinessList';

function App() {
    return (
        <div>
            <header>ravenous</header>
            <main>
                <SearchBar />
                <BusinessList />
            </main>
            <footer></footer>
        </div>
    );
}

export default App;
