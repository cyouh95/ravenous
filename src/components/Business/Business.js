import './Business.css';

function Business() {
    const sample = {
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

    return (
        <div className="card">
            <img src={sample.imageSrc} alt={sample.name} />
            <h3>{sample.name}</h3>
            <div className="info">
                <p>{sample.address}</p>
                <p className="category">{sample.category}</p>
                <p>{sample.city}</p>
                <p className="rating">{sample.rating} stars</p>
                <p>{sample.state} {sample.zipCode}</p>
                <p>{sample.reviewCount} reviews</p>
            </div>
        </div>
    );
}

export default Business;
