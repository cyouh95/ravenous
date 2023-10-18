import './BusinessList.css';
import Business from '../Business/Business';

function BusinessList() {
    const businesses = [
        <Business />,
        <Business />,
        <Business />,
        <Business />,
        <Business />,
        <Business />
    ];

    return <div className="container">{businesses}</div>;
}

export default BusinessList;
