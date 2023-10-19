import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import BusinessList from '../BusinessList/BusinessList';

function App() {
    const business = {
        imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
        name: 'MarginOtto Pizzeria',
        address: '1010 Paddington Way',
        city: 'Flavortown',
        state: 'NY',
        zipCode: '10101',
        category: 'Italian',
        rating: 4.5,
        reviewCount: 90
    };

    const businesses = [
        business,
        business,
        business,
        business,
        business,
        business
    ];

    return (
        <div>
            <header>ravenous</header>
            <main>
                <SearchBar />
                <BusinessList businesses={businesses} />
            </main>
            <footer></footer>
        </div>
    );
}

export default App;
