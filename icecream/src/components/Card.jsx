import React from 'react';

const Card = ({ shop }) => {
    // Consider description longer if > 40 characters
    const descriptionClass = shop.description.length > 40 ? 'long-description' : '';

    return (
        <div className="card">
            <div className="card-image-container">
                <img 
                    src={shop.imageUrl} 
                    alt={shop.name} 
                    className="card-image"
                />
            </div>
            <h3>{shop.name}</h3>
            <p className={descriptionClass}>{shop.description}</p>
            <a href={shop.url} target="_blank" rel="noopener noreferrer" className="view-website-btn">
                View Website
            </a>
        </div>
    );
};

export default Card;
