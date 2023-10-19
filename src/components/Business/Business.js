import './Business.css';

function Business({ business }) {
    return (
        <div className="card">
            <img src={business.imageSrc} alt={business.name} />
            <h3>{business.name}</h3>
            <div className="info">
                <p>{business.address}</p>
                <p className="category">{business.category}</p>
                <p>{business.city}</p>
                <p className="rating">{business.rating} stars</p>
                <p>{business.state} {business.zipCode}</p>
                <p>{business.reviewCount} reviews</p>
            </div>
        </div>
    );
}

export default Business;
