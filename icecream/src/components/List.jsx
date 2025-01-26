import React from 'react';
import Card from './Card';

const shops = [
    { id: 1, name: 'Azucar Ice Cream', description: 'Iconic Cuban Flavors', imageUrl: './src/assets/azucar_icecream.png', url: 'https://www.azucaricecream.com/' },
    { id: 2, name: 'Dasher & Crank', description: 'Craft Ice Cream Artistry', imageUrl: './src/assets/dash_icecream.png', url: 'https://dasherandcrank.com/' },
    { id: 3, name: 'Jaxson\'s Ice Cream Parlor', description: 'Vintage Dessert Experience', imageUrl: './src/assets/jaxsons_icecream.png', url: 'https://www.jaxsonsicecream.com/' },
    { id: 4, name: 'Häagen-Dazs Ice Cream Brickell', description: 'Luxurious Ice Cream Classics', imageUrl: './src/assets/haagen_icecream.png', url: 'https://www.icecream.com/us/en/brands/haagen-dazs/shops/all-shops/brickell-city-centre' },
    { id: 5, name: 'Whip\'n Dip Ice Cream', description: 'Homemade Ice Cream & Soft Serve', imageUrl: './src/assets/whip_icecream.png', url: 'https://saltandstraw.com/' },
    { id: 6, name: 'Skoops', description: 'Gelato Delights at Bayside', imageUrl: './src/assets/skoops_icecream.png', url: 'https://www.yelp.com/biz/skoops-miami' },
    { id: 7, name: 'Coppelia Ice Cream', description: 'Over 30 traditional & tropical flavors', imageUrl: './src/assets/coppelia.png', url: 'https://miamicoppeliaicecream.com/' },
    { id: 8, name: 'The Baked Bear', description: 'Custom ice cream sandwiches', imageUrl: './src/assets/bear_icecream.png', url: 'https://www.thebakedbear.com/locations/miami/' },
    { id: 8, name: 'Danielle Gelato', description: 'Offering flavors such as pistachio, passion fruit, and coconut', imageUrl: './src/assets/danielle_icecream.png', url: 'https://daniellegelato.com/' },
    { id: 10, name: 'Walls Old Fashioned Ice Cream', description: 'Timeless Homemade Treats', imageUrl: './src/assets/walls_icecream.png', url: 'http://www.wallsicecreamfl.com/' },

];

const List = () => {
    return (
        <div className="list-container">  {/* Added class for flexbox layout */}
            {shops.map(shop => (
                <Card key={shop.id} shop={shop} />
            ))}
        </div>
    );
};

export default List;