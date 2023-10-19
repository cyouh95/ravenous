import './BusinessList.css';
import Business from '../Business/Business';

function BusinessList({ businesses }) {
    return <div className="container">{businesses.map(business => <Business business={business} key={business.name} />)}</div>;
}

export default BusinessList;
