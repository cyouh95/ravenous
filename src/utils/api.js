const API_KEY = process.env.REACT_APP_API_KEY;
const YELP_URL = 'https://api.yelp.com/v3/businesses/search';

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${API_KEY}`
    }
};

const search = async (searchTerm, searchLocation, sortBy) => {
    try {
        const url = `${YELP_URL}?term=${searchTerm}&location=${searchLocation}&sort_by=${sortBy}`
        const response = await fetch(url, options);

        if (response.ok) {
            const jsonResponse = await response.json();

            return jsonResponse.businesses.map(business => {
                return {
                    id: business.id,
                    imageSrc: business.image_url,
                    name: business.name,
                    address: business.location.address1,
                    city: business.location.city,
                    state: business.location.state,
                    zipCode: business.location.zip_code,
                    category: business.categories[0].title,
                    rating: business.rating,
                    reviewCount: business.review_count
                }
            });
        }
    } catch (e) {
        console.log(e);
    }

    return [];
}

export default search;
